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