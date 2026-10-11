import CTAButton from "@/components/CTAButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sub } from "@/lib/affiliate";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl text-white">Page not found</h1>
        <p className="mt-3 text-mist">That page does not exist on PrimeGearLab. Head back to the ebike comparison.</p>
        <CTAButton href={sub()} className="mt-6">Back to home</CTAButton>
      </main>
      <Footer />
    </>
  );
}
