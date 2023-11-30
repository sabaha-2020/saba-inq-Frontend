
import React from "react";
import classes from "../Footer/Footer.css";
import { NavLink } from "react-router-dom";
import images from 'src/assets/images/LOGOINQ.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faFacebookF, faLinkedinIn, faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { InqPortal } from 'src/assets/images/logoInqPortal.png';

const Footer = () => {
  return (
<div>
  <div className="container-fluid bg-dark text-light bottom-0 mt-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-4 col-md-6 footer-about">
          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-F p-4">
            <a href className="navbar-brand">
              <img src={images} width="200px" />
      
            </a>
            <p className="mt-3 mb-4">Areej is one of the leading property management companies in Qatar possessing over a decade of experience.</p>
            <form action>
              <div className="input-group">
                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                <button class="btn btn-dark">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-12 pt-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Get In Touch</h3>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-geo-alt text-c me-2" />
                <p className="mb-0">
                #60/182-A22, 2nd Floor, K Zone Trade Centre, Makkolath Lane, Opp. Coronation Theatre, Kozhikode, Kerala, India, PIN 673004 </p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-envelope-open text-c me-2" />
                <p className="mb-0">
                  info@InqPortal.com </p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-telephone text-c me-2" />
                <p className="mb-0">
                  00974 30008156 </p>
              </div>
              <div className="d-flex mt-4">
              <FontAwesomeIcon icon={faTwitter} className="fw-normal text-primary me-2" />
              <FontAwesomeIcon icon={faFacebookF} className="fw-normal text-primary me-2" />
              <FontAwesomeIcon icon={faLinkedinIn} className="fw-normal text-primary me-2" />
              <FontAwesomeIcon icon={faInstagram} className="fw-normal text-primary" />
    </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Quick Links</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-c me-2" />Home</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-c me-2" />About Us</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-c me-2" /> Services</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-c me-2" />Contact Us</a>
                <a className="text-light" href="#"><i className="bi bi-arrow-right text-c me-2" />Login</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Popular Links</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-c me-2" />Home</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-c me-2" />About Us</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-c me-2" />Services</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-c me-2" />Contact Us</a>
                <a className="text-light" href="#"><i className="bi bi-arrow-right text-c me-2" />Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid text-white" style={{background: '#061429'}}>
    <div className="container text-center">
      <div className="row justify-content-end">
        <div className="col-lg-8 col-md-6">
          <div className="d-flex align-items-center justify-content-center" style={{height: 75}}>
            <p className="mb-0 text-center">© <a className="text-white border-bottom" href="#">InqPortal</a>. All Rights Reserved. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )}
  export default Footer;