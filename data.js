const activities = [
    {
        id: "gif-mood-check",
        title: "GIF Mood Check",
        description: "Everyone shares a GIF in the chat that represents how they feel today. It's a quick and visual way to check the team's pulse.",
        details: "This is a low-pressure activity that requires no speaking and helps everyone get a sense of the team's energy levels. It works great at the start of a meeting or sprint planning.",
        examples: ["Share a GIF that represents your current state of mind.", "What GIF best describes your weekend?", "Find a GIF that matches your reaction to our current project."],
        category: "Quick 5-min Games",
        duration: "5 mins",
        groupSize: "Any"
    },
    {
        id: "two-truths-and-a-lie",
        title: "Two Truths and a Lie",
        description: "Each person shares two true facts and one lie about themselves. The group guesses which statement is the lie.",
        details: "A classic game that helps team members learn surprising facts about each other. It encourages storytelling and active listening.",
        examples: ["I've broken the same bone twice.", "I have met a sitting US President.", "I have never eaten a peanut butter and jelly sandwich."],
        category: "Quick 5-min Games",
        duration: "5-10 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "desk-show-and-tell",
        title: "Desk Show and Tell",
        description: "Show one item on your desk and explain why it's there or its significance to you.",
        details: "A quick peek into someone's personal workspace. It can spark conversations about hobbies, family, or personal quirks.",
        examples: ["Show us a mug you are using.", "What's the oldest thing on your desk?", "Show us an item that has a funny story behind it."],
        category: "Quick 5-min Games",
        duration: "5 mins",
        groupSize: "Any"
    },
    {
        id: "if-you-could",
        title: "The 'If You Could' Question",
        description: "If you could have dinner with any historical figure, who would it be and why? Go around the virtual room and share.",
        details: "Hypothetical questions often reveal a lot about a person's values, interests, and aspirations.",
        examples: ["If you could instantly become an expert in one subject, what would it be?", "If you could live anywhere in the world for a year, where would you go?", "If you had to eat one meal for the rest of your life, what would it be?"],
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "highs-and-lows",
        title: "Highs and Lows",
        description: "Share one highlight (high) and one challenge (low) from the past week. Fosters vulnerability and support.",
        details: "This practice builds psychological safety by normalizing both successes and struggles. It's an excellent routine for weekly syncs.",
        examples: ["High: I finally finished a complex project. Low: My coffee machine broke.", "High: I had a great weekend hike. Low: I'm struggling with a bug in my code."],
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Any"
    },
    {
        id: "personal-hero",
        title: "Personal Hero",
        description: "Who is someone you look up to and why? It can be a family member, a public figure, or a fictional character.",
        details: "Discussing role models can inspire the team and help members understand the qualities each person admires and strives for.",
        examples: ["Who was your childhood hero?", "Which historical figure inspires you the most?", "Is there a fictional character you relate to strongly?"],
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "virtual-scavenger-hunt",
        title: "Virtual Scavenger Hunt",
        description: "The host gives a prompt (e.g., 'Find something yellow'), and everyone races to find an item in their house and show it on camera.",
        details: "An energetic and chaotic game that gets people out of their chairs and moving. Great for breaking the monotony of back-to-back calls.",
        examples: ["Find something that starts with the letter 'M'.", "Bring back your favorite mug.", "Find something that makes a funny noise."],
        category: "Team Building",
        duration: "10-20 mins",
        groupSize: "Any"
    },
    {
        id: "alien-introduction",
        title: "Alien Introduction",
        description: "If aliens landed on Earth and you had to explain what your team does in 3 sentences, what would you say?",
        details: "A fun exercise to distill the team's mission and purpose. It can sometimes highlight differences in how team members view their roles.",
        examples: ["Explain our product to an alien.", "How would you describe our company culture to an outsider?", "What is our team's main goal?"],
        category: "Team Building",
        duration: "10-15 mins",
        groupSize: "Medium"
    },
    {
        id: "collaborative-storytelling",
        title: "Collaborative Storytelling",
        description: "One person starts a story with one sentence, and each person adds a sentence to build the story. It usually gets silly very quickly!",
        details: "Fosters creativity and adaptability, as each person has to build upon the unexpected direction the previous person took.",
        examples: ["Start with: 'It was a dark and stormy night when suddenly...'", "Start with: 'I found a mysterious box on my doorstep.'", "Start with: 'The robot suddenly opened its eyes.'"],
        category: "Team Building",
        duration: "10 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "would-you-rather",
        title: "Would You Rather",
        description: "The host asks a fun 'Would you rather' question, and everyone votes or discusses their choice.",
        details: "A simple and engaging way to start debates and find common ground or surprising differences among team members.",
        examples: ["Would you rather have the ability to fly or be invisible?", "Would you rather travel 100 years into the past or 100 years into the future?", "Would you rather always be 10 minutes late or 20 minutes early?"],
        category: "Quick 5-min Games",
        duration: "5 mins",
        groupSize: "Any"
    },
    {
        id: "show-us-your-view",
        title: "Show Us Your View",
        description: "Everyone takes their camera or laptop and shows the view from their window. It's a nice way to see a piece of everyone's world.",
        details: "Helps humanize remote workers by grounding them in their physical environments and sharing a literal different perspective.",
        examples: ["What is the most interesting thing you can see from your window?", "What's the weather like where you are right now?", "Show us your favorite part of your home office."],
        category: "Quick 5-min Games",
        duration: "5 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "bucket-list-sharing",
        title: "Bucket List Sharing",
        description: "Each person shares one item from their life's bucket list. A great way to learn about what people value outside of work.",
        details: "Encourages team members to dream big and share their passions, which can lead to discovering shared interests or future travel buddies.",
        examples: ["What is one country you want to visit before you die?", "What is a skill you've always wanted to learn?", "What is an extreme sport you want to try?"],
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "rose-bud-thorn",
        title: "Rose, Bud, Thorn",
        description: "Share a Rose (a highlight), a Bud (something you're looking forward to), and a Thorn (a current challenge).",
        details: "A structured format for sharing updates that provides a balanced view of someone's current state of mind and work progress.",
        examples: ["Rose: Finished my presentation. Bud: Vacation next week. Thorn: Waiting on a blocker.", "Rose: Adopted a puppy. Bud: Learning a new framework. Thorn: Lack of sleep."],
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Any"
    },
    {
        id: "virtual-pictionary",
        title: "Virtual Pictionary",
        description: "Using a virtual whiteboard, one person draws a word while the rest of the team tries to guess what it is.",
        details: "A classic game that requires no special tools other than Zoom's built-in whiteboard. It gets everyone engaged and laughing.",
        examples: ["Draw an animal without using words.", "Draw an idiom (e.g., 'piece of cake').", "Draw a famous movie scene."],
        category: "Team Building",
        duration: "15-20 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "guess-the-desk",
        title: "Guess the Desk",
        description: "Everyone sends a picture of their workspace to the host beforehand. The host shows them, and the team guesses whose desk is whose.",
        details: "A fun way to learn about people's working styles, organization habits, and personal tastes. It requires a tiny bit of prep but pays off in engagement.",
        examples: ["Who owns this messy desk?", "Who has the standing desk setup?", "Whose desk features three monitors?"],
        category: "Team Building",
        duration: "10-15 mins",
        groupSize: "Medium"
    }
];
