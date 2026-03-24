import nodemailer from "nodemailer";
import { z } from "zod";

import { siteConfig } from "@/lib/site";

const requiredText = z.string().trim().min(2).max(160);
const optionalText = z
  .string()
  .trim()
  .max(2000)
  .optional()
  .transform((value) => value ?? "");

export const quoteLeadSchema = z.object({
  name: requiredText,
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().email(),
  boatLength: z.coerce.number().positive().max(300),
  services: z.array(z.string().trim().min(1).max(160)).min(1).max(12),
});

export const contactLeadSchema = z.object({
  name: requiredText,
  phone: z.string().trim().min(7).max(40),
  email: z.string().trim().email(),
  service: z.string().trim().min(1).max(160).optional().default("General inquiry"),
  boatLength: z
    .union([z.coerce.number().positive().max(300), z.literal(""), z.undefined()])
    .transform((value) => (typeof value === "number" ? value : undefined)),
  location: optionalText,
  preferredDate: z.string().trim().max(40).optional().default(""),
  notes: optionalText,
});

export const feedbackLeadSchema = z.object({
  firstName: requiredText,
  lastName: z.string().trim().min(1).max(160).optional().default(""),
  email: z.string().trim().email(),
  serviceDate: z.string().trim().max(40).optional().default(""),
  service: z.string().trim().min(1).max(160).optional().default(""),
  rating: z.coerce.number().int().min(1).max(5),
  crewMember: optionalText,
  feedback: z.string().trim().min(10).max(2000),
  publishConsent: z.boolean().optional().default(false),
});

export type QuoteLead = z.infer<typeof quoteLeadSchema>;
export type ContactLead = z.infer<typeof contactLeadSchema>;
export type FeedbackLead = z.infer<typeof feedbackLeadSchema>;

const REQUIRED_SMTP_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;
const DEFAULT_SMTP_CONNECTION_TIMEOUT_MS = 10000;
const DEFAULT_SMTP_GREETING_TIMEOUT_MS = 10000;
const DEFAULT_SMTP_SOCKET_TIMEOUT_MS = 20000;

export class LeadDeliveryConfigError extends Error {
  constructor(message = "Lead delivery is not configured.") {
    super(message);
    this.name = "LeadDeliveryConfigError";
  }
}

export function getMissingLeadEnv() {
  return REQUIRED_SMTP_ENV.filter((key) => !process.env[key]);
}

function getTransportConfig() {
  const missing = getMissingLeadEnv();
  if (missing.length > 0) {
    throw new LeadDeliveryConfigError(
      `Missing SMTP configuration: ${missing.join(", ")}`
    );
  }

  const port = Number(process.env.SMTP_PORT);
  if (!Number.isFinite(port)) {
    throw new LeadDeliveryConfigError("SMTP_PORT must be a valid number.");
  }

  return {
    host: process.env.SMTP_HOST!,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    connectionTimeout:
      Number(process.env.SMTP_CONNECTION_TIMEOUT_MS) ||
      DEFAULT_SMTP_CONNECTION_TIMEOUT_MS,
    greetingTimeout:
      Number(process.env.SMTP_GREETING_TIMEOUT_MS) ||
      DEFAULT_SMTP_GREETING_TIMEOUT_MS,
    socketTimeout:
      Number(process.env.SMTP_SOCKET_TIMEOUT_MS) || DEFAULT_SMTP_SOCKET_TIMEOUT_MS,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  };
}

export async function sendLeadEmail({
  subject,
  replyTo,
  text,
  html,
}: {
  subject: string;
  replyTo: string;
  text: string;
  html: string;
}) {
  const transport = nodemailer.createTransport(getTransportConfig());

  await transport.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER || siteConfig.email,
    to: process.env.LEADS_TO || siteConfig.email,
    replyTo,
    subject,
    text,
    html,
  });
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function renderLeadTable(
  rows: Array<{ label: string; value: string | number | undefined }>
) {
  const filteredRows = rows.filter(
    (row) => row.value !== undefined && row.value !== null && row.value !== ""
  );

  return `
    <table cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
      ${filteredRows
        .map(
          (row) => `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #e5e7eb; font-weight:600; width:180px;">${escapeHtml(
                row.label
              )}</td>
              <td style="padding:10px 0; border-bottom:1px solid #e5e7eb;">${escapeHtml(
                String(row.value)
              )}</td>
            </tr>
          `
        )
        .join("")}
    </table>
  `;
}
