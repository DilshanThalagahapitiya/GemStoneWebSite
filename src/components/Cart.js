export const Cart = () => {
    return `
        <div id="cart-drawer" class="cart-drawer">
            <div class="cart-overlay"></div>
            <div class="cart-content glass-card">
                <div class="cart-header">
                    <h3>Your Selection</h3>
                    <button id="close-cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
                <div id="cart-items" class="cart-items">
                    <!-- Items injected here -->
                </div>
                <div class="cart-footer">
                    <div class="cart-total">
                        <span>Total:</span>
                        <span id="cart-total-amount">$0</span>
                    </div>
                    <button class="btn-primary checkout-btn">Checkout Now</button>
                </div>
            </div>
        </div>
    `;
};

const style = document.createElement('style');
style.textContent = `
    .cart-drawer {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2000;
        visibility: hidden;
        transition: visibility 0.3s;
    }
    .cart-drawer.active {
        visibility: visible;
    }
    .cart-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(4px);
        opacity: 0;
        transition: opacity 0.3s;
    }
    .cart-drawer.active .cart-overlay {
        opacity: 1;
    }
    .cart-content {
        position: absolute;
        top: 1rem;
        right: 1rem;
        bottom: 1rem;
        width: 100%;
        max-width: 450px;
        display: flex;
        flex-direction: column;
        transform: translateX(120%);
        transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        padding: var(--spacing-md);
        border: 1px solid var(--border-glass);
    }
    .cart-drawer.active .cart-content {
        transform: translateX(0);
    }
    .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-md);
        padding-bottom: var(--spacing-sm);
        border-bottom: 1px solid var(--border-glass);
    }
    .cart-items {
        flex: 1;
        overflow-y: auto;
    }
    .cart-item {
        display: flex;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-md);
        padding-bottom: var(--spacing-sm);
        border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .cart-item-img {
        width: 80px;
        height: 80px;
        background: rgba(0,0,0,0.2);
        border-radius: 8px;
        padding: 5px;
    }
    .cart-item-img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .cart-item-info {
        flex: 1;
    }
    .cart-item-name {
        font-family: 'Playfair Display', serif;
        font-size: 1.1rem;
        margin-bottom: 0.25rem;
    }
    .cart-item-price {
        color: var(--accent-gold);
        font-weight: 600;
        display: block;
    }
    .cart-footer {
        padding-top: var(--spacing-md);
        border-top: 1px solid var(--border-glass);
    }
    .cart-total {
        display: flex;
        justify-content: space-between;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: var(--spacing-md);
    }
    .checkout-btn {
        width: 100%;
        padding: 1rem;
    }
    .remove-item {
        color: var(--text-muted);
        font-size: 0.75rem;
        text-decoration: underline;
        margin-top: 5px;
    }
    .remove-item:hover { color: #ef4444; }

    @media (max-width: 500px) {
        .cart-content {
            top: 0; right: 0; bottom: 0;
            max-width: 100%;
            border-radius: 0;
        }
    }
`;
document.head.appendChild(style);
