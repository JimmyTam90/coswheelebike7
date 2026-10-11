import Link from "next/link";
import { SITE, sub } from "@/lib/affiliate";

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-deep pb-28 pt-10 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-mist">
        <p className="font-display text-xl text-white">{SITE.name}</p>
        <p className="mt-2 max-w-prose">
          We may receive a commission if you make a purchase through links on this page at no extra cost to you.
        </p>
        <nav aria-label="Footer" className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <Link className="py-2 hover:text-volt" href={sub("/privacy")}>Privacy Policy</Link>
          <Link className="py-2 hover:text-volt" href={sub("/terms")}>Terms of Service</Link>
          <Link className="py-2 hover:text-volt" href={sub("/affiliate-disclosure")}>Affiliate Disclosure</Link>
          <Link className="py-2 hover:text-volt" href={sub("/contact")}>Contact Us</Link>
        </nav>
        <p className="mt-2">Email: <a className="text-volt underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        <p className="mt-4">© 2026 PrimeGearLab. All rights reserved. Managed &amp; Operated in partnership with authorized media agency partners.</p>
      </div>
    </footer>
  );
}
