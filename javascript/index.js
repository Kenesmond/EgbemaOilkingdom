
    document.addEventListener('DOMContentLoaded', function() {
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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
        
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'linear-gradient(135deg, #5a67d8 0%, #6b46a1 100%)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                navbar.style.boxShadow = 'none';
            }
        });
        
        // Community cards interaction
        const cards = document.querySelectorAll('.community-card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const communityName = this.querySelector('h4').textContent;
                console.log(`Viewing ${communityName} community`);
            });
        });
        
        // Update copyright year
        const footerYear = document.querySelector('footer p');
        if (footerYear) {
            const currentYear = new Date().getFullYear();
            footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
        }
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            section {
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            
            .community-card {
                transition: transform 0.3s, box-shadow 0.3s, opacity 0.4s;
            }
            
            @media (prefers-reduced-motion: reduce) {
                section, .community-card {
                    transition: none;
                }
            }
        `;
        document.head.appendChild(style);
        
    });
