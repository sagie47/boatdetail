import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-light tracking-wider text-lg">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-story" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-light tracking-wider text-lg">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-light tracking-wider text-lg">GET IN TOUCH</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="tel:+17785812947"
                  className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors"
                >
                  <span className="h-4 w-4" />
                  <span>+1 (778) 581-2947</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@kelownaboatdetailing.com"
                  className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors"
                >
                  <span className="h-4 w-4" />
                  <span>info@kelownaboatdetailing.com</span>
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <Link href="https://www.instagram.com/kelownaboatdetailing/?hl=en" className="text-gray-600 hover:text-gold transition-colors">
                <span className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <Link href="https://okvalleyweb.com/" target="_blank" rel="noopener noreferrer">
            <div className="mt-4 flex flex-col items-center justify-center">
              <p className="text-sm font-light text-gray-500">created by</p>
              <Image
                src="/images/Asset 2.png"
                alt="Web Design Studio Logo"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-auto"
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}