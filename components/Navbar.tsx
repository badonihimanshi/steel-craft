"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Home, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "/", icon: true },
  { label: "About Us", href: "/#about", dropdown: true },
  { label: "Products", href: "/#products", dropdown: true },
  { label: "Process Chart", href: "/process-chart" },
  { label: "Application", href: "/application" },
  { label: "Product Range", href: "/product-range" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Certificate", href: "/certificate" },
  { label: "Contact", href: "/contact" },
];

// Anchor links (href containing "#") point at a section of the homepage
// rather than a page of their own, so they're never "the current page" —
// only a real route can be highlighted as active.
function isActiveLink(href: string, pathname: string) {
  if (href.includes("#")) return false;
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-graphite">
      <div className="mx-auto flex max-w-7xl items-stretch justify-between px-6">
        <ul className="flex flex-wrap items-stretch">
          {links.map((link) => {
            const isActive = isActiveLink(link.href, pathname);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`flex h-14 items-center gap-1 px-4 font-display text-sm font-medium uppercase tracking-wide transition-colors hover:bg-white/5 hover:text-copper-light ${
                    isActive ? "bg-white/5 text-copper-light" : "text-white/80"
                  }`}
                >
                  {link.icon && <Home size={16} className="mr-1" />}
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown size={14} className="opacity-60" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href="#enquiry"
          className="flex items-center gap-2 bg-copper px-6 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-copper-light"
        >
          <Mail size={16} />
          Enquiry
        </a>
      </div>
    </nav>
  );
}
