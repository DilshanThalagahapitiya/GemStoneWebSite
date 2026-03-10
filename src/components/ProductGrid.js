import { inventory } from '../data/inventory.js';

export const ProductCard = (product) => {
    return `
        <div class="product-card glass-card animate-fade-in">
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-badge">${product.origin}</div>
            </div>
            <div class="product-info">
                <div class="product-meta">
                    <span class="product-category">${product.category}</span>
                    <span class="product-carat">${product.carat} carats</span>
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-specs">
                    <span>${product.cut}</span> • <span>${product.clarity}</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toLocaleString()}</span>
                    <button class="add-to-cart-btn btn-primary" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
};

export const ProductGrid = () => {
    return `
        <section id="collection" class="collection section">
            <div class="container">
                <h2 class="section-title">Exclusive Collection</h2>
                <p class="section-subtitle">Hand-picked treasures from the depths of the earth.</p>
                <div class="product-grid">
                    ${inventory.map(ProductCard).join('')}
                </div>
            </div>
        </section>
    `;
};

const style = document.createElement('style');
style.textContent = `
    .collection {
        padding: var(--spacing-xl) 0;
    }
    .section-subtitle {
        text-align: center;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-md);
    }
    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: var(--spacing-md);
        margin-top: var(--spacing-lg);
    }
    .product-card {
        padding: var(--spacing-sm);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .product-card:hover {
        transform: translateY(-10px);
        border-color: var(--accent-gold);
    }
    .product-img-container {
        height: 250px;
        background: rgba(0,0,0,0.2);
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product-image {
        max-width: 80%;
        max-height: 80%;
        object-fit: contain;
        transition: transform 0.6s ease;
    }
    .product-card:hover .product-image {
        transform: scale(1.1);
    }
    .product-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: var(--bg-deep);
        border: 1px solid var(--border-glass);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .product-info {
        padding: var(--spacing-sm);
    }
    .product-meta {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
    .product-category {
        color: var(--accent-gold);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    .product-carat {
        color: var(--text-muted);
        font-size: 0.75rem;
    }
    .product-name {
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
    }
    .product-specs {
        font-size: 0.8rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
    }
    .product-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .product-price {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
    }
    .add-to-cart-btn {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }
    @media (max-width: 480px) {
        .product-grid { grid-template-columns: 1fr; }
    }
`;
document.head.appendChild(style);
