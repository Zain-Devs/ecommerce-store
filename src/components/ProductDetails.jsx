import React, { useState } from 'react';

export default function ProductDetails({ product, onBack, onAddToCart }) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <div>
      <button className="btn btn-link ps-0 mb-3" onClick={onBack}>
        <i className="bi bi-arrow-left me-1"></i>Back to shop
      </button>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="rounded overflow-hidden shadow-sm">
            <img src={product.image} alt={product.name} className="img-fluid w-100" style={{ objectFit: 'cover', maxHeight: 480 }} />
          </div>
        </div>
        <div className="col-md-6">
          <span className="badge bg-secondary text-uppercase mb-2">{product.category}</span>
          <h2 className="fw-bold">{product.name}</h2>

          {product.rating && (
            <div className="text-warning mb-2">
              <i className="bi bi-star-fill"></i> {product.rating}{' '}
              <span className="text-muted">({product.reviews} reviews)</span>
            </div>
          )}

          <div className="mb-3">
            <span className="fs-3 fw-bold text-primary">${product.price}</span>
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through ms-2 fs-5">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <p className="text-muted">
            {product.long_description || product.short_desc || 'No description available for this product.'}
          </p>

          <div className="d-flex align-items-center gap-3 my-4">
            <label className="fw-semibold mb-0">Quantity:</label>
            <div className="input-group" style={{ width: 130 }}>
              <button className="btn btn-outline-secondary" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                -
              </button>
              <input type="text" className="form-control text-center" value={qty} readOnly />
              <button className="btn btn-outline-secondary" onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>
          </div>

          <button
            className="btn btn-primary btn-lg w-100 w-md-auto px-5"
            onClick={() => onAddToCart(product, qty)}
          >
            <i className="bi bi-cart-plus me-2"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
