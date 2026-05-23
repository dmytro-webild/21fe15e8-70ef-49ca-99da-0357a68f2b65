"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Portfolio",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Holley Welding"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      title="Precision Welding & Mechanical Excellence"
      description="Holley Welding & Mechanical Inc delivers high-quality industrial fabrication and mechanical services for the most demanding projects. We build to last."
      buttons={[
        {
          text: "View Our Services",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-fitter-working-doing-polishing-metal_651396-96.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/process-creating-new-metal-parts-busy-workshop-made-by-worker_613910-17218.jpg",
          alt: "Welder team member",
        },
        {
          src: "http://img.b2bpic.net/free-photo/process-creating-modern-fence-with-orange-sparks_7502-9314.jpg",
          alt: "Welder team member",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-is-working-metal-factory-he-is-welding-piece-rail-using-special-tools_613910-3861.jpg",
          alt: "Welder team member",
        },
        {
          src: "http://img.b2bpic.net/free-photo/welding-work-with-metal-construction-busy-metal-factory_613910-17130.jpg",
          alt: "Welder team member",
        },
        {
          src: "http://img.b2bpic.net/free-photo/one-working-day-modern-automatic-bus-trolleybus-car-production-with-unfinished-cars-workers-protective-uniform-factory-background-automobile-assembly-line-welding-arm_645730-373.jpg",
          alt: "Welder team member",
        },
      ]}
      avatarText="Trusted by 500+ projects"
      marqueeItems={[
        {
          type: "text",
          text: "Structural Steel Fabrication",
        },
        {
          type: "text",
          text: "Certified Welding Specialists",
        },
        {
          type: "text",
          text: "Heavy Industrial Repair",
        },
        {
          type: "text",
          text: "Precision Mechanical Design",
        },
        {
          type: "text",
          text: "On-site Mobile Maintenance",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="Proven Experts in Metal & Mechanical Work"
      description="We combine decades of field experience with precision engineering to solve the toughest mechanical and welding challenges in the industry."
      subdescription="Our team ensures every weld meets safety and structural standards, keeping your operations moving smoothly."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/cutting-metal-with-plasma-equipment_176420-4783.jpg"
      mediaAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Structural Fabrication",
          description: "Custom steel and alloy fabrications for infrastructure.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-worker-hard-hat-large-metalworking-plant_146671-19551.jpg",
        },
        {
          title: "Mechanical Repair",
          description: "Precision maintenance and restoration for heavy systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-worker-large-metalworking-plant_146671-19574.jpg",
        },
        {
          title: "On-site Welding",
          description: "Expert mobile welding services for urgent project needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-engineers-work-hours-job-site_23-2151589543.jpg",
        },
      ]}
      title="Comprehensive Industrial Services"
      description="We specialize in tailored solutions for industrial maintenance, structural integrity, and custom fabrication."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Steel Support Beams",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-metallic-background-close-up_23-2148859939.jpg",
        },
        {
          id: "p2",
          name: "Industrial Pipe Assembly",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/technician-worker-cutting-metal-with-many-sharp-sparks-using-equipments-cat-iron_158595-8153.jpg",
        },
        {
          id: "p3",
          name: "Custom Storage Tank",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/electric-wheel-grinding-steel-structure_1359-251.jpg",
        },
        {
          id: "p4",
          name: "Conveyor System",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431375.jpg",
        },
        {
          id: "p5",
          name: "Heavy Machinery Repair",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/waibaidu-bridge-shanghai_1359-30.jpg",
        },
        {
          id: "p6",
          name: "Warehouse Steel Staircase",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/man-using-angle-grinder-with-sparks_23-2149025941.jpg",
        },
      ]}
      title="Completed Projects"
      description="A glimpse into our recent industrial achievements and fabrication excellence."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="inline-image"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15+",
          title: "Years Experience",
          items: [
            "Deep industrial knowledge",
            "Proven reliability",
          ],
        },
        {
          id: "m2",
          value: "500+",
          title: "Projects Completed",
          items: [
            "Diverse industrial sectors",
            "Quality assured",
          ],
        },
        {
          id: "m3",
          value: "100%",
          title: "Safety Compliance",
          items: [
            "Zero injury record",
            "Certified methods",
          ],
        },
      ]}
      title="Safety & Performance Track Record"
      description="Industry-leading efficiency and safety standards for every project."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Holley Welding delivers consistently high results. Their attention to detail on our refinery project was exceptional."
      rating={5}
      author="Mark Stevens, Site Manager"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/view-male-engineer-work-engineers-day-celebration_23-2151615050.jpg",
          alt: "Client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-working-warehouse_23-2148923082.jpg",
          alt: "Client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/low-angle-business-hand-shake_23-2148480352.jpg",
          alt: "Client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/brutal-beard-worker-man-suit-construction-worker-safety-orange-helmet-stay-near-big-industrial-stairs_627829-11413.jpg",
          alt: "Client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-architect-man-showing-thumb-up-gesture-looking-camera_23-2148203957.jpg",
          alt: "Client",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you provide on-site mobile welding?",
          content: "Yes, we have a fully equipped mobile unit for on-site projects.",
        },
        {
          id: "f2",
          title: "Are your technicians certified?",
          content: "Yes, all our welders hold industry-standard certifications.",
        },
        {
          id: "f3",
          title: "What materials do you specialize in?",
          content: "We work with steel, aluminum, and various industrial alloys.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Information regarding our fabrication and welding capabilities."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Start Your Industrial Project"
      description="Reach out today to discuss your next welding, mechanical, or fabrication project."
      buttons={[
        {
          text: "Contact Us Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Welding",
              href: "#",
            },
            {
              label: "Mechanical",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Holley Welding & Mechanical Inc"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
