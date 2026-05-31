import ContactFormBox from "@/features/contact/components/ContactFormBox";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <main className="text-primary">
      {/* 1. Header Section */}
      <header className="border-b border-muted overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 lg:px-8 lg:pt-28 lg:pb-16 text-center sm:text-left">
          <span className="text-xs font-semibold tracking-[0.3em] text-primary/50 uppercase block mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl">
            We’re here to help coordinate your perfect sanctuary.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary/80 sm:text-lg font-secondary">
            Have questions about room configurations, localized transactional
            billing, or extended reservations? Reach out to our concierge desk.
          </p>
        </div>
      </header>

      {/* 2. Interactive Form & Visual Sidebar Layout */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Responsive Grid: Stacks up/down on mobile, sits side-by-side on lg (big monitors) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          {/* Contact Form Element */}
          <ContactFormBox />

          {/* Sidebar Area: Elegant Asset Frame + Desk Details */}
          <div className="space-y-8 lg:sticky lg:top-8">
            {/* Visual Aspect Image Container */}
            <div className="rounded-2xl bg-white p-3 shadow-sm border border-muted">
              <div className="relative aspect-4/3 rounded-2xl bg-muted overflow-hidden opacity-95 hover:grayscale-0 transition-all duration-700">
                <Image
                  src="https://i.pinimg.com/1200x/ad/a4/6a/ada46a1889c1565e47488d8e80af778a.jpg"
                  alt="Hotel Concierge Desk"
                  fill
                  unoptimized
                  className="w-full h-full object-cover"
                />

                {/* Embedded subtle currency confirmation UI badge */}
                <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse" />
                  <span className="text-[10px] text-light tracking-wider font-mono font-medium uppercase">
                    USD / Local Hub Live
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Support Details Group */}
            <div className="bg-muted/30 border border-muted rounded-2xl p-6 space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary font-secondary">
                  Direct Contact Desk
                </h4>
                <p className="mt-2 text-sm text-primary/80 font-secondary">
                  concierge@hotelio.com
                </p>
                <p className="text-xs text-primary/60 mt-0.5">
                  +880 1234 567890
                </p>
              </div>

              <div className="border-t border-muted pt-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                  Physical Sanctuary
                </h4>
                <p className="mt-2 text-sm text-primary/80 font-(--font-secondary) leading-relaxed">
                  Cox’s Bazar Sea Beach Road
                  <br />
                  Cox’s Bazar, Bangladesh
                </p>
              </div>

              <div className="border-t border-muted pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary/70">
                    Local Core Payments
                  </h4>
                  <p className="text-[11px] text-primary/60 mt-0.5 font-mono">
                    Supported via direct safe-gateways
                  </p>
                </div>
                <span className="text-lg font-bold text-highlight">$ / ৳</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
