const productContainer = document.getElementById('productContainer');
const categoryFilter = document.getElementById('categoryFilter');

let products = [];

// Fetch products.json
fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  })
  .catch(err => console.error('Error loading products:', err));

function displayProducts(productsArray) {
  productContainer.innerHTML = '';
  productsArray.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${capitalizeFirstLetter(product.category)}</p>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Filter by category
categoryFilter.addEventListener('change', (e) => {
  const selectedCategory = e.target.value;
  if (selectedCategory === 'all') {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === selectedCategory);
    displayProducts(filtered);
  }
});