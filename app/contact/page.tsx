import type { Metadata } from "next";
import { BASE_URL } from "@/lib/affiliate";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Contact Us | PrimeGearLab", alternates: { canonical: `${BASE_URL}/contact` } };
export default function Page() {
  return (
    <LegalLayout title="Contact Us">
      <p>Questions about this website: <a className="text-volt underline" href="mailto:daniaengracia26377@gmail.com">daniaengracia26377@gmail.com</a>.</p>
      <p>For orders, shipping, returns or warranty, contact the merchant through coswheelebike.com. We cannot access or change merchant orders.</p>
    </LegalLayout>
  );
}
