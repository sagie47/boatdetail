import Link from "next/link";
import Image from "next/image";

export default function TermsAndConditions() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 container px-4 py-16 mx-auto space-y-8 text-gray-700 font-light">
        <h1 className="font-playfair text-4xl font-light">Terms of Service</h1>
        <p>Effective Date: May 2, 2025</p>
        <p>Business Name: Kelowna Boat Detailing</p>
        <p>Business Address: Kelowna, BC, Canada</p>
        <p>Website: kelownaboatdetailing.com</p>

        <h2 className="font-playfair text-2xl font-light mt-6">1. Services</h2>
        <p>We provide mobile and in-shop boat detailing services, which may include washing, waxing, polishing, and interior cleaning. The specific services offered, pricing, and availability are subject to change without notice. Certain services may be available only at specific locations; please inquire for details. We do not provide mechanical repairs or hazardous material cleanup.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">2. Booking and Payment</h2>
        <p>Bookings can be made online via our appointment system or by phone. A valid credit card may be required to hold your appointment. Payment is due upon service completion unless otherwise stated. We accept Visa, MasterCard, and cash. If a deposit is required, you will be notified at the time of booking; deposits are non-refundable per our policy. Late payments may incur a fee of $25.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">3. Cancellations and Rescheduling</h2>
        <p>We require at least 24 hours’ notice for cancellations or rescheduling. No-shows or cancellations made less than 24 hours in advance may be subject to a fee of $50. Exceptions may be made in cases of emergency at our discretion. To cancel or reschedule, please contact us at info@kelownaboatdetailing.com or +1 (250) 555-1234.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">4. Customer Responsibilities</h2>
        <p>You agree to provide accurate information and ensure safe, timely access to your boat at the scheduled appointment. This may include providing keys, dock location, or gate codes as needed. Please remove all personal items before service; we are not responsible for lost or damaged personal belongings. The boat must be in a safe, accessible condition for our staff to perform services.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">5. Satisfaction Guarantee</h2>
        <p>If you are not satisfied with our service, please contact us within 24 hours of service completion at info@kelownaboatdetailing.com or +1 (250) 555-1234, providing your name, service date, and a description of the issue. We will make reasonable efforts to address your concerns. Refunds or re-services are granted at our discretion and do not cover pre-existing damage or issues reported after 24 hours.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">6. Liability</h2>
        <p>We take care to protect your property, but we are not liable for pre-existing damage, issues resulting from age, wear, or manufacturer defects. You accept our services at your own risk. Kelowna Boat Detailing is insured for liability up to $1,000,000. By using our services, you agree to indemnify and hold harmless Kelowna Boat Detailing and its employees from any claims, damages, or losses except those resulting from our gross negligence.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">7. Intellectual Property</h2>
        <p>All content on this website, including logos, text, images, and designs, is owned by Kelowna Boat Detailing and may not be copied, reproduced, or used without our written permission. If you submit reviews, photos, or other content, you grant us a non-exclusive, royalty-free right to use such content for marketing or promotional purposes.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">8. Changes to Terms</h2>
        <p>We may update these Terms of Service from time to time. Changes will be posted on our website with the updated effective date. Continued use of our services after changes are posted constitutes acceptance of the new terms. We will notify customers of significant changes by email or website notice.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">9. Privacy Policy</h2>
        <p>Please review our <Link href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">10. Governing Law</h2>
        <p>These Terms of Service are governed by the laws of the Province of British Columbia, Canada, without regard to its conflict of law principles.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">11. Dispute Resolution</h2>
        <p>Any disputes arising from these terms will be resolved through binding arbitration in Kelowna, BC, Canada, except where prohibited by law.</p>

        <h2 className="font-playfair text-2xl font-light mt-6">12. Contact</h2>
        <p>Questions or concerns?</p>
        <p>Email: info@kelownaboatdetailing.com</p>
        <p>Phone: +1 (250) 555-1234</p>
        <p>Business Hours: 7 days a week, 8am-8pm PST</p>
      </main>
      <footer className="border-t bg-white py-12">
        <div className="container px-4 text-center">
          <Link href="/">
            <Image src="/images/light.png" alt="Kelowna Boat Detailing" width={40} height={40} />
          </Link>
          <p className="mt-4 text-sm font-light text-gray-500">&copy; {new Date().getFullYear()} Kelowna Boat Detailing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
