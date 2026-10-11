import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string; productId?: string };

/** External affiliate CTAs are always native anchors that open in a new tab. Internal routes use <Link>. */
export default function CTAButton({ href, children, variant = "primary", className = "", productId }: Props) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center rounded-md px-6 py-3 text-center font-bold transition-transform duration-100 active:scale-95 pointer-events-auto";
  const look =
    variant === "primary"
      ? "bg-volt text-ink hover:bg-[#ff7a33]"
      : "border border-volt text-volt hover:bg-volt/10";
  const cls = `${base} ${look} ${className}`;
  if (href.startsWith("#")) return <a href={href} className={cls}>{children}</a>;
  if (href.startsWith("/")) return <Link href={href} className={cls}>{children}</Link>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-affiliate="true" data-product={productId ?? "general"} className={cls}>
      {children}
    </a>
  );
}
