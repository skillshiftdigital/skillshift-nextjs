'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Navbar from "./navbar";
import logo from '@/assets/images/logo/skillshift logo green.svg'
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/components/common/login-modal";

const HeaderTwoDark = () => {
    const {sticky} = useSticky();
    return (
      <>
        <header className={`theme-main-menu menu-overlay menu-style-one green-vr sticky-menu ${sticky?'':''}`}>
          <div className="inner-content position-relative">
            <div className="top-header">
              <div className="d-flex align-items-center justify-content-between">
                <div className="logo order-lg-0">
                  <Link href="/" className="d-flex align-items-center">
                    <Image src={logo} alt="logo"/>
                  </Link>
                </div>
  
                <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                  <ul className="d-flex align-items-center style-none">
                    <li className="d-none d-md-block">
                      <Link href="/contact" className="btn-one tran3s">
                        Get in Touch
                      </Link>
                    </li>
                  </ul>
                </div>
                <nav className="navbar navbar-expand-lg p0 order-lg-2">
                  <button
                    className="navbar-toggler d-block d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    {/* header navbar start */}
                    <Navbar logo_white={true} />
                    {/* header navbar end */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
  
        {/* login modal start */}
        <LoginModal/>
        {/* login modal end */}
      </>
    );
  };
  
  export default HeaderTwoDark;
  