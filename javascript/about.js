
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        
        // ==================== SMOOTH SCROLLING ====================
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

        // ==================== STATISTICS COUNTER ANIMATION ====================
        function animateCounter(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                element.innerText = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.innerText = end + '+';
                }
            };
            window.requestAnimationFrame(step);
        }

        // Intersection Observer for stats animation
        const statsSection = document.querySelector('.stats-section');
        const statNumbers = document.querySelectorAll('.stat-number');
        let animated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    
                    // Animate each stat number
                    const targets = [16, 200, 50, 100];
                    statNumbers.forEach((element, index) => {
                        const originalText = element.innerText;
                        const targetNumber = targets[index];
                        animateCounter(element, 0, targetNumber, 2000);
                    });
                }
            });
        }, { threshold: 0.5 });

        if (statsSection) {
            observer.observe(statsSection);
        }

        // ==================== TIMELINE INTERACTIVITY ====================
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            // Add hover effect
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9fa';
                this.style.borderLeftWidth = '5px';
                this.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.borderLeftWidth = '3px';
            });
            
            // Add click to expand/collapse
            const yearSpan = item.querySelector('.timeline-year');
            const paragraph = item.querySelector('p');
            
            yearSpan.addEventListener('click', function() {
                paragraph.classList.toggle('expanded');
                if (paragraph.classList.contains('expanded')) {
                    paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
                } else {
                    paragraph.style.maxHeight = '60px';
                    paragraph.style.overflow = 'hidden';
                }
            });
            
            // Initially collapse on mobile
            if (window.innerWidth < 768) {
                paragraph.style.maxHeight = '60px';
                paragraph.style.overflow = 'hidden';
                paragraph.style.transition = 'max-height 0.3s ease';
            }
        });

        // ==================== ABOUT CARDS INTERACTIVITY ====================
        const aboutCards = document.querySelectorAll('.about-card');
        
        aboutCards.forEach(card => {
            // Add tilt effect on mouse move
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });

        // ==================== READ MORE FUNCTIONALITY ====================
        // Add read more buttons to long text sections
        const cultureSection = document.querySelector('.about-card:nth-child(2)');
        if (cultureSection) {
            const paragraphs = cultureSection.querySelectorAll('p');
            paragraphs.forEach(p => {
                if (p.textContent.length > 200) {
                    const fullText = p.textContent;
                    const shortText = fullText.substring(0, 200) + '...';
                    
                    p.innerHTML = `
                        <span class="short-text">${shortText}</span>
                        <span class="full-text" style="display: none;">${fullText}</span>
                        <button class="btn btn-link read-more-btn" style="color: #667eea; padding: 0; margin-left: 5px;">
                            Read More <i class="icon ion-ios-arrow-down"></i>
                        </button>
                    `;
                    
                    const btn = p.querySelector('.read-more-btn');
                    btn.addEventListener('click', function() {
                        const shortSpan = p.querySelector('.short-text');
                        const fullSpan = p.querySelector('.full-text');
                        
                        if (fullSpan.style.display === 'none') {
                            shortSpan.style.display = 'none';
                            fullSpan.style.display = 'inline';
                            this.innerHTML = 'Read Less <i class="icon ion-ios-arrow-up"></i>';
                        } else {
                            shortSpan.style.display = 'inline';
                            fullSpan.style.display = 'none';
                            this.innerHTML = 'Read More <i class="icon ion-ios-arrow-down"></i>';
                        }
                    });
                }
            });
        }

        // ==================== LEADERSHIP CARDS INTERACTIVITY ====================
        const leadershipCards = document.querySelectorAll('.leadership-card');
        
        leadershipCards.forEach(card => {
            // Add flip effect on hover
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'rotateY(180deg)';
                this.style.transition = 'transform 0.6s';
                
                // Create back face content
                setTimeout(() => {
                    this.innerHTML = `
                        <div style="transform: rotateY(180deg);">
                            <i class="icon ion-ios-information-circle" style="font-size: 3rem; color: #667eea;"></i>
                            <h4>More Info</h4>
                            <p class="small">Click to learn more about this role</p>
                        </div>
                    `;
                }, 300);
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'rotateY(0deg)';
                
                // Restore original content
                setTimeout(() => {
                    const originalContent = this.getAttribute('data-original') || this.innerHTML;
                    this.innerHTML = originalContent;
                }, 300);
            });
            
            // Store original content
            card.setAttribute('data-original', card.innerHTML);
            
            // Add click functionality
            card.addEventListener('click', function() {
                const role = this.querySelector('h4').textContent;
                showLeadershipModal(role);
            });
        });

        // ==================== LEADERSHIP MODAL ====================
        function showLeadershipModal(role) {
            // Create modal if it doesn't exist
            if (!document.getElementById('leadershipModal')) {
                const modalHTML = `
                    <div class="modal fade" id="leadershipModal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                                    <h5 class="modal-title">Leadership Role Details</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body" id="leadershipModalBody">
                                    <!-- Content will be inserted here -->
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                document.body.insertAdjacentHTML('beforeend', modalHTML);
            }
            
            const modalBody = document.getElementById('leadershipModalBody');
            let content = '';
            
            switch(role) {
                case 'The Eze (King)':
                    content = `
                        <h5 style="color: #667eea;">The Eze (King)</h5>
                        <p>The Eze is the paramount traditional ruler of Egbema Kingdom. This position is hereditary and carries immense cultural and spiritual significance. The Eze serves as:</p>
                        <ul>
                            <li>Custodian of customs and traditions</li>
                            <li>Spiritual head of the kingdom</li>
                            <li>Chief mediator in disputes</li>
                            <li>Representative of the kingdom in external affairs</li>
                        </ul>
                        <p>The current Eze is HRM Eze (Dr.) Ambrose Nwankwo, who has served since 2010.</p>
                    `;
                    break;
                case 'Council of Chiefs':
                    content = `
                        <h5 style="color: #667eea;">Council of Chiefs</h5>
                        <p>The Council of Chiefs consists of respected elders and titled chiefs from each community. Their responsibilities include:</p>
                        <ul>
                            <li>Advising the Eze on traditional matters</li>
                            <li>Overseeing community development projects</li>
                            <li>Presiding over traditional ceremonies</li>
                            <li>Maintaining law and order in their communities</li>
                        </ul>
                        <p>The council meets monthly at the King's Palace to discuss kingdom affairs.</p>
                    `;
                    break;
                case 'Community Assembly':
                    content = `
                        <h5 style="color: #667eea;">Community Assembly</h5>
                        <p>The Community Assembly is a democratic body representing all 16 communities. It ensures:</p>
                        <ul>
                            <li>Grassroots participation in governance</li>
                            <li>Fair representation of all communities</li>
                            <li>Implementation of development projects</li>
                            <li>Resolution of inter-community disputes</li>
                        </ul>
                        <p>Each community elects three representatives to the assembly for a three-year term.</p>
                    `;
                    break;
            }
            
            modalBody.innerHTML = content;
            
            const modal = new bootstrap.Modal(document.getElementById('leadershipModal'));
            modal.show();
        }

        // ==================== BACK TO TOP BUTTON ====================
        // Create back to top button
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '<i class="icon ion-ios-arrow-up"></i>';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: transform 0.3s;
        `;
        
        backToTopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        backToTopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(backToTopBtn);
        
        // Show/hide back to top button
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        // ==================== PRINT FUNCTIONALITY ====================
        // Add print button to page header
        const pageHeader = document.querySelector('.page-header .container');
        const printBtn = document.createElement('button');
        printBtn.className = 'btn btn-light mt-3';
        printBtn.innerHTML = '<i class="icon ion-ios-printer"></i> Print Page';
        printBtn.style.cssText = `
            background: white;
            color: #667eea;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: 500;
        `;
        
        printBtn.addEventListener('click', function() {
            window.print();
        });
        
        if (pageHeader) {
            pageHeader.appendChild(printBtn);
        }

        // ==================== SHARE FUNCTIONALITY ====================
        // Add share buttons
        const shareDiv = document.createElement('div');
        shareDiv.className = 'text-center mt-4';
        shareDiv.innerHTML = `
            <h5>Share This Page</h5>
            <button class="btn btn-outline-primary mx-1 share-btn" data-platform="facebook">
                <i class="icon ion-social-facebook"></i>
            </button>
            <button class="btn btn-outline-info mx-1 share-btn" data-platform="twitter">
                <i class="icon ion-social-twitter"></i>
            </button>
            <button class="btn btn-outline-success mx-1 share-btn" data-platform="whatsapp">
                <i class="icon ion-social-whatsapp"></i>
            </button>
            <button class="btn btn-outline-secondary mx-1 share-btn" data-platform="email">
                <i class="icon ion-ios-email"></i>
            </button>
        `;
        
        const leadershipSection = document.querySelector('.about-section:last-child');
        if (leadershipSection) {
            leadershipSection.appendChild(shareDiv);
        }
        
        // Share buttons functionality
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const platform = this.dataset.platform;
                const url = encodeURIComponent(window.location.href);
                const title = encodeURIComponent('Egbema Oil Kingdom - About Page');
                
                let shareUrl = '';
                
                switch(platform) {
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                        break;
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                        break;
                    case 'whatsapp':
                        shareUrl = `https://wa.me/?text=${title}%20${url}`;
                        break;
                    case 'email':
                        shareUrl = `mailto:?subject=${title}&body=Check out this page: ${url}`;
                        break;
                }
                
                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            });
        });

        // ==================== DARK MODE TOGGLE ====================
        // Create dark mode toggle
        const darkModeBtn = document.createElement('button');
        darkModeBtn.innerHTML = '<i class="icon ion-ios-moon"></i>';
        darkModeBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: transform 0.3s;
        `;
        
        darkModeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                this.innerHTML = '<i class="icon ion-ios-sunny"></i>';
                enableDarkMode();
            } else {
                this.innerHTML = '<i class="icon ion-ios-moon"></i>';
                disableDarkMode();
            }
        });
        
        document.body.appendChild(darkModeBtn);
        
        // Dark mode styles
        function enableDarkMode() {
            const style = document.createElement('style');
            style.id = 'dark-mode-styles';
            style.textContent = `
                body.dark-mode {
                    background-color: #1a1a1a;
                    color: #f0f0f0;
                }
                
                body.dark-mode .about-card,
                body.dark-mode .leadership-card,
                body.dark-mode .filter-section {
                    background-color: #2d2d2d;
                    color: #f0f0f0;
                }
                
                body.dark-mode .about-card p,
                body.dark-mode .leadership-card p {
                    color: #ccc;
                }
                
                body.dark-mode .about-card h2,
                body.dark-mode .leadership-card h4 {
                    color: #667eea;
                }
                
                body.dark-mode .timeline-item {
                    border-left-color: #667eea;
                }
                
                body.dark-mode .timeline-item::before {
                    background: #667eea;
                }
                
                body.dark-mode footer {
                    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                }
            `;
            
            if (!document.getElementById('dark-mode-styles')) {
                document.head.appendChild(style);
            }
        }
        
        function disableDarkMode() {
            const style = document.getElementById('dark-mode-styles');
            if (style) {
                style.remove();
            }
        }

        // ==================== PAGE VISIBILITY API ====================
        // Track when user leaves/returns to page
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                document.title = 'Come back to Egbema Oil Kingdom!';
            } else {
                document.title = 'About Egbema Oil Kingdom';
                // Show welcome back notification
                showNotification('Welcome back to Egbema Oil Kingdom!', 'success');
            }
        });

        // ==================== NOTIFICATION SYSTEM ====================
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                background: ${type === 'success' ? '#28a745' : '#667eea'};
                color: white;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 9999;
                animation: slideIn 0.3s ease;
            `;
            
            notification.innerHTML = `
                <i class="icon ion-ios-${type === 'success' ? 'checkmark' : 'information'}-circle"></i>
                ${message}
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }

        // Add animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // ==================== ACTIVE NAVIGATION HIGHLIGHTING ====================
        const currentLocation = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === 'about.html') {
                link.classList.add('active');
            }
        });

        // ==================== LAZY LOADING FOR IMAGES ====================
        // If you add images later, this will lazy load them
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));

        // ==================== PROGRESS BAR FOR SCROLLING ====================
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 9999;
            transition: width 0.3s;
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });

        // ==================== INITIALIZE TOOLTIPS ====================
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

    }); // End of DOMContentLoaded

    // ==================== ADD TO CUSTOM CSS FOR BETTER UX ====================
    // Add this to your existing CSS or in a style tag
    const additionalStyles = `
        .timeline-item p {
            transition: max-height 0.3s ease;
        }
        
        .about-card, .leadership-card {
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .leadership-card {
            cursor: pointer;
        }
        
        @media print {
            .navbar, footer, .back-to-top, .share-btn, .dark-mode-toggle {
                display: none !important;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);

