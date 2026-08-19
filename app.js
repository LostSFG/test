// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsGrid = document.getElementById('resultsGrid');
const noResults = document.getElementById('noResults');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('termModal');
const modalClose = document.querySelector('.modal-close');

// Current state
let currentFilter = 'all';
let filteredTerms = [...cybersecurityTerms];

// Initialize the app
function init() {
    renderCards(filteredTerms);
    setupEventListeners();
}

// Render cards to the grid
function renderCards(terms) {
    if (terms.length === 0) {
        resultsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    resultsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    resultsGrid.innerHTML = terms.map(term => `
        <div class="term-card" data-id="${term.id}">
            <span class="term-category">${term.category}</span>
            <h3>${term.term}</h3>
            <p class="term-preview">${truncateText(term.simpleExplanation, 120)}</p>
        </div>
    `).join('');

    // Add click listeners to cards
    document.querySelectorAll('.term-card').forEach(card => {
        card.addEventListener('click', () => {
            const termId = parseInt(card.dataset.id);
            const term = cybersecurityTerms.find(t => t.id === termId);
            openModal(term);
        });
    });
}

// Truncate text for preview
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Filter and search terms
function filterTerms() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredTerms = cybersecurityTerms.filter(term => {
        const matchesCategory = currentFilter === 'all' || term.category === currentFilter;
        const matchesSearch = searchTerm === '' || 
            term.term.toLowerCase().includes(searchTerm) ||
            term.simpleExplanation.toLowerCase().includes(searchTerm) ||
            term.category.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });

    renderCards(filteredTerms);
}

// Open modal with term details
function openModal(term) {
    document.getElementById('modalCategory').textContent = term.category;
    document.getElementById('modalTitle').textContent = term.term;
    document.getElementById('modalSimple').textContent = term.simpleExplanation;
    document.getElementById('modalAnalogy').textContent = term.analogy;
    document.getElementById('modalTechnical').textContent = term.technicalDetails;
    document.getElementById('modalExample').textContent = term.example;
    
    const keyPointsList = document.getElementById('modalKeyPoints');
    keyPointsList.innerHTML = term.keyPoints.map(point => `<li>${point}</li>`).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', filterTerms);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterTerms();
        } else {
            filterTerms();
        }
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            filterTerms();
        });
    });

    // Modal close button
    modalClose.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
