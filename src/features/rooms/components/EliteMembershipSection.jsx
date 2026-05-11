import Button from "@/shared/components/Button";
import React from "react";

const EliteMembershipSection = () => {
  return (
    <section className="py-24 bg-dark overflow-hidden relative">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: The "Hook" */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.3em] text-secondary font-bold">
                Member Exclusive
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-light leading-[1.1]">
              Stay Once, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-highlight">
                Belong Forever.
              </span>
            </h2>

            <p className="text-muted/60 text-lg max-w-xl font-light leading-relaxed">
              Unlock the private collection. Members receive priority booking,
              complimentary estate staffing, and 24/7 concierge access across
              all global villas.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-serif text-light">15%</span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  Year-round Off
                </span>
              </div>
              <div className="w-px h-12 bg-light/10 hidden sm:block" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-serif text-light">Early</span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  Access Pass
                </span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-serif text-light">Elite</span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  Concierge
                </span>
              </div>
            </div>
          </div>

          {/* Right Side CTA Card */}
          <div className="lg:col-span-5">
            <div className="relative p-1 rounded-3xl bg-linear-to-br from-light/10 via-transparent to-secondary/20">
              <div
                className="bg-primary/30 backdrop-blur-2xl border border-white/5 p-10 
              rounded-3xl relative overflow-hidden"
              >
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl font-secondary text-light">
                    Join the Inner Circle
                  </h3>
                  <p className="text-sm text-muted/70 leading-relaxed -mt-4">
                    Enter your email to receive an invitation to our private
                    loyalty program and seasonal catalogues.
                  </p>

                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 text-light text-sm outline-none focus:border-secondary transition-colors"
                    />
                    <Button className="w-full py-4 bg-secondary hover:bg-secondary/90 text-light rounded-xl font-bold uppercase tracking-[0.2em] text-xs transition-all active:scale-95">
                      Request Invitation
                    </Button>
                  </div>

                  <p className="text-[9px] text-center text-muted/40 uppercase tracking-widest">
                    No Spam • Only Excellence • Unsubscribe Anytime
                  </p>
                </div>

                {/* Decorative Card Element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-highlight/20 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteMembershipSection;
