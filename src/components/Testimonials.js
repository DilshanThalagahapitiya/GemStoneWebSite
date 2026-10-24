export const Testimonials = () => {
    const reviews = [
        {
            name: "Alexandra Reed",
            role: "Gem Collector",
            text: "The quality of the Sapphire I purchased exceeded all expectations. The certification process gave me complete peace of mind.",
            avatar: "AR"
        },
        {
            name: "James Thornton",
            role: "Engagement Rings",
            text: "Finding the perfect emerald was a journey, but GemStone made it an experience. Their expertise is unmatched in the industry.",
            avatar: "JT"
        },
        {
            name: "Elena Petrova",
            role: "Jewelry Designer",
            text: "As a designer, I look for unique cuts and exceptional clarity. GemStone is my primary source for investment-grade stones.",
            avatar: "EP"
        }
    ];

    return `
        <section id="testimonials" class="testimonials section reveal-on-scroll">
            <div class="container">
                <h2 class="section-title">Client <span>Stories</span></h2>
                <div class="testimonials-grid">
                    ${reviews.map(review => `
                        <div class="testimonial-card glass-card">
                            <div class="quote-icon">"</div>
                            <p class="testimonial-text">${review.text}</p>
                            <div class="testimonial-footer">
                                <div class="testimonial-avatar">${review.avatar}</div>
                                <div class="testimonial-author">
                                    <h4 class="author-name">${review.name}</h4>
                                    <span class="author-role">${review.role}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <style>
            .testimonials {
                padding: var(--spacing-xl) 0;
            }
            .testimonials-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: var(--spacing-md);
                margin-top: var(--spacing-lg);
            }
            .testimonial-card {
                padding: var(--spacing-md);
                position: relative;
            }
            .quote-icon {
                font-family: 'Playfair Display', serif;
                font-size: 4rem;
                color: var(--accent-gold);
                opacity: 0.2;
                position: absolute;
                top: 10px;
                left: 20px;
            }
            .testimonial-text {
                font-style: italic;
                color: var(--text-secondary);
                margin-bottom: var(--spacing-md);
                position: relative;
                z-index: 1;
            }
            .testimonial-footer {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .testimonial-avatar {
                width: 40px;
                height: 40px;
                background: var(--accent-gold);
                color: var(--bg-deep);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 0.8rem;
            }
            .author-name {
                font-size: 1rem;
                margin: 0;
            }
            .author-role {
                font-size: 0.75rem;
                color: var(--text-muted);
            }
        </style>
    `;
};
