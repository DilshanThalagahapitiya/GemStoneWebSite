export const About = () => {
    return `
        <section id="about" class="about section">
            <div class="container about-grid">
                <div class="about-content animate-on-scroll">
                    <h2 class="section-title" style="text-align: left; margin-bottom: 2rem;">Rare Beauty, <br>Ethically Sourced</h2>
                    <p class="about-text">At GemStone, we believe that every gemstone tells a story. Since 1995, we have been dedicated to sourcing the world's most extraordinary natural treasures directly from the mines of Ceylon, Burma, and Colombia.</p>
                    
                    <div class="features-list">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <div class="feature-info">
                                <h4>Certified Quality</h4>
                                <p>Every stone is GIA or GRS certified, ensuring the highest standards of authenticity.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                            </div>
                            <div class="feature-info">
                                <h4>Ethical Sourcing</h4>
                                <p>We maintain direct relationships with miners to guarantee fair trade practices.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            </div>
                            <div class="feature-info">
                                <h4>Master Craftsmanship</h4>
                                <p>Our lapidaries are world-class artisans who maximize each stone's internal fire.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-image-container animate-on-scroll">
                    <div class="gem-frame glass-card">
                        <img src="./assets/images/emerald.png" alt="Exquisite Emerald" class="about-image">
                    </div>
                    <div class="stat-overlay glass-card">
                        <span class="stat-num">25+</span>
                        <span class="stat-label">Years of Excellence</span>
                    </div>
                </div>
            </div>
        </section>
    `;
};

const style = document.createElement('style');
style.textContent = `
    .about {
        padding: var(--spacing-xl) 0;
        background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.05) 0%, transparent 40%);
    }
    .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl);
        align-items: center;
    }
    .about-text {
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-lg);
    }
    .features-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }
    .feature-item {
        display: flex;
        gap: var(--spacing-sm);
    }
    .feature-icon {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        background: var(--bg-surface);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-glass);
    }
    .feature-info h4 {
        margin-bottom: 0.25rem;
        color: var(--text-primary);
    }
    .feature-info p {
        font-size: 0.9rem;
        color: var(--text-muted);
    }
    .about-image-container {
        position: relative;
        padding: 2rem;
    }
    .gem-frame {
        width: 100%;
        aspect-ratio: 1;
        padding: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .about-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 0 30px rgba(16, 185, 129, 0.2));
    }
    .stat-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .stat-num {
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--accent-gold);
        line-height: 1;
    }
    .stat-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--text-secondary);
    }

    /* Reveal Animations */
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .animate-on-scroll.revealed {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 1024px) {
        .about-grid { grid-template-columns: 1fr; }
        .about-image-container { order: -1; max-width: 500px; margin: 0 auto; }
    }
`;
document.head.appendChild(style);
