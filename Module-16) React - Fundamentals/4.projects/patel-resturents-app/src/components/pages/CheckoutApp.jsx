import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'

export default function CheckoutApp() {
  return (
    <>
      <style>{`
          .step-icon {
              width: 30px;
              height: 30px;
              background: var(--swiggy-dark);
              color: white;
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              margin-right: 15px;
          }
      `}</style>
      <NavbarApp />
      <main className="py-5">
          <div className="container">
              <div className="row g-4">
                  {/* Billing and Address */}
                  <div className="col-lg-8">
                      {/* Delivery Address */}
                      <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
                          <div className="d-flex align-items-center mb-4">
                              <span className="step-icon">1</span>
                              <h4 className="fw-bold mb-0">Delivery Address</h4>
                          </div>
                          <form className="needs-validation" noValidate>
                              <div className="row g-3">
                                  <div className="col-md-6">
                                      <label className="form-label fw-semibold">Full Name</label>
                                      <input type="text" className="form-control" placeholder="Enter your name" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label className="form-label fw-semibold">Phone Number</label>
                                      <input type="tel" className="form-control" placeholder="10-digit number" required />
                                  </div>
                                  <div className="col-12">
                                      <label className="form-label fw-semibold">Street Address</label>
                                      <input type="text" className="form-control" placeholder="Flat No, House Name, Street" required />
                                  </div>
                                  <div className="col-md-4">
                                      <label className="form-label fw-semibold">City</label>
                                      <input type="text" className="form-control" required />
                                  </div>
                                  <div className="col-md-4">
                                      <label className="form-label fw-semibold">State</label>
                                      <select className="form-select" required defaultValue="">
                                          <option value="" disabled>Choose...</option>
                                          <option value="New York">New York</option>
                                          <option value="California">California</option>
                                      </select>
                                  </div>
                                  <div className="col-md-4">
                                      <label className="form-label fw-semibold">Zip Code</label>
                                      <input type="text" className="form-control" required />
                                  </div>
                              </div>
                          </form>
                      </div>

                      {/* Payment Options */}
                      <div className="card border-0 shadow-sm p-4 rounded-4">
                          <div className="d-flex align-items-center mb-4">
                              <span className="step-icon">2</span>
                              <h4 className="fw-bold mb-0">Payment Method</h4>
                          </div>
                          <div className="payment-options">
                              <div className="form-check p-3 border rounded-3 mb-3">
                                  <input className="form-check-input ms-0 me-3" type="radio" name="paymentMethod" id="credit" defaultChecked />
                                  <label className="form-check-label fw-semibold" htmlFor="credit">
                                      <i className="far fa-credit-card me-2"></i> Credit / Debit Card
                                 </label>
                              </div>
                              <div className="form-check p-3 border rounded-3 mb-3">
                                  <input className="form-check-input ms-0 me-3" type="radio" name="paymentMethod" id="upi" />
                                  <label className="form-check-label fw-semibold" htmlFor="upi">
                                      <i className="fas fa-mobile-alt me-2"></i> UPI / Wallet
                                  </label>
                              </div>
                              <div className="form-check p-3 border rounded-3 mb-3">
                                  <input className="form-check-input ms-0 me-3" type="radio" name="paymentMethod" id="cod" />
                                  <label className="form-check-label fw-semibold" htmlFor="cod">
                                      <i className="fas fa-money-bill-wave me-2"></i> Cash on Delivery (COD)
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Order Summary */}
                  <div className="col-lg-4">
                      <div className="card border-0 shadow-sm p-4 rounded-4">
                          <h5 className="fw-bold mb-4">Order Summary</h5>
                          <div className="mb-3">
                              <div className="d-flex justify-content-between mb-2">
                                  <span className="text-muted small">Margherita Pizza x 1</span>
                                  <span className="small">$14.99</span>
                              </div>
                              <div className="d-flex justify-content-between mb-2">
                                  <span className="text-muted small">Double Cheese Burger x 2</span>
                                  <span className="small">$19.98</span>
                              </div>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between mb-4">
                              <h5 className="fw-bold">Total</h5>
                              <h5 className="fw-bold text-orange">$38.92</h5>
                          </div>

                          <Link to="/order-success" className="btn btn-swiggy btn-lg w-100 py-3">PLACE ORDER</Link>

                          <p className="text-center text-muted x-small mt-3 mb-0">
                              By clicking "Place Order", you agree to our <a href="#" className="text-decoration-none text-orange">Terms of Service</a>.
                         </p>
                      </div>
                  </div>
              </div>
          </div>
      </main>
      <FooterApp />
    </>
  )
}
