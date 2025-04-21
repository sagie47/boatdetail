import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Careers() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-black">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Kelowna Boat Detailing"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="hidden text-xl font-light tracking-wider text-gold md:inline-block">
                KELOWNA BOAT DETAILING
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              HOME
            </Link>
            <Link href="/#about" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              ABOUT
            </Link>
            <Link href="/#services" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              SERVICES
            </Link>
            <Link href="/#pricing" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              PRICING
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
                className="border-gold text-gold bg-black hover:bg-black/90 hover:text-gold"
              >
                GET A QUOTE
              </Button>
            </Link>
            <Link href="/#book">
              <Button size="sm" className="bg-gold text-black hover:bg-gold/90">
                BOOK NOW
              </Button>
            </Link>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gold">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.jpg"
              alt="Careers at Kelowna Boat Detailing"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="grid gap-4">
              <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                JOIN OUR <span className="text-gold">TEAM</span>
              </h1>
              <p className="font-light tracking-wide text-white/90 md:text-lg max-w-2xl">
                Build your career with Kelowna's premier boat detailing company
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-16">
              {/* Intro */}
              <div className="text-center">
                <h2 className="font-playfair text-3xl font-light mb-6">Why Work With Us?</h2>
                <p className="text-gray-700 font-light max-w-2xl mx-auto">
                  At Kelowna Boat Detailing, we're more than just a service company—we're a team of passionate professionals who take pride in our craft. We're always looking for talented individuals who share our commitment to excellence and attention to detail.
                </p>
              </div>
              
              {/* Benefits */}
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="font-playfair text-2xl font-light mb-6 pb-2 border-b border-gold/20">Benefits & Perks</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Competitive Compensation</h4>
                        <p className="text-gray-600 font-light">
                          Base pay plus performance bonuses that reward your expertise and attention to detail.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Flexible Schedule</h4>
                        <p className="text-gray-600 font-light">
                          We understand the importance of work-life balance and offer flexible scheduling options.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Training & Development</h4>
                        <p className="text-gray-600 font-light">
                          Learn from industry experts and advance your skills with ongoing training opportunities.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Team Events</h4>
                        <p className="text-gray-600 font-light">
                          Regular team-building activities and seasonal celebrations to foster a positive work culture.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[350px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=350&width=450"
                    alt="Kelowna Boat Detailing team members working"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* What We Look For */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-playfair text-2xl font-light mb-6 text-center">What We Look For</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center p-4">
                    <div className="bg-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-gold">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Passion for Detail</h4>
                    <p className="text-gray-600 font-light">
                      An eye for detail and a commitment to quality work that exceeds expectations.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="bg-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-gold">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Customer Focus</h4>
                    <p className="text-gray-600 font-light">
                      Friendly, professional attitude with a genuine desire to provide exceptional service.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="bg-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-gold">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Team Player</h4>
                    <p className="text-gray-600 font-light">
                      Ability to work collaboratively while also being self-motivated and reliable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-light mb-10 text-center">Current Opportunities</h2>
              
              <div className="space-y-6">
                {/* Job Position 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-medium mb-2 md:mb-0">Senior Boat Detailer</h3>
                      <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">Full-time</span>
                    </div>
                    <p className="text-gray-600 font-light mb-4">
                      We're looking for an experienced boat detailer with a proven track record of high-quality work. This position requires expertise in all aspects of marine detailing, including oxidation removal, gelcoat restoration, and ceramic coating application.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Kelowna, BC
                      </span>
                      <span>5+ years of experience</span>
                      <span>Competitive salary + benefits</span>
                    </div>
                    <div className="flex justify-end">
                      <Link href="/contact?subject=Senior Boat Detailer Application">
                        <Button className="bg-gold text-black hover:bg-gold/90">
                          APPLY NOW
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Job Position 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-medium mb-2 md:mb-0">Boat Detailing Technician</h3>
                      <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">Full-time / Seasonal</span>
                    </div>
                    <p className="text-gray-600 font-light mb-4">
                      Join our team as a boat detailing technician responsible for exterior washing, interior cleaning, and basic detailing tasks. This is an excellent opportunity for someone looking to build their skills in the marine detailing industry.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Kelowna, BC
                      </span>
                      <span>1-2 years of experience preferred</span>
                      <span>Hourly rate + tips</span>
                    </div>
                    <div className="flex justify-end">
                      <Link href="/contact?subject=Boat Detailing Technician Application">
                        <Button className="bg-gold text-black hover:bg-gold/90">
                          APPLY NOW
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Job Position 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-medium mb-2 md:mb-0">Customer Service Specialist</h3>
                      <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">Part-time</span>
                    </div>
                    <p className="text-gray-600 font-light mb-4">
                      We're seeking a customer-focused individual to handle booking coordination, customer inquiries, and office management. The ideal candidate will have excellent communication skills and be comfortable with basic administrative tasks.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Kelowna, BC
                      </span>
                      <span>Customer service experience required</span>
                      <span>Flexible hours</span>
                    </div>
                    <div className="flex justify-end">
                      <Link href="/contact?subject=Customer Service Specialist Application">
                        <Button className="bg-gold text-black hover:bg-gold/90">
                          APPLY NOW
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Don't See a Position */}
              <div className="mt-12 text-center">
                <h3 className="text-xl font-light mb-4">Don't See the Right Position?</h3>
                <p className="text-gray-600 font-light max-w-xl mx-auto mb-6">
                  We're always interested in connecting with talented individuals who are passionate about boats and detailing. Send us your resume for future opportunities.
                </p>
                <Link href="/contact?subject=General Employment Inquiry">
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                    SUBMIT GENERAL APPLICATION
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl font-light mb-10 text-center">Our Hiring Process</h2>
            
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="relative">
                  <div className="bg-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-gold">1</span>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gold/20"></div>
                </div>
                <h3 className="text-lg font-medium mt-4 mb-2">Application</h3>
                <p className="text-gray-600 font-light text-sm">
                  Submit your resume and a brief introduction through our contact form.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="bg-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-gold">2</span>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gold/20"></div>
                </div>
                <h3 className="text-lg font-medium mt-4 mb-2">Interview</h3>
                <p className="text-gray-600 font-light text-sm">
                  We'll schedule a phone or in-person interview to get to know you better.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="bg-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-gold">3</span>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gold/20"></div>
                </div>
                <h3 className="text-lg font-medium mt-4 mb-2">Skill Assessment</h3>
                <p className="text-gray-600 font-light text-sm">
                  For technical positions, we'll assess your skills with a hands-on demonstration.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="bg-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-gold">4</span>
                  </div>
                </div>
                <h3 className="text-lg font-medium mt-4 mb-2">Onboarding</h3>
                <p className="text-gray-600 font-light text-sm">
                  Welcome to the team! We'll provide comprehensive training to set you up for success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-light mb-10 text-center">What Our Team Says</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden relative flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=56&width=56"
                        alt="Jason Lee"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Jason Lee</h3>
                      <p className="text-sm text-gold">Senior Detailer, 4 years</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-light italic">
                    "Working at Kelowna Boat Detailing has given me the opportunity to perfect my craft while working with amazing clients and boats. The team is supportive, and there's always something new to learn."
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden relative flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=56&width=56"
                        alt="Emily Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Emily Chen</h3>
                      <p className="text-sm text-gold">Detailing Technician, 2 years</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-light italic">
                    "I started with no experience, and the team trained me from the ground up. Now I'm handling my own detailing projects and continuing to grow. The flexible schedule allows me to maintain a great work-life balance."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-action */}
        <section className="bg-black py-16">
          <div className="container px-4 text-center">
            <h2 className="mb-4 font-playfair text-3xl font-light text-white">
              Ready to Join Our Team?
            </h2>
            <p className="text-white/80 font-light mb-8 max-w-2xl mx-auto">
              Take the first step toward a rewarding career in boat detailing. We're looking forward to hearing from you!
            </p>
            <Link href="/contact?subject=Employment Inquiry">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
                APPLY TODAY
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                  <Link href="/#team" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-light tracking-wider text-lg">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/#terms" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Terms
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
                  <Link href="/#support" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Support center
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
                  <Link href="#" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <MapPin className="h-4 w-4" />
                    <span>Kelowna, BC, Canada</span>
                  </Link>
                </li>
                <li>
                  <Link href="tel:+12505551234" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+1 (250) 555-1234</span>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@kelownaboatdetailing.com" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info@kelownaboatdetailing.com</span>
                  </Link>
                </li>
              </ul>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center">
            <p className="text-sm font-light text-gray-500">
              © {new Date().getFullYear()} Kelowna Boat Detailing. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Kelowna Boat Detailing"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 