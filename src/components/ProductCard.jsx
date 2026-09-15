import React from 'react';

export default function ProductCard({ product, onViewDetails, onAddToCart }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0 product-card">
        <div className="position-relative overflow-hidden" style={{ height: 220 }}>
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top h-100 w-100"
            style={{ objectFit: 'cover', cursor: 'pointer' }}
            onClick={() => onViewDetails(product)}
            loading="lazy"
          />
          {product.badge && (
            <span className="badge bg-dark position-absolute top-0 start-0 m-2">{product.badge}</span>
          )}
        </div>
        <div className="card-body d-flex flex-column">
          <span className="text-muted small text-uppercase">{product.category}</span>
          <h6
            className="card-title mt-1"
            style={{ cursor: 'pointer' }}
            onClick={() => onViewDetails(product)}
          >
            {product.name}
          </h6>
          <div className="mb-2">
            <span className="fw-bold text-primary">${product.price}</span>
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through ms-2 small">
                ${product.oldPrice}
              </span>
            )}
          </div>
          {product.rating && (
            <div className="text-warning small mb-2">
              <i className="bi bi-star-fill"></i> {product.rating}{' '}
              <span className="text-muted">({product.reviews})</span>
            </div>
          )}
          <div className="mt-auto d-flex gap-2">
            <button
              className="btn btn-outline-secondary btn-sm flex-grow-1"
              onClick={() => onViewDetails(product)}
            >
              Details
            </button>
            <button
              className="btn btn-primary btn-sm flex-grow-1"
              onClick={() => onAddToCart(product)}
            >
              <i className="bi bi-cart-plus me-1"></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
