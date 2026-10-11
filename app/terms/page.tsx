import type { Metadata } from "next";
import { BASE_URL } from "@/lib/affiliate";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Terms of Service | PrimeGearLab", alternates: { canonical: `${BASE_URL}/terms` } };
export default function Page() {
  return (
    <LegalLayout title="Terms of Service">
      <p>PrimeGearLab provides product comparisons for information only. We make reasonable efforts to keep details accurate, but specifications, prices and availability are controlled by the merchant and may change without notice.</p>
      <p>Purchases are made on the merchant&apos;s website under its terms. PrimeGearLab is not a party to those transactions and is not responsible for the merchant&apos;s products, shipping, returns or warranty.</p>
    </LegalLayout>
  );
}
