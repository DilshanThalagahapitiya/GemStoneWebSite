export const Hero = () => {
    return `
        <section id="home" class="hero">
            <div class="hero-bg">
                <img src="./assets/images/sapphire.png" alt="Featured Sapphire" class="hero-image animate-fade-in">
            </div>
            <div class="container hero-content">
                <h1 class="hero-title animate-fade-in">Timeless Elegance, <br><span>Naturally Crafted.</span></h1>
                <p class="hero-subtitle animate-fade-in" style="animation-delay: 0.2s">Discover the world's rarest and most exquisite gemstones, ethically sourced and masterfully cut for the discerning collector.</p>
                <div class="hero-ctas animate-fade-in" style="animation-delay: 0.4s">
                    <a href="#collection" class="btn-primary">View Collection</a>
                    <a href="#about" class="btn-outline">Our Story</a>
                </div>
            </div>
            <div class="hero-scroll-indicator">
                <span>SCROLL</span>
                <div class="line"></div>
            </div>
        </section>
    `;
};

const style = document.createElement('style');
style.textContent = `
    .hero {
        height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        padding-top: 80px;
    }
    .hero-bg {
        position: absolute;
        top: 0;
        right: -10%;
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        opacity: 0.6;
    }
    .hero-image {
        max-width: 100%;
        max-height: 80%;
        object-fit: contain;
        filter: drop-shadow(0 0 50px rgba(59, 130, 246, 0.3));
        transform: rotate(-15deg);
    }
    .hero-content {
        max-width: 800px;
    }
    .hero-title {
        font-size: 5rem;
        line-height: 1.1;
        margin-bottom: var(--spacing-sm);
    }
    .hero-title span {
        color: var(--accent-gold);
        font-style: italic;
    }
    .hero-subtitle {
        font-size: 1.25rem;
        color: var(--text-secondary);
        max-width: 500px;
        margin-bottom: var(--spacing-md);
    }
    .hero-ctas {
        display: flex;
        gap: var(--spacing-sm);
    }
    .btn-outline {
        padding: 0.75rem 1.5rem;
        border: 1px solid var(--border-glass);
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    .btn-outline:hover {
        background: var(--bg-glass);
        border-color: var(--accent-gold);
    }
    .hero-scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: var(--spacing-md);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        font-size: 0.75rem;
        letter-spacing: 2px;
        color: var(--text-muted);
    }
    .hero-scroll-indicator .line {
        width: 1px;
        height: 60px;
        background: var(--accent-gold);
        transform-origin: top;
        animation: scaleY 2s infinite ease-in-out;
    }
    @keyframes scaleY {
        0%, 100% { transform: scaleY(0.3); }
        50% { transform: scaleY(1); }
    }
    @media (max-width: 1024px) {
        .hero-title { font-size: 3.5rem; }
        .hero-bg { width: 80%; right: -20%; }
    }
    @media (max-width: 768px) {
        .hero-title { font-size: 2.5rem; }
        .hero { text-align: center; }
        .hero-content { margin: 0 auto; }
        .hero-ctas { justify-content: center; }
        .hero-bg { width: 100%; right: 0; opacity: 0.3; }
        .hero-scroll-indicator { left: 50%; transform: translateX(-50%); }
    }
`;
document.head.appendChild(style);
