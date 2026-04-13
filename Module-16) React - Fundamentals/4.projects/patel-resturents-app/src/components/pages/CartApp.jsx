import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'

export default function CartApp() {
  return (
    <>
      <NavbarApp />
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
          <div className="container">
              <h5 className="mb-0 fw-bold ms-3 d-none d-sm-block">Secure Checkout</h5>
          </div>
      </nav>

      <main className="py-5">
          <div className="container">
              <div className="row">
                  {/* Cart Items List */}
                  <div className="col-lg-8">
                      <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                              <h4 className="fw-bold mb-0">Cart Items (2)</h4>
                              <Link to="/products" className="text-orange text-decoration-none small fw-bold">+ Add more items</Link>
                          </div>

                          {/* Item 1 */}
                          <div className="cart-item">
                              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=100&h=100" alt="Pizza" />
                              <div className="flex-grow-1">
                                  <h6 className="fw-bold mb-1">Margherita Pizza</h6>
                                  <p className="text-muted small mb-0">Extra Cheese, Basil</p>
                              </div>
                              <div className="quantity-control rounded border me-4">
                                  <button className="btn btn-sm">-</button>
                                  <span className="mx-2 fw-bold">1</span>
                                  <button className="btn btn-sm">+</button>
                              </div>
                              <div className="text-end">
                                  <h6 className="fw-bold mb-1">$14.99</h6>
                                  <button className="btn btn-link text-danger p-0 small text-decoration-none">Remove</button>
                              </div>
                          </div>

                          {/* Item 2 */}
                          <div className="cart-item border-0">
                              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=100&h=100" alt="Burger" />
                              <div className="flex-grow-1">
                                  <h6 className="fw-bold mb-1">Double Cheese Burger</h6>
                                  <p className="text-muted small mb-0">No Onions</p>
                              </div>
                              <div className="quantity-control rounded border me-4">
                                  <button className="btn btn-sm">-</button>
                                  <span className="mx-2 fw-bold">2</span>
                                  <button className="btn btn-sm">+</button>
                              </div>
                              <div className="text-end">
                                  <h6 className="fw-bold mb-1">$19.98</h6>
                                  <button className="btn btn-link text-danger p-0 small text-decoration-none">Remove</button>
                              </div>
                          </div>
                      </div>

                      <div className="card border-0 shadow-sm p-4 rounded-4">
                          <h5 className="fw-bold mb-3">Delivery Instruction</h5>
                          <textarea className="form-control" rows="2" placeholder="e.g. Please ring the bell or leave it at the door..."></textarea>
                      </div>
                  </div>

                  {/* Price Summary */}
                  <div className="col-lg-4">
                      <div className="card border-0 shadow-sm p-4 rounded-4 position-sticky" style={{ top: '100px' }}>
                          <h5 className="fw-bold mb-4">Price Summary</h5>
                          <div className="d-flex justify-content-between mb-2">
                              <span>Item Total</span>
                              <span>$34.97</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                              <span>Delivery Charges</span>
                              <span className="text-success">FREE</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                              <span>Platform Fee</span>
                              <span>$1.50</span>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                              <span>GST and Restaurant Charges</span>
                              <span>$2.45</span>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between mb-4">
                              <h5 className="fw-bold">TO PAY</h5>
                              <h5 className="fw-bold text-orange">$38.92</h5>
                          </div>
                          <Link to="/checkout" className="btn btn-swiggy btn-lg w-100">PROCEED TO CHECKOUT</Link>

                          <div className="mt-4 bg-light p-3 rounded-3 text-center">
                              <i className="fas fa-shield-alt text-success me-2"></i>
                              <span className="small text-muted">Safe and Secure Payments</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
      <FooterApp />
    </>
  )
}
