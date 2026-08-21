document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });

    // Interactive mouse background
    document.addEventListener('mousemove', (e) => {
        const follower = document.querySelector('.mouse-follower');
        if (follower) {
            follower.style.setProperty('--mouse-x', `${e.clientX}px`);
            follower.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
    });

    // Animated Counter logic
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000;
                let startTime = null;

                const updateCount = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const increment = (target * progress) / duration;
                    
                    if (progress < duration) {
                        entry.target.innerText = Math.ceil(increment);
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.innerText = target;
                    }
                };
                
                requestAnimationFrame(updateCount);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const counterElement = document.getElementById('animated-counter');
    if (counterElement) {
        counterObserver.observe(counterElement);
    }

    // Testimonial Carousel Auto-slide
    const track = document.getElementById('testimonial-track');
    if (track) {
        let currentIndex = 0;
        const totalCards = 5;
        
        const slide = () => {
            const getVisibleCards = () => {
                if (window.innerWidth >= 1024) return 3; // lg
                if (window.innerWidth >= 768) return 2;  // md
                return 1;                                // sm
            };

            const visibleCards = getVisibleCards();
            const maxIndex = totalCards - visibleCards;
            
            currentIndex++;
            if (currentIndex > maxIndex) {
                currentIndex = 0;
            }
            
            const cardWidth = 100 / visibleCards;
            track.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
        };

        setInterval(slide, 4000);
    }
});
