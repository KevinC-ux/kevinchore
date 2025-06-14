 // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Testimonials Slider
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');

        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            testimonials[index].classList.add('active');
        }

        function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        function prevTestimonial() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', nextTestimonial);
            prevBtn.addEventListener('click', prevTestimonial);
        }

        // Auto-advance testimonials
        setInterval(nextTestimonial, 5000);

        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Contact Form Handling
        const contactForm = document.getElementById('contactForm');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                const email = formData.get('email');
                const message = formData.get('message');
                
                // Simple validation
                if (!email || !message) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Simulate form submission
                alert('Thank you for your message! We\'ll get back to you within 12 hours.');
                contactForm.reset();
            });
        }

        // Scroll Animation for Cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards for animation
        document.querySelectorAll('.service-card, .resource-card, .testimonial-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Header Background Change on Scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = '#fff';
                navbar.style.backdropFilter = 'none';
            }
        });


        // Sample product data
const products = [
    {
        id: 1,
        title: "Radiant Glow Serum",
        category: "skincare",
        price: 49.99,
        description: "Our best-selling serum with vitamin C for a radiant, even complexion. Perfect for all skin types.",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "Bestseller"
    },
    {
        id: 2,
        title: "Matte Lipstick Set",
        category: "makeup",
        price: 29.99,
        description: "Set of 6 long-lasting matte lipsticks in our most popular shades. Vegan and cruelty-free.",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "New"
    },
    {
        id: 3,
        title: "Hydrating Shampoo",
        category: "haircare",
        price: 24.99,
        description: "Sulfate-free shampoo with argan oil for deep hydration and shiny, healthy hair.",
        image: "https://images.unsplash.com/photo-1595341595379-cf0f2a5d643a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "CC Cream Foundation",
        category: "makeup",
        price: 34.99,
        description: "Lightweight color correcting cream with SPF 30 that perfects and protects your skin.",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "Sale"
    },
    {
        id: 5,
        title: "Night Repair Cream",
        category: "skincare",
        price: 59.99,
        description: "Intensive overnight treatment that works while you sleep to repair and rejuvenate skin.",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Volume Mascara",
        category: "makeup",
        price: 19.99,
        description: "Lengthening and volumizing mascara that gives you dramatic lashes without clumping.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "Hair Mask Treatment",
        category: "haircare",
        price: 32.99,
        description: "Deep conditioning treatment that repairs damaged hair and restores moisture balance.",
        image: "https://images.unsplash.com/photo-1608248544923-0ac26a275d0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        badge: "Popular"
    },
    {
        id: 8,
        title: "Facial Cleanser",
        category: "skincare",
        price: 22.99,
        description: "Gentle foaming cleanser that removes impurities without stripping natural oils.",
        image: "https://images.unsplash.com/photo-1556228578-3a5c08b78e79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

// DOM Elements
const productsContainer = document.querySelector('.products-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('load-more');

// Initial display
let currentFilter = 'all';
let visibleProducts = 4;

// Display products
function displayProducts(filter = 'all', limit = Infinity) {
    productsContainer.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    const limitedProducts = filteredProducts.slice(0, limit);
    
    if (limitedProducts.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }
    
    limitedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Filter products
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        currentFilter = button.dataset.filter;
        visibleProducts = 4; // Reset visible products when changing filter
        displayProducts(currentFilter, visibleProducts);
        
        // Hide load more button if all products are visible
        if (visibleProducts >= products.filter(p => currentFilter === 'all' ? true : p.category === currentFilter).length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    });
});

// Load more products
loadMoreBtn.addEventListener('click', () => {
    visibleProducts += 4;
    displayProducts(currentFilter, visibleProducts);
    
    // Hide button if all products are visible
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(product => product.category === currentFilter);
    
    if (visibleProducts >= filteredProducts.length) {
        loadMoreBtn.style.display = 'none';
    }
});

// Add to cart functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        alert(`Added ${product.title} to your cart!`);
        // In a real app, you would add to cart storage here
    }
});

// Initial display
displayProducts(currentFilter, visibleProducts);

// Hide load more button if all products are initially visible
if (visibleProducts >= products.length) {
    loadMoreBtn.style.display = 'none';
}