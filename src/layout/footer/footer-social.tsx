import React from "react";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <>
      <li>
        <Link href="https://www.linkedin.com/company/skillshiftdigital/" target="_blank">
          <i className="bi bi-linkedin"></i>
        </Link>
      </li>
    </>
  );
};

export default FooterSocial;
