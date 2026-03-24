// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successAlert = document.getElementById('successAlert');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (validateForm(name, email, subject, message)) {
                // Simulate form submission
                submitForm({
                    name,
                    email,
                    phone,
                    subject,
                    message
                });
            }
        });
    }
    
    // Form validation function
    function validateForm(name, email, subject, message) {
        let isValid = true;
        let errorMessage = '';
        
        // Name validation
        if (name.length < 2) {
            errorMessage += 'Name must be at least 2 characters long.\n';
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage += 'Please enter a valid email address.\n';
            isValid = false;
        }
        
        // Subject validation
        if (!subject) {
            errorMessage += 'Please select a subject.\n';
            isValid = false;
        }
        
        // Message validation
        if (message.length < 10) {
            errorMessage += 'Message must be at least 10 characters long.\n';
            isValid = false;
        }
        
        if (!isValid) {
            alert('Please fix the following errors:\n' + errorMessage);
        }
        
        return isValid;
    }
    
    // Form submission function
    function submitForm(formData) {
        // Show loading state
        const submitBtn = document.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="icon ion-ios-loading"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Hide loading state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            const alert = document.getElementById('successAlert');
            alert.style.display = 'block';
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Hide alert after 5 seconds
            setTimeout(() => {
                alert.style.display = 'none';
            }, 5000);
            
            // Log to console (for demonstration)
            console.log('Form submitted:', formData);
        }, 1500);
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value;
                } else if (value.length <= 6) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
                e.target.value = value;
            }
        });
    }
    
    window.initMap = function() {
    const egbemaLocation = { lat: 5.4968, lng: 7.0258 }; // Updated coordinates
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: egbemaLocation,
        mapTypeId: 'roadmap',
        styles: [
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: "#667eea" }]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: egbemaLocation,
        map: map,
        title: "Egbema, Imo/Revers State",
        animation: google.maps.Animation.DROP,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
        }
    });
    
    const infowindow = new google.maps.InfoWindow({
        content: `
            <div style="color: #333; padding: 5px;">
                <h4 style="color: #667eea; margin-bottom: 5px;">Egbema, Imo/Revers State</h4>
                <p style="margin: 0;">Imo State, Nigeria</p>
                <p style="margin: 0;"><i class="icon ion-ios-telephone"></i> +234 123 456 7890</p>
            </div>
        `
    });
    
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}
       
        const marker = new google.maps.Marker({
            position: egbemaLocation,
            map: map,
            title: "Egbema Oil Kingdom",
            animation: google.maps.Animation.DROP,
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
            }
        });
        
        const infowindow = new google.maps.InfoWindow({
            content: `
                <div style="color: #333; padding: 5px;">
                    <h4 style="color: #667eea; margin-bottom: 5px;">Egbema Oil Kingdom</h4>
                    <p style="margin: 0;">Rivers State, Nigeria</p>
                    <p style="margin: 0;"><i class="icon ion-ios-telephone"></i> +234 123 456 7890</p>
                </div>
            `
        });
        
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    });

    
    // Newsletter subscription
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Smooth scroll for anchor links
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
    
    // Add active class to current nav item
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'contact.html') {
            link.classList.add('active');
        }
    });
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        const alert = document.getElementById('successAlert');
        alert.style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Hide alert after 5 seconds
        setTimeout(function() {
            alert.style.display = 'none';
        }, 5000);
    });
    
    // Smooth scrolling for anchor links
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

