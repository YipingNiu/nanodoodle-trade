import Image from "next/image";
import Nav from "./nav";

const sectors = [
  {
    icon: "chair",
    title: "Home & Lifestyle Products",
    body: "Curated furniture, decor, and domestic essentials designed for modern Australian living.",
  },
  {
    icon: "devices",
    title: "Home Office, Electronics & Smart Devices",
    body: "Home office setups, consumer electronics, and IoT hardware for the tech-savvy market.",
  },
  {
    icon: "outdoor_grill",
    title: "Outdoor, Garden & BBQ Products",
    body: "Outdoor living essentials, garden tools, and BBQ gear built for the Aussie backyard lifestyle.",
  },
  {
    icon: "lightbulb",
    title: "Innovative New Products",
    body: "Pioneering inventions that solve unique problems or create entirely new categories.",
  },
  {
    icon: "factory",
    title: "OEM / ODM Manufacturing",
    body: "Partnering with manufacturers capable of high-precision custom production runs.",
  },
  {
    icon: "trending_up",
    title: "Products with Potential in the Australian Market",
    body: "Identifying gaps in the local landscape and filling them with global excellence.",
  },
];

const pipeline = [
  {
    n: "01",
    title: "Product Sourcing",
    body: "Identifying high-quality goods across global manufacturing hubs through our trusted network.",
  },
  {
    n: "02",
    title: "Manufacturer Matching",
    body: "Pairing specific Australian requirements with the right production facilities.",
  },
  {
    n: "03",
    title: "Market Research",
    body: "Deep-dive analysis of the Australian competitive landscape and regulatory compliance.",
  },
  {
    n: "04",
    title: "OEM / ODM",
    body: "Custom manufacturing opportunities tailored for unique brand positioning in Australia.",
  },
  {
    n: "05",
    title: "Long-term Partnerships",
    body: "Building sustainable trade bridges that survive fluctuating market conditions.",
  },
  {
    n: "06",
    title: "AI-Enabled Trade",
    body: "Deploying future-state software tools for real-time logistics and demand forecasting.",
  },
];

const contactCards = [
  { icon: "mail", label: "Email Us", value: "trade@nanodoodle.com" },
  { icon: "language", label: "Web", value: "trade.nanodoodle.com" },
  { icon: "location_on", label: "Location", value: "Melbourne, Australia" },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 md:pt-48 md:pb-32">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-primary-fixed-dim/25 blur-3xl" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
            <div className="z-10 lg:col-span-7">
              <span className="mb-5 inline-block rounded-md bg-secondary-container px-3 py-1 font-body text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-primary sm:text-[0.6875rem]">
                Australia Based · Global Reach
              </span>
              <h1 className="mb-5 font-headline text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-primary sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
                Connecting Global Innovation to the{" "}
                <span className="text-primary-container">
                  Australian Market.
                </span>
              </h1>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:mb-10 md:text-xl">
                Product Sourcing & International Trade experts based in
                Melbourne. We connect Australian businesses with trusted
                manufacturers and help suppliers find opportunities in the
                Australian market.
              </p>
              <div>
                <a
                  href="#contact"
                  className="bg-metallic relative inline-block overflow-hidden rounded-md px-6 py-3.5 text-center font-headline text-sm font-semibold text-on-primary transition hover:brightness-110 sm:px-7 sm:py-4"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="shadow-ambient relative rounded-xl bg-surface-container-lowest p-3">
                <Image
                  alt="Overhead view of a shipping container terminal at sunset"
                  src="/hero.png"
                  width={1024}
                  height={1024}
                  priority
                  className="h-[280px] w-full rounded-lg object-cover sm:h-[380px] md:h-[480px]"
                />
                <div className="shadow-ambient ghost-border absolute -bottom-4 -left-4 max-w-[220px] rounded-md bg-surface-container-lowest p-4 sm:-bottom-6 sm:-left-6 sm:max-w-[240px] sm:p-5">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined filled text-primary">
                      verified
                    </span>
                    <span className="font-headline text-sm font-bold text-primary">
                      Market Ready
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    Verified supply chains for the Australian consumer
                    landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Seek */}
        <section id="what" className="bg-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <SectionHeader
              eyebrow="Sectors"
              title="What We Seek"
              body="We focus on high-potential sectors where global innovation, manufacturing capability and Australian demand come together."
            />
            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-md bg-surface-container-lowest p-5 transition hover:bg-surface hover:shadow-ambient"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-primary/[0.06] transition-colors group-hover:bg-primary">
                    <span className="material-symbols-outlined text-primary group-hover:text-on-primary">
                      {s.icon}
                    </span>
                  </div>
                  <h3 className="mb-2 font-headline text-lg font-bold text-on-surface">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="shadow-ambient relative order-2 overflow-hidden rounded-xl bg-surface-container-lowest p-3 lg:order-1">
                <Image
                  alt="Modern office with software engineers working on large displays"
                  src="/why-us.png"
                  width={512}
                  height={512}
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="mb-4 block font-body text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary">
                  The NanoDoodle Edge
                </span>
                <h2 className="mb-6 font-headline text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-primary sm:text-4xl md:text-5xl">
                  Precision Sourcing Powered by Technology.
                </h2>
                <p className="mb-5 text-base leading-relaxed text-on-surface-variant sm:text-lg">
                  We are an Australian-based company combining international
                  trade with a deep background in software and artificial
                  intelligence, helping both businesses and manufacturers build
                  the right partnerships.
                </p>
                <p className="mb-8 text-base leading-relaxed text-on-surface-variant sm:text-lg">
                  Unlike traditional traders, we use AI tools and market
                  insight to identify products with strong potential, connect
                  the right partners, and build long-term relationships that
                  scale.
                </p>
                <div className="space-y-3">
                  <EdgeItem icon="psychology">
                    AI-Enhanced Market Intelligence
                  </EdgeItem>
                  <EdgeItem icon="location_on">
                    Melbourne Headquartered Network
                  </EdgeItem>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="how" className="bg-primary py-16 text-on-primary md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="mb-14 max-w-2xl">
              <span className="mb-4 block font-body text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-fixed-dim">
                Pipeline
              </span>
              <h2 className="mb-5 font-headline text-3xl font-bold tracking-[-0.02em] sm:text-4xl md:text-5xl">
                Our Sourcing Pipeline
              </h2>
              <p className="text-base text-on-primary-container sm:text-lg">
                From initial discovery to long-term market dominance, we manage
                the entire lifecycle of trade.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {pipeline.map((p, i) => (
                <div
                  key={p.n}
                  className="rounded-md p-6 transition hover:brightness-110"
                  style={{
                    backgroundColor: `rgba(29, 91, 150, ${0.35 + (i % 3) * 0.12})`,
                  }}
                >
                  <span className="mb-5 block font-headline text-3xl font-black text-on-primary/25">
                    {p.n}
                  </span>
                  <h3 className="mb-2 font-headline text-lg font-bold">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-primary-container">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-8 text-center">
            <div className="shadow-ambient bg-metallic relative mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full text-on-primary">
              <span className="material-symbols-outlined text-3xl">
                handshake
              </span>
            </div>
            <h2 className="mb-5 font-headline text-3xl font-bold tracking-[-0.02em] text-primary sm:text-4xl md:text-5xl">
              Partner With Us
            </h2>
            <p className="mb-10 text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Looking to enter the Australian market or source new products?
              Share your company profile, product catalogue, or product
              requirements — we're always interested in new partnerships and
              opportunities.
            </p>
            <a
              href="mailto:trade@nanodoodle.com"
              className="bg-metallic shadow-ambient relative inline-block overflow-hidden rounded-md px-8 py-4 font-headline text-base font-semibold text-on-primary transition hover:brightness-110"
            >
              Contact Our Team
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {contactCards.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 rounded-md bg-surface-container-low p-5 transition hover:bg-surface-container"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/[0.06]">
                    <span className="material-symbols-outlined text-primary">
                      {c.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary">
                      {c.label}
                    </p>
                    <p className="font-headline text-sm font-semibold text-on-surface">
                      {c.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 py-12 md:grid-cols-4">
          <div>
            <div className="mb-3 font-headline text-base font-extrabold text-primary">
              NanoDoodle Trade
            </div>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              Expert sourcing and international trade solutions for the modern
              era.
            </p>
          </div>
          <FooterCol
            heading="Solutions"
            items={[
              ["What We Seek", "#what"],
              ["Why Us", "#why"],
              ["How We Work", "#how"],
            ]}
          />
          <FooterCol
            heading="Legal"
            items={[
              ["Privacy Policy", "#"],
              ["Terms of Service", "#"],
            ]}
          />
          <div className="flex items-end">
            <p className="text-xs text-on-surface-variant">
              © {new Date().getFullYear()} NanoDoodle Trade. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="text-center">
      <span className="mb-4 block font-body text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary">
        {eyebrow}
      </span>
      <h2 className="font-headline text-3xl font-bold tracking-[-0.02em] text-primary md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">{body}</p>
    </div>
  );
}

function EdgeItem({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-md bg-surface-container-low p-4">
      <span className="material-symbols-outlined filled text-primary">
        {icon}
      </span>
      <span className="font-headline text-sm font-semibold text-on-surface">
        {children}
      </span>
    </div>
  );
}

function FooterCol({
  heading,
  items,
}: {
  heading: string;
  items: [string, string][];
}) {
  return (
    <div>
      <h4 className="mb-4 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
        {heading}
      </h4>
      <ul className="space-y-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-xs text-on-surface-variant transition-colors hover:text-primary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
