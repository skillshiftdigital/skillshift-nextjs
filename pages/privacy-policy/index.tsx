import React from "react";
import Wrapper from "@/layout/wrapper";
import HeaderTwoDark from "@/layout/header/header-two-dark";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import Footerone from "@/layout/footer/footer-one";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-two";
import Link from "next/link";
import Head from "next/head";


const FaqPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Skillshift - Privacy Policy</title>
        <meta
          name="description"
          content="Skillshift - Privacy Policy's page"
        />
      </Head>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwoDark />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Privacy Policy"
            subtitle=""
            page="Privacy Policy"
            style_3={true}
          />
          {/* breadcrumb end */}

          {/* text area start */}
          <div className="faq-section-three light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80">
            <div className="container">
              <ol>
                <li>Introduction</li>
                <li>Information We Collect</li>
                <li>How We Collect Information</li>
                <li>Use of Your Information</li>
                <li>Disclosure of Your Information</li>
                <li>Security of Your Information</li>
                <li>Your Rights</li>
                <li>Cookies and Tracking Technologies</li>
                <li>Analytics and User Recording</li>
                <li>Newsletter</li>
                <li>Advertising and Retargeting</li>
                <li>Changes to This Privacy Policy</li>
                <li>Contact Us</li>
              </ol>

              <ol>
                <li>
                  <h2>Introduction</h2>
                  <p>
                    Skillshift (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website SkillShift -
                    Digital Transformation and Growth Services (the &quot;Site&quot;). We are
                    committed to protecting your privacy and ensuring that your personal
                    information is handled in a safe and responsible manner. This Privacy
                    Policy outlines how we collect, use, and protect your personal
                    information in compliance with Australian privacy laws, including the
                    Privacy Act 1988 (Cth).
                  </p>
                </li>
                <li>
                  <h2>Information We Collect</h2>
                  <p>We may collect the following types of personal information:</p>
                  <ul>
                    <li>
                      Contact Information: Name, email address, phone number, and postal
                      address.
                    </li>
                    <li>
                      Professional Information: Job title, company name, and industry.
                    </li>
                    <li>
                      Usage Data: Information about how you use our Site, including IP
                      address, browser type, browsing behavior, and interactions with our
                      Site.
                    </li>
                    <li>
                      Analytics Data: Data collected through analytics tools, heatmapping,
                      click maps, and user recording (without collecting any Personally
                      Identifiable Information (PII)).
                    </li>
                    <li>
                      Newsletter Information: Information provided when subscribing to our
                      newsletter, including your email address and preferences.
                    </li>
                    <li>
                      Other Information: Any other information you provide to us directly
                      or indirectly through your use of our Site.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>How We Collect Information</h2>
                  <p>We collect personal information through:</p>
                  <ul>
                    <li>
                      Direct Interactions: When you fill out forms on our Site, subscribe
                      to our newsletter, or communicate with us.
                    </li>
                    <li>
                      Automated Technologies: Cookies and other tracking technologies that
                      collect usage data as you interact with our Site.
                    </li>
                    <li>
                      Third Parties: Information we receive from third-party services that
                      you use in connection with our Site.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Use of Your Information</h2>
                  <p>We use your personal information for the following purposes:</p>
                  <ul>
                    <li>
                      To Provide Services: Deliver the services and information you
                      request from us.
                    </li>
                    <li>
                      To Improve Our Site: Analyze usage data to enhance the user
                      experience and functionality of our Site.
                    </li>
                    <li>
                      To Communicate with You: Send updates, newsletters, and other
                      communications related to our services.
                    </li>
                    <li>
                      For Marketing: Provide you with information about our services,
                      promotions, and events (you can opt out at any time).
                    </li>
                    <li>
                      To Display Ads: Use retargeting and other advertising technologies
                      to display ads to users who have visited our Site on different
                      platforms.
                    </li>
                    <li>
                      To Comply with Legal Obligations: Ensure we comply with our legal
                      and regulatory requirements.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Disclosure of Your Information</h2>
                  <p>We may share your personal information with:</p>
                  <ul>
                    <li>
                      Service Providers: Third-party companies that provide services on
                      our behalf, such as website hosting, data analysis, marketing
                      assistance, and advertising services.
                    </li>
                    <li>
                      Legal Authorities: When required by law or to protect our rights,
                      property, or safety, or that of our users or others.
                    </li>
                    <li>
                      Business Transfers: In the event of a merger, acquisition, or sale
                      of all or a portion of our assets, your information may be
                      transferred to the new owner.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Security of Your Information</h2>
                  <p>
                    We take reasonable steps to protect your personal information from
                    unauthorized access, use, or disclosure. We use a variety of security
                    measures, including encryption and access controls, to safeguard your
                    data.
                  </p>
                </li>
                <li>
                  <h2>Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>
                      Access: Request access to the personal information we hold about
                      you.
                    </li>
                    <li>
                      Correction: Request corrections to any inaccurate or incomplete
                      personal information.
                    </li>
                    <li>
                      Deletion: Request the deletion of your personal information,
                      subject to certain exceptions.
                    </li>
                    <li>Opt-Out: Opt out of receiving marketing communications from us.</li>
                  </ul>
                  <p>To exercise any of these rights, please contact us at [email address].</p>
                </li>
                <li>
                  <h2>Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and other tracking technologies to enhance your
                    experience on our Site. Cookies are small text files that are stored
                    on your device when you visit our Site. These technologies help us
                    understand how you interact with our Site and allow us to improve your
                    user experience. You can control the use of cookies through your
                    browser settings.
                  </p>
                </li>
                <li>
                  <h2>Analytics and User Recording</h2>
                  <p>
                    We use analytics tools, heatmapping, click maps, and user recording to
                    collect data about how users interact with our Site. This data helps
                    us improve our Site and services. We do not collect any Personally
                    Identifiable Information (PII) through these tools unless you
                    explicitly provide it.
                  </p>
                </li>
                <li>
                  <h2>Newsletter</h2>
                  <p>
                    When you subscribe to our newsletter, we collect your email address
                    and preferences. We use this information to send you updates,
                    promotions, and information about our services. You can unsubscribe
                    from our newsletter at any time by following the unsubscribe link in
                    the email or contacting us at [email address].
                  </p>
                </li>
                <li>
                  <h2>Advertising and Retargeting</h2>
                  <p>
                    We may display ads to users who have visited our Site on different
                    platforms using retargeting technologies. This helps us provide
                    relevant advertisements to users based on their interactions with our
                    Site. These ads may be displayed on various websites and social media
                    platforms.
                  </p>
                </li>
                <li>
                  <h2>Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will
                    be posted on this page, and we will notify you of any significant
                    changes by email or through a notice on our Site.
                  </p>
                </li>
                <li>
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions or concerns about this Privacy Policy or our
                    privacy practices, please <Link href="/contact">Contact us</Link>.
                  </p>
                </li>
              </ol>
                
            </div>
          </div>
          {/* text area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <Footerone />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default FaqPage;
