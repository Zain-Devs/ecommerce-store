import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ products, onViewDetails, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-5 text-muted">
        <i className="bi bi-search" style={{ fontSize: '2.5rem' }}></i>
        <p className="mt-3">No products match your search or filter.</p>
      </div>
    );
  }

  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
