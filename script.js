// Set current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Randomizer Logic
const randomBtn = document.getElementById('random-btn');
const randomResult = document.getElementById('random-result');
const randomTitle = document.getElementById('random-title');
const randomDesc = document.getElementById('random-desc');
const randomMeta = document.getElementById('random-meta');
const randomLink = document.getElementById('random-link');

if (randomBtn) {
    randomBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * activities.length);
        const activity = activities[randomIndex];
        
        randomTitle.textContent = activity.title;
        randomDesc.textContent = activity.description;
        randomMeta.textContent = `${activity.duration} • ${activity.category}`;
        randomLink.href = `activity.html?id=${activity.id}`;
        
        randomResult.classList.remove('hidden');
    });
}

// Render Categories and Activities
const categoriesContainer = document.getElementById('categories-container');

if (categoriesContainer) {
    const groupedActivities = activities.reduce((acc, activity) => {
        if (!acc[activity.category]) {
            acc[activity.category] = [];
        }
        acc[activity.category].push(activity);
        return acc;
    }, {});

    for (const [category, acts] of Object.entries(groupedActivities)) {
        const section = document.createElement('div');
        section.className = 'category-section';
        
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = category;
        
        const grid = document.createElement('div');
        grid.className = 'activities-grid';
        
        acts.forEach(activity => {
            const card = document.createElement('a');
            card.className = 'activity-card';
            card.href = `activity.html?id=${activity.id}`;
            card.style.textDecoration = 'none';
            card.style.color = 'inherit';
            
            card.innerHTML = `
                <h3 class="activity-title">${activity.title}</h3>
                <p class="activity-desc">${activity.description}</p>
                <div class="activity-meta">
                    <span class="meta-tag">⏱️ ${activity.duration}</span>
                    <span class="meta-tag">👥 ${activity.groupSize}</span>
                </div>
            `;
            
            grid.appendChild(card);
        });
        
        section.appendChild(title);
        section.appendChild(grid);
        categoriesContainer.appendChild(section);
    }
}
