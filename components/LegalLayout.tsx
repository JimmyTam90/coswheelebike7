import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-3xl space-y-4 px-4 py-12 leading-relaxed text-mist">
        <h1 className="font-display text-4xl text-white">{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
