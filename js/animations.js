/**
 * Animations Module
 * Handles micro-interactions and scroll animations
 */

const Animations = {
    /**
     * Check if user prefers reduced motion
     */
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    /**
     * Initialize animations
     */
    init() {
        if (this.prefersReducedMotion) {
            console.log('Reduced motion preference detected, disabling animations');
            return;
        }

        this.initScrollAnimations();
        this.initHeroAnimations();
        this.initButtonEffects();

        console.log('Animations initialized');
    },

    /**
     * Initialize scroll-triggered animations
     */
    initScrollAnimations() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');

                        // Handle stagger for children if needed
                        if (entry.target.classList.contains('stagger-container')) {
                            const children = entry.target.children;
                            Array.from(children).forEach((child, i) => {
                                child.style.transitionDelay = `${i * 0.1}s`;
                                child.classList.add('is-visible');
                            });
                        }
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Targeted elements for scroll reveal
        const targets = document.querySelectorAll('.reveal-on-scroll, .section-header, .feature-card, .footer-column');
        targets.forEach((el) => {
            el.classList.add('reveal-on-scroll'); // Ensure class exists
            observer.observe(el);
        });
    },

    /**
     * Initialize hero section animations
     */
    /**
     * Initialize hero section animations
     */
    initHeroAnimations() {
        // Background Zoom
        const heroBg = document.querySelector('.hero img');
        if (heroBg) {
            heroBg.classList.add('animate-zoom-in');
        }

        // Hero Content Stagger
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const elements = heroContent.children;
            Array.from(elements).forEach((el, i) => {
                el.classList.add('animate-fade-up');
                el.style.animationDelay = `${0.3 + (i * 0.1)}s`;
            });
        }
    },

    /**
     * Initialize button hover effects
     */
    initButtonEffects() {
        document.querySelectorAll('.btn, .btn-primary, .btn-secondary').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                if (this.prefersReducedMotion) return;
                this.createRipple(e);
            });
        });
    },

    /**
     * Create ripple effect on button
     * @param {Event} e
     */
    createRipple(e) {
        const btn = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();

        ripple.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            left: ${e.clientX - rect.left}px;
            top: ${e.clientY - rect.top}px;
            pointer-events: none;
        `;

        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    },

    /**
     * Animate add-to-cart button
     * @param {HTMLElement} button
     */
    animateAddToCart(button) {
        if (this.prefersReducedMotion) return;

        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1.05)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        }, 100);

        // Fly-to-cart animation (optional)
        this.flyToCart(button);
    },

    /**
     * Fly-to-cart animation
     * @param {HTMLElement} sourceEl
     */
    flyToCart(sourceEl) {
        const cartIcon = document.querySelector('.cart-btn');
        if (!cartIcon) return;

        const sourceRect = sourceEl.getBoundingClientRect();
        const targetRect = cartIcon.getBoundingClientRect();

        const flyingItem = document.createElement('div');
        flyingItem.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5C842" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
        `;
        flyingItem.style.cssText = `
            position: fixed;
            z-index: 1000;
            left: ${sourceRect.left + sourceRect.width / 2}px;
            top: ${sourceRect.top}px;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            pointer-events: none;
        `;

        document.body.appendChild(flyingItem);

        requestAnimationFrame(() => {
            flyingItem.style.left = `${targetRect.left + targetRect.width / 2}px`;
            flyingItem.style.top = `${targetRect.top + targetRect.height / 2}px`;
            flyingItem.style.transform = 'scale(0.3)';
            flyingItem.style.opacity = '0';
        });

        setTimeout(() => {
            flyingItem.remove();
            // Bounce cart icon
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 150);
        }, 500);
    },

    /**
     * Stagger animate children
     * @param {string} selector
     * @param {number} delay
     */
    staggerChildren(selector, delay = 0.1) {
        const children = document.querySelectorAll(selector);
        children.forEach((child, i) => {
            child.style.animationDelay = `${i * delay}s`;
        });
    },

    /**
     * Counter animation for stats
     * @param {HTMLElement} element
     * @param {number} target
     * @param {number} duration
     */
    animateCounter(element, target, duration = 2000) {
        if (this.prefersReducedMotion) {
            element.textContent = target;
            return;
        }

        let start = 0;
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const current = Math.floor(easeOut * target);
            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(step);
    }
};

// Add ripple keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .hero-word {
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => Animations.init());

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Animations;
}
