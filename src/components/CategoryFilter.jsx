import React from 'react';

export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="d-flex flex-wrap gap-2 mb-4">
      <button
        className={`btn btn-sm rounded-pill ${activeCategory === 'All' ? 'btn-dark' : 'btn-outline-dark'}`}
        onClick={() => onSelect('All')}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`btn btn-sm rounded-pill ${activeCategory === cat.name ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => onSelect(cat.name)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
