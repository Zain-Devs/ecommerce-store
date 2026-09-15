import React from 'react';

export default function Cart({ cartItems, onUpdateQty, onRemove, onBack, onClear }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-5 my-5">
        <i className="bi bi-cart-x text-muted" style={{ fontSize: '3.5rem' }}></i>
        <h4 className="mt-3">Your cart is empty</h4>
        <p className="text-muted">Looks like you haven't added anything yet.</p>
        <button className="btn btn-primary mt-2" onClick={onBack}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold mb-0">Your Cart</h3>
        <button className="btn btn-outline-danger btn-sm" onClick={onClear}>
          <i className="bi bi-trash me-1"></i>Clear Cart
        </button>
      </div>

      <div className="row">
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3 border-0 shadow-sm">
              <div className="row g-0 align-items-center">
                <div className="col-3 col-md-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded-start"
                    style={{ height: 90, width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-9 col-md-6">
                  <div className="card-body py-2">
                    <h6 className="card-title mb-1">{item.name}</h6>
                    <span className="text-muted small">{item.category}</span>
                    <div className="fw-bold text-primary">${item.price}</div>
                  </div>
                </div>
                <div className="col-6 col-md-2 text-center">
                  <div className="input-group input-group-sm mx-auto" style={{ maxWidth: 120 }}>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </button>
                    <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-6 col-md-2 text-end pe-3">
                  <div className="fw-bold mb-2">${(item.price * item.quantity).toFixed(2)}</div>
                  <button className="btn btn-sm btn-link text-danger p-0" onClick={() => onRemove(item.id)}>
                    <i className="bi bi-x-circle me-1"></i>Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="btn btn-link ps-0" onClick={onBack}>
            <i className="bi bi-arrow-left me-1"></i>Continue Shopping
          </button>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Items ({totalQty})</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-100" onClick={() => alert('Checkout is not implemented in this demo.')}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
