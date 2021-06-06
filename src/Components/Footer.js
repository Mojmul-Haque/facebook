import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinkBottom = [
    "Sign Up",
    "Log In",
    "Messenger",
    "Facebook",
    "Lite",
    "Watch",
    "People",
    "Pages",
    "Page categories ",
    "Places",
    "Games",
    "Locations",
    "Marketplace",
    "Facebook Pay",
    "Groups",
    "Jobs",
    "Osculus",
    "Portal",
    "Instagram",
    "Local",
    "Fundraisers",
    "Services",
    "Voitng informataion center",
    "About",
    "Create ad",
    "Create Page",
    "Devlopers",
    "Careers",
    "Privacy",
    "Cookies",
    "AdChoices",
    "Terms",
    "Help",
  ];

  const footerLinkHead = [
    "বাংলা",
    "অসমীয়া",
    "हिन्दी",
    "Bahasa Indonesia",
    "नेपाली",
    "中文(简体)",
    "العربية",
    "Bahasa Melayu",
    "Español",
    "Português (Brasil)",
  ];

  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="d-flex align-items-center">
              <li className="footer-color">English (UK)</li>
              {footerLinkHead.map((link, index) => (
                <li key={index}>
                  {" "}
                  <Link to="/">{link}</Link>
                </li>
              ))}

              <li>
                <button>+</button>
              </li>
            </ul>
            <div id="contentCurve"></div>
            <ul className="footer-bootom-link">
              {footerLinkBottom.map((link, index) => (
                <li className="d-inline-block" key={index}>
                  {" "}
                  <Link to="/">{link}</Link>
                </li>
              ))}
            </ul>
            <div className="copyright">
              <span>Facebook © 2021</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
