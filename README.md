# SteelCraft Industries

A Next.js 14 (App Router) + TypeScript + Tailwind rebuild of a stainless
steel pipes & tubes manufacturer's website, inspired by (not copied from)
a reference site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route                | What's on it                                          |
|-----------------------|--------------------------------------------------------|
| `/`                   | Home — hero, spec strip, products, founder, applications carousel |
| `/quality-assurance`  | Commitments + testing-stages checklist, ISO callout    |
| `/process-chart`      | Intro paragraph + manufacturing flow diagram            |
| `/application`        | Application categories, each with photo + bullet list   |
| `/product-range`      | Material / size / thickness / spec table                |
| `/certificate`        | Placeholder certificate card                             |
| `/contact`            | Contact details + embedded map                          |

## Structure

```
app/
  layout.tsx              # fonts, metadata, root HTML shell
  page.tsx                 # homepage
  globals.css               # Tailwind entry + small global rules
  quality-assurance/page.tsx
  process-chart/page.tsx
  application/page.tsx
  product-range/page.tsx
  certificate/page.tsx
  contact/page.tsx
components/
  TopBar.tsx                # logo, phone number, certification badge
  Navbar.tsx                 # sticky nav, active-page highlight, enquiry CTA
  Hero.tsx                   # banner with carousel controls
  SpecStrip.tsx               # scrolling strip of steel standards (ASTM/ISO/etc.)
  ProductsPreview.tsx           # "Our Products" grid
  FounderSection.tsx             # dark panel, founder photo + bio (placeholder)
  ProductApplications.tsx          # homepage scrollable application cards
  PageHeader.tsx                    # reusable banner+title used by every subpage
  ProcessFlow.tsx                    # the process-chart diagram
  Footer.tsx
```

## Placeholder content to replace before this goes live

- **Phone number** in `TopBar.tsx` and `app/contact/page.tsx`
- **Logo mark** ("SC" box) in `TopBar.tsx` — swap for a real logo image/SVG
- **Facility photos** everywhere — currently either a CSS pattern (`Hero.tsx`)
  or picsum.photos placeholder images (`ProductApplications.tsx`,
  `app/application/page.tsx`, and the
  `PageHeader` banner used by every subpage)
- **Founder photo + bio** in `FounderSection.tsx` — written as generic
  placeholder copy on purpose (the reference site names a real individual;
  swap in your own founder's name, photo and story)
- **Certificate images** in `app/certificate/page.tsx` — currently an empty
  placeholder frame
- **Address, email, map location** in `app/contact/page.tsx` — the embedded
  map currently points at a generic "Delhi NCR" search, not a real address
- **Footer credit line** in `Footer.tsx`

See the "client data checklist" doc for the full list of real content to
collect before replacing these.

## Notes

- `Navbar.tsx` is a client component using `usePathname()` to highlight
  whichever page you're currently on. Only links to real routes (not
  `/#anchor` links into homepage sections) get highlighted — that's
  intentional, since an anchor isn't "a page" the way `/process-chart` is.
- `ProductApplications.tsx` is a client component because its prev/next
  buttons scroll the card track — everything else is a server component.
- To add another page, create a new folder under `app/` (e.g.
  `app/about/page.tsx`), reuse `TopBar`, `Navbar`, `PageHeader` and
  `Footer`, and add the route to the `links` array in `Navbar.tsx`.
