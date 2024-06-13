import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@/assets/images/logo/skillshift logo.svg';
import FooterSocial from './footer-social';

const FooterOne = () => {
  return (
    <div className="footer-one">
    <div className="container">
      <div className="inner-wrapper">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-md-3 footer-intro mb-30">
            <div className="logo mb-15">
              <Link href="/" className="d-inline-block d-lg-none">
                <Image src={logo} alt="logo"/>
              </Link>
            </div> 
            <p className="text-white lh-sm mb-35">Digital Transformation & Business Consulting</p>
            {/* social link */}
            <ul className="style-none d-flex align-items-center social-icon">
             <FooterSocial/>
            </ul>
            {/* social link */}
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">skillshift</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="/about-us">Company</Link></li>
              <li><Link href="/contact">Internships</Link></li>
              <li><Link href="/contact">Social responsibility</Link></li>
              <li><Link href="/contact">Training Programs</Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">Technologies</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="https://seoshift.com.au">seoShift</Link></li>
              <li><Link href="https://kwiks.com.au">Kwiks</Link></li>
              <li><Link href="/contact">Creative Labs</Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">Support</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="/contact">Terms of use</Link></li>
              <li><Link href="/contact">Terms & conditions</Link></li>
              <li><Link href="/privacy-policy">Privacy</Link></li>
              <li><Link href="/contact">Cookie policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="bottom-footer">
        <div className="row align-items-center">
          <div className="col-lg-5 order-lg-last mb-15">
            <div className="footer-newsletter float-xl-end">
              <h5 className="text-white lh-sm mb-35">Subscribe to our monthly data & insights newsletter</h5>
              <form action="#">
                <input type="email" placeholder="Enter your email address"/>
                <button title="Subscribe"><i className="bi bi-arrow-right"></i></button>
              </form>
            </div>
          </div>
          <div className="col-lg-7 order-lg-first mb-15">
            <Link href="/" className="d-none d-lg-inline-block mb-25">
              <Image src={logo} alt="logo"/>
            </Link>
            <div className="d-xl-flex align-items-center">
              <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                <li><Link href="/privacy-policy">Privacy policy</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
              <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                Copyright ©{new Date().getFullYear()} skillshift.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FooterOne;