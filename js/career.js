document.addEventListener('DOMContentLoaded', () => {
    const careerGrid = document.getElementById('career-grid');
    if (!careerGrid) return;

    // Default jobs if local storage is empty
    const defaultJobs = [
        {
            id: 1,
            title: 'Digital Marketing Specialist',
            image: 'https://picsum.photos/600/400?random=1',
            description: 'Kami mencari kandidat yang kreatif dan berpengalaman dalam mengelola kampanye digital serta social media management.',
            active: true
        },
        {
            id: 2,
            title: 'Graphic Designer',
            image: 'https://picsum.photos/600/400?random=2',
            description: 'Bergabunglah dengan tim kreatif kami! Dicari desainer grafis dengan kemampuan visual storytelling yang kuat dan inovatif.',
            active: true
        },
        {
            id: 3,
            title: 'Business Development',
            image: 'https://picsum.photos/600/400?random=3',
            description: 'Dicari individu strategis untuk mengembangkan peluang bisnis baru, membangun kemitraan, dan mencapai target pertumbuhan perusahaan.',
            active: true
        }
    ];

    // Initialize local storage if empty
    let jobs = JSON.parse(localStorage.getItem('emas_jobs'));
    if (!jobs) {
        jobs = defaultJobs;
        localStorage.setItem('emas_jobs', JSON.stringify(jobs));
    }

    // Filter only active jobs
    const activeJobs = jobs.filter(job => job.active);

    // Render Jobs
    if (activeJobs.length === 0) {
        careerGrid.innerHTML = `
            <div class="col-span-full text-center py-16 fade-in-up">
                <span class="material-symbols-outlined text-6xl text-surface-variant mb-4 block">work_off</span>
                <h3 class="font-bold text-2xl text-[#122338] mb-2">Belum ada lowongan tersedia</h3>
                <p class="text-on-surface-variant">Saat ini belum ada posisi yang sedang kami butuhkan. Silakan periksa kembali nanti.</p>
            </div>
        `;
        return;
    }

    careerGrid.innerHTML = '';
    
    activeJobs.forEach((job, index) => {
        // Stagger animation delay
        const delay = index * 100;
        
        const jobCard = `
            <div class="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col overflow-hidden fade-in-up hover:shadow-xl transition-all duration-300" style="transition-delay: ${delay}ms;">
                <img src="${job.image}" alt="Flyer Rekrutmen ${job.title}" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="font-headline-md text-xl text-[#122338] font-bold mb-2">${job.title}</h3>
                    <p class="font-body-md text-sm text-on-surface-variant flex-grow mb-6">${job.description}</p>
                    <div class="flex gap-3 mt-auto">
                        <a href="#" onclick="event.preventDefault(); openApplyModal('${job.title}')"
                            class="flex-1 text-center py-2.5 bg-primary-container text-white font-label-caps text-sm rounded-DEFAULT hover:bg-primary transition-colors">Apply
                            Now</a>
                    </div>
                </div>
            </div>
        `;
        careerGrid.innerHTML += jobCard;
    });

    // We can assume main.js has an observer for fade-in-up if it does, 
    // but the observer might only run once on load. 
    // The easiest way is to add the 'visible' class manually if needed, 
    // or if intersection observer handles new elements, we do nothing.
    // Let's just make them visible instantly or trigger observer.
    setTimeout(() => {
        const newElements = careerGrid.querySelectorAll('.fade-in-up');
        newElements.forEach(el => {
            // We assume the observer adds an inline style opacity or class.
            // A simple fallback is:
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});
