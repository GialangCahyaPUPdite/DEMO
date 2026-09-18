document.addEventListener("DOMContentLoaded", function () {
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
    // Form to Google Sheets integration
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();

            // TODO: Ganti URL_SCRIPT_GOOGLE_SHEETS_ANDA dengan URL Web App dari Google Apps Script
            const scriptURL = 'URL_SCRIPT_GOOGLE_SHEETS_ANDA';

            if (scriptURL === 'URL_SCRIPT_GOOGLE_SHEETS_ANDA') {
                formStatus.textContent = 'Harap masukkan URL Google Apps Script Anda di js/main.js';
                formStatus.classList.remove('hidden');
                formStatus.className = 'mt-4 text-center text-sm font-bold text-red-500';
                return;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = 'Mengirim...';

            fetch(scriptURL, { method: 'POST', body: new FormData(contactForm), mode: 'no-cors' })
                .then(response => {
                    formStatus.textContent = 'Pesan berhasil dikirim!';
                    formStatus.classList.remove('hidden');
                    formStatus.className = 'mt-4 text-center text-sm font-bold text-green-600';
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Kirim Pesan';
                    setTimeout(() => { formStatus.classList.add('hidden'); }, 5000);
                })
                .catch(error => {
                    formStatus.textContent = 'Terjadi kesalahan! Silakan coba lagi.';
                    formStatus.classList.remove('hidden');
                    formStatus.className = 'mt-4 text-center text-sm font-bold text-red-500';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Kirim Pesan';
                    console.error('Error!', error.message);
                });
        });
    }

    // Hero Slideshow
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    if (heroSlides.length > 0 && heroDots.length > 0) {
        let currentSlide = 0;
        const totalSlides = heroSlides.length;
        
        const showSlide = (index) => {
            heroSlides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.replace('opacity-0', 'opacity-100');
                    slide.classList.replace('z-0', 'z-10');
                } else {
                    slide.classList.replace('opacity-100', 'opacity-0');
                    slide.classList.replace('z-10', 'z-0');
                }
            });
            
            heroDots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.replace('bg-white/50', 'bg-white');
                } else {
                    dot.classList.replace('bg-white', 'bg-white/50');
                }
            });
            currentSlide = index;
        };

        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        setInterval(() => {
            let nextSlide = (currentSlide + 1) % totalSlides;
            showSlide(nextSlide);
        }, 5000);
    }
});

