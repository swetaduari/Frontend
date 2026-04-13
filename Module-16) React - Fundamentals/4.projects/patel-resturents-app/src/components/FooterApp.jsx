import React from 'react'

export default function FooterApp() {
  return (
   <> 
   <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold mb-3">COMPANY</h5>
        <a href="#">About us</a>
        <a href="#">Team</a>
        <a href="#">Careers</a>
        <a href="#">Swiggy Blog</a>
        <a href="#">Bug Bounty</a>
      </div>
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold mb-3">CONTACT</h5>
        <a href="#">Help &amp; Support</a>
        <a href="#">Partner with us</a>
        <a href="#">Ride with us</a>
      </div>
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold mb-3">LEGAL</h5>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Refund &amp; Cancellation</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
      </div>
      <div className="col-md-3 mb-4">
        <div className="social-icons">
          <h5 className="fw-bold mb-3">KEEP IN TOUCH</h5>
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
    <hr className="bg-secondary mt-5" />
    <div className="text-center pt-3 text-secondary">
      <small>© 2026 Miggy App . Developed by Brijesh.</small>
    </div>
  </div>
</footer>

<div className="floating-contact">
    <a
      href="https://wa.me/9998003879"
      className="float-btn float-whatsapp"
      target="_blank"
      title="WhatsApp Us"
    >
      <i className="fab fa-whatsapp" />
    </a>
    <a href="tel:9998003879" className="float-btn float-call" title="Call Us">
      <i className="fas fa-phone-alt" />
    </a>
  </div>
  {/* Scroll Top Button */}
  <button id="scrollTopBtn" className="btn btn-swiggy rounded-circle shadow">
    <i className="fas fa-arrow-up" />
  </button>

</>


  )
}
