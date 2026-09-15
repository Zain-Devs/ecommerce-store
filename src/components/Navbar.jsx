import React from 'react';

export default function Navbar({ cartCount, search, onSearchChange, onNavigate, currentView }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        <a
          className="navbar-brand fw-bold fs-3"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('shop');
          }}
        >
          <i className="bi bi-bag-check-fill me-2"></i>ShopEase
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navContent">
          {currentView !== 'cart' && (
            <form className="d-flex mx-lg-auto my-2 my-lg-0 flex-grow-1" style={{ maxWidth: 480 }} onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="search"
                  className="form-control border-start-0"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </form>
          )}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <button
                className={`btn ${currentView === 'shop' ? 'btn-outline-light' : 'btn-link nav-link text-light'} me-2`}
                onClick={() => onNavigate('shop')}
              >
                Shop
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary position-relative"
                onClick={() => onNavigate('cart')}
              >
                <i className="bi bi-cart3 me-1"></i>Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
