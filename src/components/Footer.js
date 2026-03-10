export const Footer = () => {
    return `
        <footer class="footer section">
            <div class="container footer-content">
                <div class="footer-brand">
                    <a href="#" class="logo">GEM<span>STONE</span></a>
                    <p>Curating the world's most rare and beautiful natural treasures since 1995. Every stone is certified and ethically sourced.</p>
                </div>
                <div class="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#collection">Collection</a></li>
                        <li><a href="#about">Our Story</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-newsletter">
                    <h4>Newsletter</h4>
                    <p>Subscribe to receive updates on new arrivals and exclusive offers.</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your Email Address" required>
                        <button type="submit" class="btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="container footer-bottom">
                <p>&copy; 2026 GemStone Site. All rights reserved.</p>
                <div class="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Pinterest</a>
                </div>
            </div>
        </footer>
    `;
};

const style = document.createElement('style');
style.textContent = `
    .footer {
        background: rgba(0, 0, 0, 0.5);
        border-top: 1px solid var(--border-glass);
        padding: var(--spacing-xl) 0 var(--spacing-md);
    }
    .footer-content {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-xl);
    }
    .footer-brand .logo {
        display: block;
        font-size: 2rem;
        margin-bottom: var(--spacing-sm);
    }
    .footer-brand p {
        color: var(--text-secondary);
        max-width: 300px;
    }
    .footer h4 {
        margin-bottom: var(--spacing-md);
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--accent-gold);
    }
    .footer-links ul li {
        margin-bottom: 0.5rem;
    }
    .footer-links ul li a {
        color: var(--text-secondary);
    }
    .footer-links ul li a:hover {
        color: var(--text-primary);
    }
    .newsletter-form {
        display: flex;
        gap: 0.5rem;
        margin-top: var(--spacing-sm);
    }
    .newsletter-form input {
        flex: 1;
        background: var(--bg-surface);
        border: 1px solid var(--border-glass);
        padding: 0.75rem;
        border-radius: 8px;
        color: var(--text-primary);
        outline: none;
    }
    .newsletter-form input:focus {
        border-color: var(--accent-gold);
    }
    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: var(--spacing-md);
        border-top: 1px solid rgba(255,255,255,0.05);
        font-size: 0.8rem;
        color: var(--text-muted);
    }
    .social-links {
        display: flex;
        gap: var(--spacing-md);
    }
    @media (max-width: 1024px) {
        .footer-content { grid-template-columns: 1fr 1fr; }
        .footer-newsletter { grid-column: span 2; }
    }
    @media (max-width: 768px) {
        .footer-content { grid-template-columns: 1fr; }
        .footer-newsletter { grid-column: span 1; }
        .footer-bottom { flex-direction: column; gap: var(--spacing-sm); text-align: center; }
    }
`;
document.head.appendChild(style);
