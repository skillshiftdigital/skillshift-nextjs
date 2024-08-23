import SEOToolsAffordabilityComparison from './SEOToolsAffordabilityComparison';
import Wrapper from "@/layout/wrapper";
import Head from "next/head";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import about_bg from "@/assets/images/media/img_26.jpg";
import shape from "@/assets/images/shape/shape_25.svg";
import FooterOne from "@/layout/footer/footer-one";

function App() {
  return (
    <Wrapper>
      <Head>
        <title>Bridging the Digital Divide: Global Economic Disparities in SEO Tool Accessibility - skillshift</title>
        <meta
          name="description"
          content="Explore the global disparity in SEO tool affordability across high, middle, and low-income countries. Discover key insights, data visualizations, and potential solutions to bridge the digital divide in search engine optimization accessibility."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.skillshift.com.au/global-seo-affordability-study#webpage",
                "url": "https://www.skillshift.com.au/global-seo-affordability-study",
                "name": "Global SEO Tool Affordability Study | SkillShift",
                "description": "Comprehensive research on the impact of SEO tool accessibility on digital equality and market integrity across the globe.",
                "inLanguage": "en-AU"
              },
              {
                "@type": "ResearchProject",
                "name": "Global SEO Tool Affordability Study",
                "description": "A study unveiling the hidden impact of SEO tool accessibility on digital equality and market integrity across the globe.",
                "url": "https://www.skillshift.com.au/global-seo-affordability-study",
                "author": {
                  "@type": "Person",
                  "name": "Bemoi George",
                  "url": "https://www.bemoi.com"
                },
                "funder": {
                  "@type": "Organization",
                  "name": "SkillShift",
                  "url": "https://www.skillshift.com.au"
                },
                "datePublished": "2023-08-23",
                "keywords": ["SEO", "digital equality", "market integrity", "affordability", "global study"]
              },
              {
                "@type": "Organization",
                "@id": "https://www.skillshift.com.au/#organization",
                "name": "SkillShift",
                "url": "https://www.skillshift.com.au",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.skillshift.com.au/_next/static/media/skillshift%20logo%20green.409a687d.svg",
                  "width": 112,
                  "height": 112,
                  "caption": "SkillShift Logo"
                },
                "sameAs": [
                  "https://www.facebook.com/people/Skill-Shift-Digital-Growth-and-Transformation/61554645797133/",
                  "https://www.instagram.com/skillshiftdigital/",
                  "https://linkedin.com/company/skillshiftdigital"
                ]
              },
              {
                "@type": "Person",
                "@id": "https://www.bemoi.com/#person",
                "name": "Bemoi George",
                "url": "https://www.bemoi.com",
                "jobTitle": "Managing Director, SkillShift",
                "worksFor": {
                  "@id": "https://www.skillshift.com.au/#organization"
                }
              }
            ]
          })}
        </script>
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Global Economic Disparities in SEO Tool Accessibility."
            subtitle="Bridging the Digital Divide"
            page="Global SEO Affordability Study"
            bg_img={about_bg}
            shape={shape}
            style_2={true}
          />
        </main>
        <SEOToolsAffordabilityComparison />
      </div>
      <FooterOne />
    </Wrapper>
  );
}

export default App;