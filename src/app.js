import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { ProductGrid } from './components/ProductGrid.js';
import { About } from './components/About.js';
import { Cart } from './components/Cart.js';
import { Footer } from './components/Footer.js';
import { ProductDetail } from './components/ProductDetail.js';
import { Testimonials } from './components/Testimonials.js';
import { inventory } from './data/inventory.js';

// Application State
const state = {
    cart: [],
    isCartOpen: false,
    selectedProduct: null
};

// Initialization
const init = () => {
    // Render static shells
    document.getElementById('navbar-root').innerHTML = Navbar();
    document.getElementById('hero-root').innerHTML = Hero();
    document.getElementById('products-root').innerHTML = ProductGrid();
    document.getElementById('testimonials-root').innerHTML = Testimonials();

    // Inject About before Footer
    const aboutSection = document.createElement('div');
    aboutSection.id = 'about-root';
    aboutSection.innerHTML = About();
    document.getElementById('app').appendChild(aboutSection);

    document.getElementById('footer-root').innerHTML = Footer();
    document.getElementById('cart-root').innerHTML = Cart();

    setupEventListeners();
    initScrollReveal();
};

const initScrollReveal = () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .reveal-on-scroll').forEach(el => observer.observe(el));
};

const setupEventListeners = () => {
    // Cart Toggle
    document.getElementById('cart-btn').addEventListener('click', toggleCart);
    document.getElementById('close-cart').addEventListener('click', toggleCart);
    document.querySelector('.cart-overlay').addEventListener('click', toggleCart);

    // Add to Cart
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const id = e.target.dataset.id;
            addToCart(id);
        }

        // Product Detail
        if (e.target.classList.contains('view-detail-btn')) {
            const id = e.target.dataset.id;
            openProductDetail(id);
        }

        if (e.target.id === 'close-detail' || e.target.id === 'product-detail-root') {
            closeProductDetail();
        }

        if (e.target.id === 'close-cart' || e.target.classList.contains('cart-overlay')) {
            toggleCart();
        }
    });

    // Remove from Cart
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.dataset.index;
            removeFromCart(index);
        }
    });
};

const openProductDetail = (id) => {
    const product = inventory.find(p => p.id === id);
    if (product) {
        state.selectedProduct = product;
        const modal = document.getElementById('product-detail-root');
        modal.innerHTML = ProductDetail(product);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

const closeProductDetail = () => {
    const modal = document.getElementById('product-detail-root');
    modal.classList.remove('active');
    document.body.style.overflow = state.isCartOpen ? 'hidden' : 'auto';
    state.selectedProduct = null;
};

const toggleCart = () => {
    state.isCartOpen = !state.isCartOpen;
    const drawer = document.getElementById('cart-drawer');
    if (state.isCartOpen) {
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        drawer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

const addToCart = (id) => {
    const product = inventory.find(p => p.id === id);
    if (product) {
        state.cart.push(product);
        updateCartUI();
        // Feedback
        const btn = document.querySelector(`[data-id="${id}"]`);
        btn.innerText = 'Added!';
        setTimeout(() => btn.innerText = 'Add to Cart', 1000);
    }
};

const removeFromCart = (index) => {
    state.cart.splice(index, 1);
    updateCartUI();
};

const updateCartUI = () => {
    const count = document.getElementById('cart-count');
    const itemsList = document.getElementById('cart-items');
    const totalAmount = document.getElementById('cart-total-amount');

    // Update Counter
    count.innerText = state.cart.length;

    // Render Items
    if (state.cart.length === 0) {
        itemsList.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--text-muted)">Your cart is empty.</p>';
        totalAmount.innerText = '$0';
    } else {
        itemsList.innerHTML = state.cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-price">$${item.price.toLocaleString()}</span>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            </div>
        `).join('');

        const total = state.cart.reduce((sum, item) => sum + item.price, 0);
        totalAmount.innerText = `$${total.toLocaleString()}`;
    }
};

// Start the app
init();
