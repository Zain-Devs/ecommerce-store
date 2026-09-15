// Central place for all API calls.
// Swap API_BASE to point at any other API that returns the same JSON shape.
export const API_BASE = "https://muhammadfarhandeveloper.github.io/E-Commerce-fakeapi";

export async function fetchProducts() {
  const response = await fetch(`${API_BASE}/products.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products (status ${response.status})`);
  }
  return response.json();
}

export async function fetchCategories() {
  const response = await fetch(`${API_BASE}/category.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch categories (status ${response.status})`);
  }
  return response.json();
}
