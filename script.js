  // Sample product data
const products = [
    { id: 1, name: "Blue Bike", price: 19.99, image: "https://i5.walmartimages.com/seo/Hyper-Bicycle-Men-s-29-Explorer-Mountain-Bike-Hard-Tail-Blue_3e93bdb8-f247-4ae2-898a-e03fe12a5472.c6b499258d504157384035a890ee022e.jpeg" },
    { id: 2, name: "TV screen", price: 24.99, image: "https://http2.mlstatic.com/D_NQ_NP_973344-MLU72648243726_112023-O.webp" },
    { id: 3, name: "IPhone", price: 34.99, image: "https://www.mymac.dz/wp-content/uploads/2021/01/iphone-11-vert.jpg" },
    { id: 4, name: "Laptop", price: 14.99, image: "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg" },
];

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    return card;
}

// Function to display products
function displayProducts(productsToShow) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear existing products
    productsToShow.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

// Function to add product to cart (placeholder)
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
    // Implement actual cart functionality here
}

// Function to filter products based on search input
function filterProducts(searchTerm) {
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value;
    const filteredProducts = filterProducts(searchTerm);
    displayProducts(filteredProducts);
}

// Load products when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);

    // Add event listener to search input
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', handleSearch);

    // Add event listener to search button
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', handleSearch);
});
