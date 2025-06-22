'use client';

export default function Stats() {
  return (
    <section className="bg-black py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-black border border-gold/30 p-8 text-center">
            <p className="font-playfair text-3xl font-light text-gold">100+</p>
            <p className="mt-2 text-sm font-light tracking-wider text-white/70">HAPPY CUSTOMERS</p>
          </div>
          <div className="rounded-lg bg-black border border-gold/30 p-8 text-center">
            <p className="font-playfair text-3xl font-light text-gold">4.8✯</p>
            <p className="mt-2 text-sm font-light tracking-wider text-white/70">AVERAGE RATING</p>
          </div>
          <div className="rounded-lg bg-black border border-gold/30 p-8 text-center">
            <p className="font-playfair text-3xl font-light text-gold">1,000+</p>
            <p className="mt-2 text-sm font-light tracking-wider text-white/70">HOURS OF DETAILING</p>
          </div>
        </div>
      </div>
    </section>
  );
}