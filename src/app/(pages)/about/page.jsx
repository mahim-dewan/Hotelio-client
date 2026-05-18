import Link from "next/link";
import bedRoom from "../../../../public/assets/about/bed-room.jpg";
import loungeRoom from "../../../../public/assets/about/lounge-room.jpg";
import Image from "next/image";

const coreValues = [
  {
    num: "01",
    bg: "bg-light",
    text: "text-primary/70",
    title: "Comfortable Rooms",
    desc: "Carefully designed room categories for every type of traveler.",
  },
  {
    num: "02",
    bg: "bg-highlight/10 sm:translate-y-8",
    text: "text-primary/75",
    title: "Secure Payments",
    desc: "Flexible local and international payment support for guests.",
  },
  {
    num: "03",
    bg: "bg-secondary/10",
    text: "text-primary/75",
    title: "Easy Booking",
    desc: "A smooth and responsive booking flow built for modern users.",
  },
  {
    num: "04",
    bg: "bg-light sm:translate-y-8",
    text: "text-primary/70",
    title: "Guest Support",
    desc: "Friendly support whenever guests need booking assistance.",
  },
];

export default function AboutPage() {
  return (
    <main className="text-primary font-primary antialiased selection:bg-primary/10">
      {/* Hero Section */}
      <section className="overflow-hidden border-b border-muted/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-primary/45">
              About Our Hotel
            </span>

            <h1 className="font-luxury text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Designed for peaceful stays & memorable travel.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary/70 sm:text-lg">
              Our platform helps guests discover comfortable rooms, book with
              confidence, and pay securely using both local and international
              payment methods.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={"/rooms"} className="btn-rounded">
                Explore Rooms
              </Link>

              <Link
                href={"/contact"}
                className="btn-rounded border bg-light border-muted/80 text-primary hover:border-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hand-crafted Asymmetric Visual Grid */}
          <div className="relative pt-6 sm:pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                {/* Image Frame */}
                <div className="rounded-3xl border border-muted/50 bg-light p-3 shadow-sm">
                  <div className="relative aspect-4/5 overflow-hidden rounded-[18px] bg-highlight/20 grayscale opacity-90 transition-all duration-500 hover:grayscale-0">
                    <Image
                      src={bedRoom}
                      alt="Interior"
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="rounded-3xl bg-primary p-6 text-light shadow-md">
                  <span className="text-3xl font-bold tracking-tight">
                    15K+
                  </span>

                  <p className="mt-1 text-xs leading-normal text-light/60">
                    Guests served with trusted hospitality profiles worldwide.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-muted/20 bg-secondary/50 p-6">
                  <span className="text-3xl font-bold tracking-tight text-primary">
                    4.8★
                  </span>

                  <p className="mt-1 text-xs leading-normal text-primary/70">
                    Average guest satisfaction index rating this quarter.
                  </p>
                </div>

                {/* Image Frame */}
                <div className="rounded-3xl border border-muted/50 bg-light p-3 shadow-sm">
                  <div className="relative aspect-3/4 overflow-hidden rounded-[18px] bg-secondary/10 grayscale opacity-90 transition-all duration-500 hover:grayscale-0">
                    <Image
                      src={loungeRoom}
                      alt="Lounge"
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro badge indicator */}
            <div className="absolute -bottom-4 xl:-bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-muted bg-light/90 px-4 py-2.5 shadow-sm backdrop-blur-sm md:flex md:items-center md:gap-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-highlight" />

              <p className="text-xs font-medium tracking-wide text-primary/70">
                Multi-Currency Payment Engine Active
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="border-b border-muted/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="lg:max-w-md">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-primary/45">
              Our Story
            </span>

            <h2 className="font-luxury text-3xl font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl">
              A modern hotel experience built around simplicity.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-primary/70 sm:text-base">
              <p>
                We wanted to create a booking experience that feels clean,
                reliable, and effortless. From discovering rooms to completing
                payments, every part of the experience is designed to help
                guests feel comfortable before they even arrive.
              </p>

              <p>
                Whether someone is booking a luxury suite, a family room, or a
                peaceful weekend getaway, our goal is always identical — make
                travel accessible.
              </p>
            </div>
          </div>

          {/* Clean Card Block Matrix */}
          <div className="grid gap-4 pb-8 sm:grid-cols-2 sm:pb-0">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className={`rounded-3xl border border-muted/60 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${value.bg}`}
              >
                <span className="text-xs font-mono font-medium text-primary/45">
                  {value.num}
                </span>

                <h3 className="mt-3 text-lg font-semibold tracking-tight text-primary">
                  {value.title}
                </h3>

                <p className={`mt-2 text-xs leading-relaxed ${value.text}`}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner Callout */}
      <section className="px-6 py-20 lg:px-8">
        <div className="group relative mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-primary px-8 py-10 text-light sm:flex-row sm:items-center sm:px-12">
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 translate-x-12 -translate-y-12 rounded-full bg-secondary/20 blur-3xl opacity-50 transition-colors duration-500 group-hover:bg-secondary/30" />

          <div className="relative z-10 max-w-xl">
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-light/60">
              Ready To Stay?
            </span>

            <h2 className="font-luxury text-2xl font-bold tracking-tight sm:text-3xl">
              Find the perfect room for your next trip.
            </h2>
          </div>

          <Link
            href={"/rooms"}
            className="btn-rounded bg-light text-primary hover:scale-95 active:scale-95"
          >
            Browse Rooms
          </Link>
        </div>
      </section>
    </main>
  );
}
