import type { Metadata } from "next";
import { BASE_URL } from "@/lib/affiliate";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Affiliate Disclosure | PrimeGearLab", alternates: { canonical: `${BASE_URL}/affiliate-disclosure` } };
export default function Page() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <p>PrimeGearLab is an independent affiliate publisher. We are not the merchant, and we do not sell products on this website.</p>
      <p>We may receive a commission if you make a purchase through links on this page at no extra cost to you. Commissions do not change the price you pay at the merchant.</p>
      <p>Product details, prices and policies are taken from the merchant website, coswheelebike.com, and may change. The merchant&apos;s checkout and policies always take priority.</p>
    </LegalLayout>
  );
}
