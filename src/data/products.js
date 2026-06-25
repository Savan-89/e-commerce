// Static dummy product catalogue
export const CATEGORIES = ['Women', 'Men', 'Kids']

export const PRODUCTS = [
  // Women
  { id: 'w1', name: 'Linen Wrap Dress', category: 'Women', price: 78, color: 'Sand', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', sizes: ['XS', 'S', 'M', 'L'], description: 'Relaxed-fit wrap dress in washed linen, finished with a self-tie waist.' },
  { id: 'w2', name: 'Tailored Wide Trousers', category: 'Women', price: 92, color: 'Charcoal', img: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80', sizes: ['XS', 'S', 'M', 'L', 'XL'], description: 'High-waisted wide-leg trousers with a clean tailored finish.' },
  { id: 'w3', name: 'Ribbed Knit Top', category: 'Women', price: 45, color: 'Ivory', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80', sizes: ['XS', 'S', 'M', 'L'], description: 'Fitted ribbed top in soft stretch cotton, ideal for layering.' },
  { id: 'w4', name: 'Oversized Wool Coat', category: 'Women', price: 215, color: 'Camel', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrC3KmsKXmJtaVQrvIBf19h5gAqh_AhZEAcDLuLVCWw&s=10', sizes: ['S', 'M', 'L'], description: 'Double-breasted oversized coat in brushed wool blend.' },
  { id: 'w5', name: 'Silk Slip Skirt', category: 'Women', price: 68, color: 'Blush', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EhH1esk8Iy6D_4zLvm43MmXzk_7OGE5BfOtx0IPLsw&s=10', sizes: ['XS', 'S', 'M'], description: 'Bias-cut slip skirt in lustrous silk-blend fabric.' },
  { id: 'w6', name: 'Denim Jacket', category: 'Women', price: 88, color: 'Light Wash', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80', sizes: ['XS', 'S', 'M', 'L'], description: 'Classic cropped denim jacket with a relaxed shoulder.' },

  // Men
  { id: 'm1', name: 'Cotton Oxford Shirt', category: 'Men', price: 58, color: 'White', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80', sizes: ['S', 'M', 'L', 'XL'], description: 'Crisp oxford shirt cut from breathable cotton poplin.' },
  { id: 'm2', name: 'Tapered Chinos', category: 'Men', price: 72, color: 'Olive', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80', sizes: ['S', 'M', 'L', 'XL'], description: 'Tapered chinos in stretch cotton twill for all-day comfort.' },
  { id: 'm3', name: 'Merino Crew Sweater', category: 'Men', price: 95, color: 'Navy', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80', sizes: ['S', 'M', 'L', 'XL'], description: 'Fine-gauge merino wool sweater with a ribbed crew neck.' },
  { id: 'm4', name: 'Suede Bomber Jacket', category: 'Men', price: 240, color: 'Tobacco', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80', sizes: ['M', 'L', 'XL'], description: 'Soft suede bomber with ribbed cuffs and hem.' },
  { id: 'm5', name: 'Linen Blend Blazer', category: 'Men', price: 165, color: 'Stone', img: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=600&q=80', sizes: ['S', 'M', 'L', 'XL'], description: 'Unstructured blazer in a breathable linen-cotton blend.' },
  { id: 'm6', name: 'Slim Fit Jeans', category: 'Men', price: 80, color: 'Indigo', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80', sizes: ['S', 'M', 'L', 'XL'], description: 'Slim fit jeans in rigid selvedge denim.' },

  // Kids
  { id: 'k1', name: 'Striped Cotton Tee', category: 'Kids', price: 22, color: 'Multi', img: 'https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg', sizes: ['2-3Y', '4-5Y', '6-7Y'], description: 'Soft cotton tee with playful stripes, built for everyday play.' },
  { id: 'k2', name: 'Fleece Zip Hoodie', category: 'Kids', price: 38, color: 'Sky Blue', img: 'https://images.meesho.com/images/products/687015778/nffrq_512.webp?width=512', sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'], description: 'Cosy fleece hoodie with a full front zip and kangaroo pocket.' },
  { id: 'k3', name: 'Corduroy Overalls', category: 'Kids', price: 44, color: 'Mustard', img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80', sizes: ['2-3Y', '4-5Y', '6-7Y'], description: 'Adjustable corduroy overalls with snap closures.' },
  { id: 'k4', name: 'Printed Leggings', category: 'Kids', price: 18, color: 'Floral', img: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80', sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'], description: 'Stretch leggings in a soft cotton blend with playful print.' },
  { id: 'k5', name: 'Quilted Puffer Vest', category: 'Kids', price: 50, color: 'Forest Green', img: 'https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/FEBRUARY/10/Spq6UgSv_ecf4a1a84f1b41c9ad4d45ba6029b7ce.jpg', sizes: ['4-5Y', '6-7Y', '8-9Y'], description: 'Lightweight quilted vest for layering in cooler weather.' },
  { id: 'k6', name: 'Denim Dungaree Dress', category: 'Kids', price: 36, color: 'Denim Blue', img: 'https://includ.com/cdn/shop/files/9c477707-deff-4633-b964-90dde948fb3a.webp?v=1779172241&width=1200', sizes: ['2-3Y', '4-5Y', '6-7Y'], description: 'Pinafore-style denim dress with adjustable straps.' },
]

export function getProductsByCategory(category) {
  if (!category || category === 'All') return PRODUCTS
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}
