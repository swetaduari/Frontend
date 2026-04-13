import React from 'react'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
  return (
    <>
  {/* Header */}
  <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container">
      <button
        className="btn border-0 me-2 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarOffcanvas"
      >
        <i className="fas fa-bars fa-lg" />
      </button>
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <div className="logo-box d-flex align-items-center">
          <span
            className="bg-swiggy-orange text-white rounded-3 px-2 py-1 fw-bold fs-4 me-1"
            style={{ backgroundColor: "var(--swiggy-orange)" }}
          >
            P
          </span>
          <span className="fw-bold fs-4 text-dark">Patel Dinning Hall</span>
        </div>
      </Link>
      {/* Desktop Navigation */}
      <div className="collapse navbar-collapse d-none d-lg-block mx-4">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold text-uppercase small">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feedback">
              Feedback
            </Link>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center ms-auto">
        <Link to="/cart" className="nav-link position-relative mx-2">
          <i className="fas fa-shopping-cart fa-lg" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
            0
          </span>
        </Link>
        <Link to="#" className="btn btn-swiggy d-none d-md-block ms-2">
          Sign In
        </Link>
      </div>
    </div>
  </nav>
  {/* Sidebar Offcanvas */}
  <div
    className="offcanvas offcanvas-start"
    tabIndex={-1}
    id="sidebarOffcanvas"
  >
    <div className="offcanvas-header border-bottom shadow-sm">
      <div className="d-flex align-items-center">
        <span
          className="bg-swiggy-orange text-white rounded-3 px-2 py-1 fw-bold me-2"
          style={{ backgroundColor: "var(--swiggy-orange)" }}
        >
          P
        </span>
        <h5 className="offcanvas-title fw-bold">Patel Dining Hall</h5>
      </div>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body p-0">
      <div className="list-group list-group-flush sidebar">
        <Link
          to="/"
          className="list-group-item list-group-item-action active border-0"
        >
          <i className="fas fa-home me-3" /> Home
        </Link>
        <Link
          to="/products"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-utensils me-3" /> Products
        </Link>
        <Link
          to="/gallery"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-images me-3" /> Gallery
        </Link>
        <Link
          to="/cart"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-shopping-cart me-3" /> Cart
        </Link>
        <hr />
        <Link
          to="/checkout"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-credit-card me-3" /> Checkout
        </Link>
        <Link
          to="/feedback"
          className="list-group-item list-group-item-action border-0"
        >
          <i className="fas fa-comment-alt me-3" /> Feedback
        </Link>
      </div>
    </div>
  </div>
</>

  )
}
