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
    
    // Parse CSV helper function
    function parseCSV(csvText) {
        const lines = [];
        let currentLine = [];
        let currentVal = '';
        let inQuotes = false;
        
        for (let i = 0; i < csvText.length; i++) {
            const char = csvText[i];
            
            if (inQuotes) {
                if (char === '"') {
                    if (i + 1 < csvText.length && csvText[i + 1] === '"') {
                        currentVal += '"';
                        i++;
                    } else {
                        inQuotes = false;
                    }
                } else {
                    currentVal += char;
                }
            } else {
                if (char === '"') {
                    inQuotes = true;
                } else if (char === ',') {
                    currentLine.push(currentVal.trim());
                    currentVal = '';
                } else if (char === '\n' || char === '\r') {
                    if (char === '\r' && i + 1 < csvText.length && csvText[i + 1] === '\n') {
                        i++;
                    }
                    currentLine.push(currentVal.trim());
                    lines.push(currentLine);
                    currentLine = [];
                    currentVal = '';
                } else {
                    currentVal += char;
                }
            }
        }
        
        if (currentVal !== '' || currentLine.length > 0) {
            currentLine.push(currentVal.trim());
            lines.push(currentLine);
        }
        
        return lines;
    }

    // Fetch prompts from CSV
    fetch('prompts.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(csvText => {
            const parsed = parseCSV(csvText);
            // First row is header, skip it. 
            // Format: activity_id,prompt_text
            const promptsForActivity = [];
            for (let i = 1; i < parsed.length; i++) {
                const row = parsed[i];
                if (row.length >= 2 && row[0] === activityId) {
                    promptsForActivity.push(row[1]);
                }
            }

            if (promptsForActivity.length > 0) {
                const promptSection = document.getElementById('prompt-section');
                const promptContent = document.getElementById('prompt-content');
                const nextPromptBtn = document.getElementById('next-prompt-btn');
                const promptCounter = document.getElementById('prompt-counter');
                
                promptSection.classList.remove('hidden');
                
                let currentIndex = 0;
                
                // Show the first prompt initially
                promptContent.textContent = promptsForActivity[currentIndex];
                promptCounter.textContent = `${currentIndex + 1} / ${promptsForActivity.length}`;
                
                const showPrompt = () => {
                    currentIndex = (currentIndex + 1) % promptsForActivity.length;
                    promptContent.textContent = promptsForActivity[currentIndex];
                    promptCounter.textContent = `${currentIndex + 1} / ${promptsForActivity.length}`;
                };
                
                nextPromptBtn.addEventListener('click', showPrompt);
            }
        })
        .catch(error => {
            console.error('Error loading prompts:', error);
            // If running locally via file://, fetch might fail due to CORS.
        });
}
