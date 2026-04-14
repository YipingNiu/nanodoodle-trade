"use client";

import { useEffect, useState } from "react";

const links: [string, string][] = [
  ["What We Seek", "#what"],
  ["Why Us", "#why"],
  ["How We Work", "#how"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="glass-nav fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
          <a
            href="#"
            className="font-headline text-base font-extrabold tracking-tight text-primary md:text-lg"
            onClick={() => setOpen(false)}
          >
            NanoDoodle<span className="text-primary-container"> Trade</span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {links.map(([label, href]) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-primary px-5 py-2 font-headline text-sm font-semibold text-on-primary transition hover:bg-primary-container"
            >
              Contact
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center text-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-on-surface/20 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`shadow-ambient absolute inset-x-0 top-[60px] origin-top bg-surface-container-lowest px-5 pb-8 pt-6 transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-4 font-headline text-base font-semibold text-on-surface transition-colors hover:bg-surface-container-low hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-md bg-primary px-5 py-3 text-center font-headline text-sm font-semibold text-on-primary transition hover:bg-primary-container"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative font-headline text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
