import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from '../NavbarApp'

export default function OrderSuccessApp() {
  return (
    <>
      <style>{`
        .success-animation {
            font-size: 80px;
            color: var(--swiggy-success);
            animation: bounceIn 1s;
        }

        @keyframes bounceIn {
            0% {
                transform: scale(0.3);
                opacity: 0;
            }

            50% {
                transform: scale(1.05);
                opacity: 1;
            }

            70% {
                transform: scale(0.9);
            }

            100% {
                transform: scale(1);
            }
        }
      `}</style>
      <NavbarApp />
      <div className="container py-5 d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <div className="text-center">
              <div className="success-animation mb-4">
                  <i className="fas fa-check-circle"></i>
              </div>
              <h1 className="fw-bold mb-3">Order Placed Successfully!</h1>
              <p className="text-muted lead mb-4">
                  Thank you for your order. Your food is being prepared and will be delivered shortly.
              </p>
              <div className="p-3 bg-light rounded-4 mb-5">
                  <h6 className="text-muted small mb-1">ORDER ID</h6>
                  <h5 className="fw-bold mb-0">#SWGY-7823910</h5>
              </div>
              <div className="d-flex justify-content-center gap-3">
                  <Link to="/" className="btn btn-swiggy btn-lg px-5">Go Home</Link>
                  <Link to="/products" className="btn btn-outline-dark btn-lg px-5">Order More</Link>
              </div>

              <div className="mt-5">
                  <p className="text-muted">Estimated Delivery Time: <span className="fw-bold text-dark">45 mins</span></p>
              </div>
          </div>
      </div>
    </>
  )
}
