import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import icon from "../../External/icons/facebook.svg";
import icon2 from "../../External/icons/instagram.svg";
import icon3 from "../../External/icons/pinterest.svg";
import icon4 from "../../External/icons/reddit.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-content">
        <div className="footer-main-link">
          <h2>realAbode</h2>
        </div>
        <div className="footer-side-links">
          <div className="footer-location">
            <h4>Real Estate Markets</h4>
            <hr />
            <div className="fooder-link">
              <Link className="fooder-links" to="/">
                Alabama Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Estate Hawaii Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                District Of Columbia Real
              </Link>
              <Link className="fooder-links" to="/">
                New York Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                North Carolina Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                South Carolina Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Texas Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Utah Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Washington Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Florida Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Connecticut Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Colorado Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                California Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Arkansas Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Arizona Real Estate
              </Link>
              <Link className="fooder-links" to="/">
                Alaska Real Estate
              </Link>
            </div>
          </div>
          <div className="footer-explore">
            <h4>Explore Trulia</h4>
            <hr />
            <div className="fooder-link">
              <Link className="fooder-links" to="/">
                About
              </Link>
              <Link className="fooder-links" to="/">
                TermsPrivacyTerms of Use
              </Link>
              <Link className="fooder-links" to="/">
                Listings Quality
              </Link>
              <Link className="fooder-links" to="/">
                Policy Subscription
              </Link>
              <Link className="fooder-links" to="/">
                Terms Help Privacy
              </Link>
              <Link className="fooder-links" to="/">
                Portal Cookie
              </Link>
            </div>
          </div>

          <div className="fooder-professionals">
            <h4>For Professionals</h4>
            <hr />
            <div className="fooder-link">
              <Link className="fooder-links" to="/">
                U.S. Property Records
              </Link>
              <Link className="fooder-links" to="/">
                Popular Counties
              </Link>
            </div>
          </div>

          <div className="fooder-address">
            <h4 className="fooder-address-title">Contact</h4>
            <hr />
            <div className="fooder-address-deatials">
              <h3>+089-765432100</h3>
              <h3>abc@example.com</h3>
            </div>
            <div className="fooder-madia-links">
              <a href="https://www.facebook.com/">
                <img src={icon} alt="social link" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={icon2} alt="social link" />
              </a>
              <a href="https://www.pinterest.com/">
                <img src={icon3} alt="social link" />
              </a>
              <a href="https://www.reddit.com/">
                <img src={icon4} alt="social link" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">© 2020 RealAbode, Inc.</div>
    </div>
  );
};

export default Footer;
