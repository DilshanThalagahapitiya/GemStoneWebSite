export const ProductDetail = (product) => {
    if (!product) return '';

    return `
        <div class="modal-content glass-card animate-fade-in">
            <button id="close-detail" class="close-btn" aria-label="Close details">&times;</button>
            <div class="detail-container">
                <div class="detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="detail-info">
                    <span class="detail-category">${product.category}</span>
                    <h2 class="detail-title font-display">${product.name}</h2>
                    <p class="detail-price">$${product.price.toLocaleString()}</p>
                    
                    <div class="detail-description">
                        <h3>About this Gemstone</h3>
                        <p>${product.description}</p>
                    </div>

                    <div class="detail-specs">
                        <div class="spec-item">
                            <span class="spec-label">Weight</span>
                            <span class="spec-value">${product.weight}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Origin</span>
                            <span class="spec-value">${product.origin}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Certification</span>
                            <span class="spec-value">${product.certification}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Clarity</span>
                            <span class="spec-value">${product.clarity}</span>
                        </div>
                    </div>

                    <div class="detail-actions">
                        <button class="btn-primary add-to-cart-btn" data-id="${product.id}">Add to Collection</button>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .detail-container {
                display: grid;
                grid-template-columns: 1fr 1.2fr;
                gap: var(--spacing-lg);
                padding: var(--spacing-md);
            }

            .detail-image img {
                width: 100%;
                height: auto;
                border-radius: 12px;
                object-fit: cover;
                box-shadow: var(--shadow-premium);
            }

            .close-btn {
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 2rem;
                color: var(--text-secondary);
                z-index: 10;
            }

            .close-btn:hover {
                color: var(--accent-gold);
            }

            .detail-category {
                color: var(--accent-gold);
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                font-size: 0.8rem;
                font-weight: 600;
            }

            .detail-title {
                font-size: 3rem;
                margin: 0.5rem 0;
            }

            .detail-price {
                font-size: 2rem;
                font-weight: 300;
                color: var(--text-primary);
                margin-bottom: var(--spacing-md);
            }

            .detail-description h3 {
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
                color: var(--accent-gold);
            }

            .detail-description p {
                color: var(--text-secondary);
                margin-bottom: var(--spacing-md);
            }

            .detail-specs {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--spacing-sm);
                margin-bottom: var(--spacing-lg);
                padding: var(--spacing-md);
                background: rgba(255,255,255,0.02);
                border-radius: 12px;
            }

            .spec-item {
                display: flex;
                flex-direction: column;
            }

            .spec-label {
                font-size: 0.7rem;
                text-transform: uppercase;
                color: var(--text-muted);
            }

            .spec-value {
                font-size: 1rem;
                color: var(--text-primary);
                font-weight: 500;
            }

            @media (max-width: 768px) {
                .detail-container {
                    grid-template-columns: 1fr;
                    gap: var(--spacing-md);
                }
                .detail-title {
                    font-size: 2rem;
                }
            }
        </style>
    `;
};
