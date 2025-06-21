 function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Create floating emojis
        function createFloatingEmoji() {
            const emojis = ['💰', '🎰', '💎', '🎲', '🃏', '⭐', '💸', '🏆', '🎯', '🔥'];
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 90 + '%';
            emoji.style.animationDuration = (Math.random() * 3 + 5) + 's';
            
            document.getElementById('floating-emojis').appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 8000);
        }

        // Add ripple effect to buttons
        function addRippleEffect(button) {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        }

        // Add click sound effect (optional)
        function playClickSound() {
            // You can add a subtle click sound here if desired
            // const audio = new Audio('click-sound.mp3');
            // audio.play();
        }

        // Initialize effects
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Create floating emojis periodically
            setInterval(createFloatingEmoji, 2000);
            
            // Add ripple effects to interactive elements
            const claimBtn = document.querySelector('.claim-btn');
            const socialIcons = document.querySelectorAll('.social-icon');
            const featureCards = document.querySelectorAll('.feature-card');
            
            if (claimBtn) addRippleEffect(claimBtn);
            socialIcons.forEach(icon => addRippleEffect(icon));
            featureCards.forEach(card => {
                addRippleEffect(card);
                card.addEventListener('click', playClickSound);
            });
            
            // Add entrance animations
            const elements = document.querySelectorAll('.logo-container, .promo-banner, .features-grid, .btn-circle-link, .social-links');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });

            // Add staggered animation for feature cards
            const cards = document.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });

        // Add CSS for ripple effect
        const style = document.createElement('style');
        style.textContent = `
            .ripple {
                position: absolute !important;
                border-radius: 50%;
                background: rgba(255,255,255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            }
            @keyframes ripple {
                to { transform: scale(4); opacity: 0; }
            }
        `;
        document.head.appendChild(style);