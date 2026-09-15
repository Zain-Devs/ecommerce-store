import React, { useState, useEffect, useMemo } from 'react';
import { fetchProducts, fetchCategories } from './api/api.js';
import Navbar from './components/Navbar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Cart from './components/Cart.jsx';
import Loader from './components/Loader.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';

export default function App() {
  // Data state
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // API status state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI / filter state
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [view, setView] = useState('shop'); // 'shop' | 'details' | 'cart'
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Fetch data from the REST API on mount
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    setError(null);
    try {
      const [productsData, categoriesData] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (err) {
      setError(err.message || 'Unable to load products right now.');
    } finally {
      setLoading(false);
    }
  }

  // Derived, filtered product list (search + category)
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, search, activeCategory]);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  // --- Cart handlers ---
  function addToCart(product, quantity = 1) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }

  function updateCartQty(id, quantity) {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  // --- Navigation handlers ---
  function viewDetails(product) {
    setSelectedProduct(product);
    setView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goTo(destination) {
    setView(destination);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        cartCount={cartCount}
        search={search}
        onSearchChange={setSearch}
        onNavigate={goTo}
        currentView={view}
      />

      <main className="container flex-grow-1 py-4">
        {view === 'shop' && (
          <>
            <div className="mb-4">
              <h2 className="fw-bold">Discover Our Collection</h2>
              <p className="text-muted">Quality fashion essentials for everyone.</p>
            </div>

            {loading && <Loader />}
            {!loading && error && <ErrorMessage message={error} onRetry={loadData} />}
            {!loading && !error && (
              <>
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onSelect={setActiveCategory}
                />
                <ProductList
                  products={filteredProducts}
                  onViewDetails={viewDetails}
                  onAddToCart={(p) => addToCart(p, 1)}
                />
              </>
            )}
          </>
        )}

        {view === 'details' && (
          <ProductDetails
            product={selectedProduct}
            onBack={() => goTo('shop')}
            onAddToCart={(product, qty) => {
              addToCart(product, qty);
              goTo('cart');
            }}
          />
        )}

        {view === 'cart' && (
          <Cart
            cartItems={cartItems}
            onUpdateQty={updateCartQty}
            onRemove={removeFromCart}
            onClear={clearCart}
            onBack={() => goTo('shop')}
          />
        )}
      </main>

      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <small>&copy; {new Date().getFullYear()} ShopEase &middot; Built with React &amp; Bootstrap 5</small>
      </footer>
    </div>
  );
}
