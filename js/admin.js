document.addEventListener('DOMContentLoaded', () => {
    loadAdminJobs();

    // Handle form submission for Add / Edit
    document.getElementById('jobForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveJob();
    });
});

function getJobs() {
    return JSON.parse(localStorage.getItem('emas_jobs')) || [];
}

function saveToLocalStorage(jobs) {
    localStorage.setItem('emas_jobs', JSON.stringify(jobs));
}

function loadAdminJobs() {
    const tbody = document.getElementById('admin-job-list');
    const jobs = getJobs();
    
    if (jobs.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" class="p-8 text-center text-on-surface-variant">Belum ada data loker.</td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = '';
    
    jobs.forEach(job => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-surface-container/30 transition-colors";
        
        tr.innerHTML = `
            <td class="p-4">
                <div class="flex items-center gap-3">
                    <img src="${job.image}" class="w-12 h-12 rounded object-cover shadow-sm">
                    <span class="font-bold text-[#122338]">${job.title}</span>
                </div>
            </td>
            <td class="p-4 text-sm text-on-surface-variant max-w-xs truncate">${job.description}</td>
            <td class="p-4 text-center">
                <button onclick="toggleJobStatus(${job.id})" class="px-3 py-1 text-xs font-bold rounded-full transition-colors ${job.active ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-red-100 text-red-700 hover:bg-red-200'}">
                    ${job.active ? 'Aktif' : 'Nonaktif'}
                </button>
            </td>
            <td class="p-4 text-right">
                <div class="flex items-center justify-end gap-2">
                    <button onclick="editJob(${job.id})" class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button onclick="deleteJob(${job.id})" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                        <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Modal Logic
function openJobModal() {
    document.getElementById('modal-title').innerText = "Tambah Loker";
    document.getElementById('jobForm').reset();
    document.getElementById('job-id').value = ""; // Clear ID for new
    
    const modal = document.getElementById('jobModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeJobModal() {
    const modal = document.getElementById('jobModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// CRUD Operations
function saveJob() {
    const id = document.getElementById('job-id').value;
    const title = document.getElementById('job-title').value;
    const image = document.getElementById('job-image').value;
    const desc = document.getElementById('job-desc').value;
    const active = document.getElementById('job-active').checked;

    let jobs = getJobs();

    if (id) {
        // Edit existing
        const index = jobs.findIndex(j => j.id == id);
        if (index !== -1) {
            jobs[index].title = title;
            jobs[index].image = image;
            jobs[index].description = desc;
            jobs[index].active = active;
        }
    } else {
        // Add new
        const newId = jobs.length > 0 ? Math.max(...jobs.map(j => j.id)) + 1 : 1;
        jobs.push({
            id: newId,
            title: title,
            image: image,
            description: desc,
            active: active
        });
    }

    saveToLocalStorage(jobs);
    closeJobModal();
    loadAdminJobs();
}

function editJob(id) {
    const jobs = getJobs();
    const job = jobs.find(j => j.id == id);
    if (!job) return;

    document.getElementById('modal-title').innerText = "Edit Loker";
    document.getElementById('job-id').value = job.id;
    document.getElementById('job-title').value = job.title;
    document.getElementById('job-image').value = job.image;
    document.getElementById('job-desc').value = job.description;
    document.getElementById('job-active').checked = job.active;

    const modal = document.getElementById('jobModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function deleteJob(id) {
    if (confirm("Apakah Anda yakin ingin menghapus lowongan ini?")) {
        let jobs = getJobs();
        jobs = jobs.filter(j => j.id != id);
        saveToLocalStorage(jobs);
        loadAdminJobs();
    }
}

function toggleJobStatus(id) {
    let jobs = getJobs();
    const index = jobs.findIndex(j => j.id == id);
    if (index !== -1) {
        jobs[index].active = !jobs[index].active; // Toggle
        saveToLocalStorage(jobs);
        loadAdminJobs();
    }
}
