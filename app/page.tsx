import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ValueProp } from "@/components/sections/value-prop";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProp />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
