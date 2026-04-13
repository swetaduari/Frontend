import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'

export default function ProductDetailsApp() {
  const [count, setCount] = useState(1)

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handlePlus = () => {
    setCount(count + 1)
  }

  return (
    <>
      <NavbarApp />
      <main className="py-5">
          <div className="container">
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-secondary">Home</Link></li>
                      <li className="breadcrumb-item"><Link to="/products" className="text-decoration-none text-secondary">Products</Link></li>
                      <li className="breadcrumb-item active">Margherita Pizza</li>
                  </ol>
              </nav>

              <div className="row mt-4">
                  <div className="col-md-6">
                      <div className="product-image-container position-relative overflow-hidden rounded-4 shadow-sm mb-4">
                          <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&h=300"
                              className="img-fluid w-100" alt="Margherita Pizza" data-bs-toggle="modal"
                              data-bs-target="#lightboxModal" style={{ cursor: 'zoom-in' }} />
                      </div>
                  </div>
                  <div className="col-md-6">
                      <h1 className="fw-bold mb-2">Margherita Pizza</h1>
                      <div className="d-flex align-items-center mb-3">
                          <span className="rating-badge me-2"><i className="fas fa-star"></i> 4.3</span>
                          <span className="text-muted small">(1,200+ Reviews)</span>
                      </div>
                      <h3 className="fw-bold text-orange mb-4">$14.99</h3>
                      <p className="text-muted mb-4">
                          A classic Italian pizza topped with fresh tomato sauce, creamy mozzarella cheese, and fragrant
                          basil leaves. Simple yet packed with flavors, baked in a traditional stone oven for that perfect
                          crispy crust.
                      </p>

                      <div className="mb-4">
                          <h6 className="fw-bold">Quantity</h6>
                          <div className="d-flex align-items-center mt-2">
                              <div className="quantity-control rounded border">
                                  <button className="btn" onClick={handleMinus}>-</button>
                                  <span className="mx-3 fw-bold">{count}</span>
                                  <button className="btn" onClick={handlePlus}>+</button>
                              </div>
                          </div>
                      </div>

                      <div className="d-flex gap-3">
                          <button className="btn btn-swiggy btn-lg flex-grow-1 add-to-cart-btn" data-product="Margherita Pizza">Add to Cart</button>
                          <button className="btn btn-outline-dark btn-lg"><i className="far fa-heart"></i></button>
                      </div>

                      <div className="mt-5 p-3 bg-light rounded-3">
                          <div className="d-flex align-items-center mb-2">
                              <i className="fas fa-truck text-success me-3"></i>
                              <span className="fw-semibold">Free delivery on orders over $30</span>
                          </div>
                          <div className="d-flex align-items-center">
                              <i className="fas fa-clock text-orange me-3"></i>
                              <span className="fw-semibold">Delivered in 30-45 mins</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Related Products */}
              <div className="related-products mt-5 pt-5">
                  <h3 className="fw-bold mb-4">People also ordered</h3>
                  <div className="row">
                      <div className="col-md-3 col-sm-6 mb-4">
                          <div className="card food-card">
                              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&h=300"
                                  className="card-img-top" alt="Burger" />
                              <div className="card-body p-3">
                                  <h6 className="fw-bold mb-1">Double Cheese Burger</h6>
                                  <span className="text-orange fw-bold">$9.99</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 mb-4">
                          <div className="card food-card">
                              <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&h=300"
                                  className="card-img-top" alt="Tacos" />
                              <div className="card-body p-3">
                                  <h6 className="fw-bold mb-1">Paneer Tacos</h6>
                                  <span className="text-orange fw-bold">$7.50</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>

      {/* Lightbox Modal */}
      <div className="modal fade" id="lightboxModal" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content bg-transparent border-0">
                  <div className="modal-body p-0">
                      <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&h=300"
                          className="img-fluid rounded-4" alt="Enlarged Pizza" />
                      <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                          data-bs-dismiss="modal"></button>
                  </div>
              </div>
          </div>
      </div>
      <FooterApp />
    </>
  )
}
