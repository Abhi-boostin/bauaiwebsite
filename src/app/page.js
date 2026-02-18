import Hero from "@/components/hero/hero";
import Partners from "@/components/partners/partners";
import Features from "@/components/features/features";
import DeepSearch from "@/components/features/deep-search";
import CompareDemo from "@/components/features/compare-demo";
import CTA from "@/components/cta/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <DeepSearch />
      <CompareDemo />
      <CTA />
    </>
  );
}
