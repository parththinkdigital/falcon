const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

async function fetchAPI(endpoint, options) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  })
  if (!res.ok) throw new Error(`API error: ${res.statusText}`)
  return res.json()
}

export const api = {
  getProducts: (params) => fetchAPI(`/products${params ? `?${params}` : ''}`),
  getProduct: (slug) => fetchAPI(`/products/${slug}`),
  getCategories: () => fetchAPI('/categories'),
  getCategory: (slug) => fetchAPI(`/categories/${slug}`),
  getPosts: (params) => fetchAPI(`/posts${params ? `?${params}` : ''}`),
  getPost: (slug) => fetchAPI(`/posts/${slug}`),
  getGalleryItems: (params) => fetchAPI(`/gallery${params ? `?${params}` : ''}`),
  submitInquiry: (data) => fetchAPI('/inquiries', { method: 'POST', body: JSON.stringify(data) }),
  submitContact: (data) => fetchAPI('/contact', { method: 'POST', body: JSON.stringify(data) }),
  subscribe: (email) => fetchAPI('/newsletter', { method: 'POST', body: JSON.stringify({ email }) }),
}
