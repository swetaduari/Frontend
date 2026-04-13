import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from '../NavbarApp'
import FooterApp from '../FooterApp'

const productsData = [
  { id: 1, title: 'Margherita Pizza', cuisines: ['Italian'], rating: 4.3, price: 14.99, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&h=300', desc: 'Italian, Cheese, Basil' },
  { id: 2, title: 'Double Cheese Burger', cuisines: ['American'], rating: 4.6, price: 9.99, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&h=300', desc: 'American, Meat, Fast Food' },
  { id: 3, title: 'Spicy Paneer Tacos', cuisines: ['Mexican', 'Indian'], rating: 4.1, price: 7.50, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&h=300', desc: 'Mexican, Paneer, Spicy' },
  { id: 4, title: 'Avocado Salad Bowl', cuisines: ['Healthy'], rating: 4.8, price: 11.20, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=300', desc: 'Healthy, Vegan' },
  { id: 5, title: 'Red Velvet Cake', cuisines: ['Desserts'], rating: 4.9, price: 5.50, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&h=300', desc: 'Desserts, Cakes' },
  { id: 6, title: 'Hakka Noodles', cuisines: ['Chinese'], rating: 4.4, price: 8.99, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&h=300', desc: 'Chinese, Veggies' },
];

const availableCuisines = Array.from(new Set(productsData.flatMap((p) => p.cuisines)));

export default function ProductsApp() {
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [priceLimit, setPriceLimit] = useState(100);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('relevance');

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    // Filter
    let result = productsData.filter((product) => {
      const matchCuisine = selectedCuisines.length === 0 || product.cuisines.some((c) => selectedCuisines.includes(c));
      const matchPrice = product.price <= priceLimit;
      const matchRating = product.rating >= minRating;
      return matchCuisine && matchPrice && matchRating;
    });

    // Sort
    if (sortBy === 'priceLowHigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighLow') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCuisines, priceLimit, minRating, sortBy]);

  return (
    <>
      <NavbarApp />
      <main className="py-5 bg-light-gray">
        <div className="container">
          <div className="row">
            {/* Filters Sidebar (Desktop) */}
            <aside className="col-lg-3 d-none d-lg-block">
              <div
                className="card border-0 shadow-sm p-4 rounded-4 sticky-top"
                style={{ top: 100 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0">Filters</h5>
                  <button 
                    className="btn btn-sm btn-link text-decoration-none text-orange p-0"
                    onClick={() => {
                      setSelectedCuisines([]);
                      setPriceLimit(100);
                      setMinRating(0);
                      setSortBy('relevance');
                    }}
                  >
                    Clear All
                  </button>
                </div>
                
                <div className="mb-4">
                  <h6 className="fw-semibold">Cuisines</h6>
                  {availableCuisines.map((cuisine) => (
                    <div className="form-check mb-2" key={cuisine}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`c-${cuisine}`}
                        checked={selectedCuisines.includes(cuisine)}
                        onChange={() => handleCuisineChange(cuisine)}
                      />
                      <label className="form-check-label" htmlFor={`c-${cuisine}`}>
                        {cuisine}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h6 className="fw-semibold">Price Range</h6>
                  <input
                    type="range"
                    className="form-range"
                    min={0}
                    max={100}
                    id="priceRange"
                    value={priceLimit}
                    onChange={(e) => setPriceLimit(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <span>$0</span>
                    <span className="fw-bold text-orange">${priceLimit}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 className="fw-semibold">Rating</h6>
                  <select 
                    className="form-select" 
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                  >
                    <option value={0}>Any Rating</option>
                    <option value={4}>4+ Stars</option>
                    <option value={3}>3+ Stars</option>
                  </select>
                </div>
              </div>
            </aside>
            
            {/* Products Grid */}
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold">
                  {filteredAndSortedProducts.length} delicacies found
                </h4>
                <div className="dropdown">
                  <button
                    className="btn btn-white border shadow-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Sort by: {
                      sortBy === 'priceLowHigh' ? 'Price: Low to High' :
                      sortBy === 'priceHighLow' ? 'Price: High to Low' :
                      sortBy === 'rating' ? 'Rating' : 'Relevance'
                    }
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" onClick={() => setSortBy('relevance')}>
                        Relevance
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => setSortBy('priceLowHigh')}>
                        Price: Low to High
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => setSortBy('priceHighLow')}>
                        Price: High to Low
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => setSortBy('rating')}>
                        Rating
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="row">
                {filteredAndSortedProducts.map((product) => (
                  <div className="col-md-4 col-sm-6" key={product.id}>
                    <div className="card food-card">
                      <Link to="/product-details">
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.title}
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.desc}</p>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <span className="rating-badge">
                            <i className="fas fa-star" /> {product.rating}
                          </span>
                          <span className="fw-bold">${product.price.toFixed(2)}</span>
                        </div>
                        <button
                          className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
                          data-product={product.title}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredAndSortedProducts.length === 0 && (
                  <div className="col-12 text-center py-5">
                    <h5 className="text-muted">No products found matching your filters.</h5>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {filteredAndSortedProducts.length > 0 && (
                <nav className="mt-5">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <button className="page-link">Previous</button>
                    </li>
                    <li className="page-item active">
                      <button className="page-link">1</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">Next</button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </main>
      <FooterApp />
    </>
  );
}
