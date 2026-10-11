import Link from "next/link";
import Image from "next/image";
import { SITE, sub } from "@/lib/affiliate";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={sub()} className="flex items-center">
          <Image src={sub("/logo.png")} alt={`${SITE.name} home`} width={160} height={40} priority className="h-9 w-auto" />
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 text-sm md:flex">
          <a href="#bikes" className="hover:text-volt">Compare bikes</a>
          <a href="#why" className="hover:text-volt">Why these</a>
          <a href="#faq" className="hover:text-volt">FAQ</a>
        </nav>
        <span className="text-xs text-mist">Independent affiliate guide</span>
      </div>
    </header>
  );
}
