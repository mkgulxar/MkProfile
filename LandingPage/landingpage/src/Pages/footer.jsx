import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <><div className="footer-background">
      <div className="footer-flex">
        <div className="footer-text">
          <h5>Eatly</h5>
          <p>
            We have a mission to make people around the world better through a
            healthier diet
          </p>
        </div>

        <div className="footer-pad">
          <div className="footer-links">
            <h5>About</h5>
          </div>
          <div className="footer-links-about">
            <li>
              <a href="about">About us</a>
            </li>
            <li>
              <a href="features">Features</a>
            </li>
            <li>
              <a href="news&blog">News & Blog</a>
            </li>
          </div>
        </div>

        <div className="footer-pad">
          <div className="footer-links">
            <h5>Movement</h5>
          </div>
          <div className="footer-links-about">
            <li>
              <a href="whateatly">What Eatly</a>
            </li>
            <li>
              <a href="supportus">Support Us</a>
            </li>
          </div>
        </div>

        <div className="footer-pad">
          <div className="footer-links">
            <h5>Company</h5>
          </div>
          <div className="footer-links-about">
            <li>
              <a href="whyeatly">Why Eatly</a>
            </li>
            <li>
              <a href="capital">Capital</a>
            </li>
            <li>
              <a href="security">Security</a>
            </li>
          </div>
        </div>

        <div className="footer-pad">
          <div className="footer-links">
            <h5>Support</h5>
          </div>
          <div className="footer-links-about">
            <li>
              <a href="faqs">FAQs</a>
            </li>
            <li>
              <a href="supportcenter">Support Center</a>
            </li>
            <li>
              <a href="contactus">Contact Us</a>
            </li>
          </div>
        </div>
        </div>
        <div className="footer-rights-flex">
        <div className="footer-rights">
          <p>@2021 Eatly. All rights reserved</p>
        </div>
        <div className="footer-term">
          <li><a href="terms&agreements">Terms & Agreements</a></li>
          <li><a href="privacypolicy">Privacy Policy</a></li>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
