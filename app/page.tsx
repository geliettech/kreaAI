import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import GenerateSection from "@/components/GenerateSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Layout>
      <HeroCarousel />
      <GenerateSection />
      <Footer />
    </Layout>
  );
}
