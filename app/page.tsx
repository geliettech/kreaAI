import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import GenerateSection from "@/components/GenerateSection";

export default function Home() {
  return (
    <Layout>
      <HeroCarousel />
      <GenerateSection />
    </Layout>
  );
}
