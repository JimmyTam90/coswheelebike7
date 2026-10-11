import type { Metadata } from "next";
import { BASE_URL } from "@/lib/affiliate";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Privacy Policy | PrimeGearLab", alternates: { canonical: `${BASE_URL}/privacy` } };
export default function Page() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>This website does not sell products and does not ask you to create an account. We do not collect personal data through forms on this site.</p>
      <p>If analytics or advertising pixels are enabled, they may collect usage data such as pages viewed and device information. When you click a link, the merchant&apos;s own privacy policy applies on its website.</p>
      <p>Questions about this policy: <a className="text-volt underline" href="mailto:daniaengracia26377@gmail.com">daniaengracia26377@gmail.com</a>.</p>
    </LegalLayout>
  );
}
