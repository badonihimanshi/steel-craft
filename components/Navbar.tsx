"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Mail, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/", icon: true },
  { label: "Our Story", href: "/#founder" },
  { label: "Products", href: "/#products" },
  { label: "Sizes & Specs", href: "/product-range" },
  { label: "Application", href: "/application" },
  { label: "Certifications", href: "/certificate" },
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-ink/10 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 lg:flex-nowrap lg:items-stretch lg:px-6">
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-graphite transition-colors hover:bg-canvas hover:text-copper lg:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul
          id="primary-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col items-stretch border-t border-ink/10 pb-2 lg:flex lg:w-auto lg:flex-row lg:flex-wrap lg:items-stretch lg:border-0 lg:pb-0`}
        >
          {links.map((link) => {
            const isActive = isActiveLink(link.href, pathname);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex min-h-11 items-center gap-1 border-b-2 border-transparent px-4 font-display text-sm font-medium uppercase tracking-wide transition-colors hover:bg-canvas hover:text-copper lg:h-14 ${
                    isActive ? "border-copper text-copper" : "text-graphite/80"
                  }`}
                >
                  {link.icon && <Home size={16} className="mr-1" />}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href="/contact"
          onClick={closeMenu}
          className={`${isMenuOpen ? "flex" : "hidden"} mb-4 w-full items-center justify-center gap-1.5 rounded-full bg-copper px-3 py-2 font-display text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-copper-light lg:mb-0 lg:flex lg:w-auto lg:py-0`}
        >
          <Mail size={14} />
          Enquiry
        </a>
      </div>
    </nav>
  );
}
