export const Navbar = () => {
    return `
        <nav class="navbar glass-card">
            <div class="container nav-content">
                <a href="#" class="logo">GEM<span>STONE</span></a>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#collection">Collection</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="nav-actions">
                    <button id="cart-btn" class="cart-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        <span id="cart-count">0</span>
                    </button>
                    <button class="menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                    </button>
                </div>
            </div>
        </nav>
    `;
};

// Add specific styles for Navbar
const style = document.createElement('style');
style.textContent = `
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        border-radius: 0;
        border-top: none;
        border-left: none;
        border-right: none;
        margin: 0;
    }
    .nav-content {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 2px;
    }
    .logo span {
        color: var(--accent-gold);
    }
    .nav-links {
        display: flex;
        gap: var(--spacing-md);
    }
    .nav-links a {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .nav-links a:hover {
        color: var(--accent-gold);
    }
    .nav-actions {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }
    .cart-icon {
        position: relative;
        color: var(--text-primary);
    }
    #cart-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background: var(--accent-gold);
        color: var(--bg-deep);
        font-size: 0.75rem;
        font-weight: 700;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu-btn {
        display: none;
        color: var(--text-primary);
    }
    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
        .menu-btn {
            display: block;
        }
    }
`;
document.head.appendChild(style);
