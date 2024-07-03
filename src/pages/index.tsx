import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import StartBuildingSection from "@site/src/components/LandingPage/StartBuilding";
import Layout from "@theme/Layout";
import React from "react";

import FeaturesSection from "../components/LandingPage/FeaturesSection/FeaturesSection";
import FoundationSection from "../components/LandingPage/Foundation";
import GallerySection from "../components/LandingPage/Gallery";
import { CardsSection } from "../components/LandingPage/Hero/Cards";
import Hero from "../components/LandingPage/Hero/Hero";
import IntroCards from "../components/LandingPage/Hero/IntroCards";
import { NewsSection } from "../components/LandingPage/Hero/News";
import {
  CollapsedVisionSection,
  VisionSection,
} from "../components/LandingPage/Hero/VisionSection";
import NewsletterSection from "../components/LandingPage/NewsletterSection/NewsletterSection";
import SectionsBar from "../components/LandingPage/SectionsBar";
import Sustainable from "../components/LandingPage/Sustainable/Sustainable";
import SectionSlider from "../components/LandingPage/Hero/SectionSlider";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
      editPath={`https://github.com/dfinity/portal/edit/master/${__filename}`}
    >
      <Hero>
        <SectionSlider />
        <CardsSection />
        <NewsSection />
      </Hero>

      <main className="w-full relative bg-[#1B025A] z-[0]">
        <div className="overflow-hidden">
          <NewsletterSection formUrl="https://dfinity.us16.list-manage.com/subscribe/post?u=33c727489e01ff5b6e1fb6cc6&amp;id=7e9469a315&amp;f_id=00bac2e1f0">
            Sign up for email updates{" "}
            <span className="text-white-60">
              to keep up to date with the Internet Computer
            </span>
          </NewsletterSection>
        </div>
      </main>
      <SectionsBar />
    </Layout>
  );
}
