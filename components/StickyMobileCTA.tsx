import CTAButton from "./CTAButton";
import { DEFAULT_AFFILIATE_URL } from "@/lib/affiliate";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pointer-events-auto border-t border-edge bg-ink/95 px-4 pt-3 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <CTAButton href={DEFAULT_AFFILIATE_URL} className="w-full">Shop COSWHEEL ebikes</CTAButton>
    </div>
  );
}
