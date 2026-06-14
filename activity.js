document.getElementById('year').textContent = new Date().getFullYear();

const urlParams = new URLSearchParams(window.location.search);
const activityId = urlParams.get('id');

const activity = activities.find(a => a.id === activityId);

if (!activity) {
    document.querySelector('.activity-page').innerHTML = '<h2>Activity not found.</h2><br><a href="index.html" class="btn primary-btn" style="text-decoration:none; display:inline-block;">Go back home</a>';
} else {
    document.getElementById('bc-category').textContent = activity.category;
    document.getElementById('bc-title').textContent = activity.title;
    
    document.getElementById('act-title').textContent = activity.title;
    document.getElementById('act-duration').textContent = `⏱️ ${activity.duration}`;
    document.getElementById('act-group').textContent = `👥 ${activity.groupSize}`;
    document.getElementById('act-desc').textContent = activity.description;
    document.getElementById('act-detailed-desc').textContent = activity.details || "A great activity for your team.";
    
    if (activity.examples && activity.examples.length > 0) {
        const promptSection = document.getElementById('prompt-section');
        const promptContent = document.getElementById('prompt-content');
        const nextPromptBtn = document.getElementById('next-prompt-btn');
        const promptCounter = document.getElementById('prompt-counter');
        
        promptSection.classList.remove('hidden');
        
        let currentIndex = 0;
        
        // Show the first prompt initially
        promptContent.textContent = activity.examples[currentIndex];
        promptCounter.textContent = `${currentIndex + 1} / ${activity.examples.length}`;
        nextPromptBtn.textContent = "Next Example";
        
        const showPrompt = () => {
            currentIndex = (currentIndex + 1) % activity.examples.length;
            promptContent.textContent = activity.examples[currentIndex];
            promptCounter.textContent = `${currentIndex + 1} / ${activity.examples.length}`;
        };
        
        nextPromptBtn.addEventListener('click', showPrompt);
    }
}
