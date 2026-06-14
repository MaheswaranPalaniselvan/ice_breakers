const activities = [
    {
        id: "gif-mood-check",
        title: "GIF Mood Check",
        description: "Everyone shares a GIF in the chat that represents how they feel today. It's a quick and visual way to check the team's pulse.",
        details: "This is a low-pressure activity that requires no speaking and helps everyone get a sense of the team's energy levels. It works great at the start of a meeting or sprint planning.",
        category: "Quick 5-min Games",
        duration: "5 mins",
        groupSize: "Any"
    },
    {
        id: "two-truths-and-a-lie",
        title: "Two Truths and a Lie",
        description: "Each person shares two true facts and one lie about themselves. The group guesses which statement is the lie.",
        details: "A classic game that helps team members learn surprising facts about each other. It encourages storytelling and active listening.",
        category: "Quick 5-min Games",
        duration: "5-10 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "desk-show-and-tell",
        title: "Desk Show and Tell",
        description: "Show one item on your desk and explain why it's there or its significance to you.",
        details: "A quick peek into someone's personal workspace. It can spark conversations about hobbies, family, or personal quirks.",
        category: "Quick 5-min Games",
        duration: "5 mins",
        groupSize: "Any"
    },
    {
        id: "if-you-could",
        title: "The 'If You Could' Question",
        description: "If you could have dinner with any historical figure, who would it be and why? Go around the virtual room and share.",
        details: "Hypothetical questions often reveal a lot about a person's values, interests, and aspirations.",
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "highs-and-lows",
        title: "Highs and Lows",
        description: "Share one highlight (high) and one challenge (low) from the past week. Fosters vulnerability and support.",
        details: "This practice builds psychological safety by normalizing both successes and struggles. It's an excellent routine for weekly syncs.",
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Any"
    },
    {
        id: "personal-hero",
        title: "Personal Hero",
        description: "Who is someone you look up to and why? It can be a family member, a public figure, or a fictional character.",
        details: "Discussing role models can inspire the team and help members understand the qualities each person admires and strives for.",
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "virtual-scavenger-hunt",
        title: "Virtual Scavenger Hunt",
        description: "The host gives a prompt (e.g., 'Find something yellow'), and everyone races to find an item in their house and show it on camera.",
        details: "An energetic and chaotic game that gets people out of their chairs and moving. Great for breaking the monotony of back-to-back calls.",
        category: "Team Building",
        duration: "10-20 mins",
        groupSize: "Any"
    },
    {
        id: "alien-introduction",
        title: "Alien Introduction",
        description: "If aliens landed on Earth and you had to explain what your team does in 3 sentences, what would you say?",
        details: "A fun exercise to distill the team's mission and purpose. It can sometimes highlight differences in how team members view their roles.",
        category: "Team Building",
        duration: "10-15 mins",
        groupSize: "Medium"
    },
    {
        id: "collaborative-storytelling",
        title: "Collaborative Storytelling",
        description: "One person starts a story with one sentence, and each person adds a sentence to build the story. It usually gets silly very quickly!",
        details: "Fosters creativity and adaptability, as each person has to build upon the unexpected direction the previous person took.",
        category: "Team Building",
        duration: "10 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "would-you-rather",
        title: "Would You Rather",
        description: "The host asks a fun 'Would you rather' question, and everyone votes or discusses their choice.",
        details: "A simple and engaging way to start debates and find common ground or surprising differences among team members.",
        category: "Quick 5-min Games",
        duration: "5 mins",
        groupSize: "Any"
    },
    {
        id: "show-us-your-view",
        title: "Show Us Your View",
        description: "Everyone takes their camera or laptop and shows the view from their window. It's a nice way to see a piece of everyone's world.",
        details: "Helps humanize remote workers by grounding them in their physical environments and sharing a literal different perspective.",
        category: "Quick 5-min Games",
        duration: "5 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "bucket-list-sharing",
        title: "Bucket List Sharing",
        description: "Each person shares one item from their life's bucket list. A great way to learn about what people value outside of work.",
        details: "Encourages team members to dream big and share their passions, which can lead to discovering shared interests or future travel buddies.",
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "rose-bud-thorn",
        title: "Rose, Bud, Thorn",
        description: "Share a Rose (a highlight), a Bud (something you're looking forward to), and a Thorn (a current challenge).",
        details: "A structured format for sharing updates that provides a balanced view of someone's current state of mind and work progress.",
        category: "Deep Conversations",
        duration: "10-15 mins",
        groupSize: "Any"
    },
    {
        id: "virtual-pictionary",
        title: "Virtual Pictionary",
        description: "Using a virtual whiteboard, one person draws a word while the rest of the team tries to guess what it is.",
        details: "A classic game that requires no special tools other than Zoom's built-in whiteboard. It gets everyone engaged and laughing.",
        category: "Team Building",
        duration: "15-20 mins",
        groupSize: "Small to Medium"
    },
    {
        id: "guess-the-desk",
        title: "Guess the Desk",
        description: "Everyone sends a picture of their workspace to the host beforehand. The host shows them, and the team guesses whose desk is whose.",
        details: "A fun way to learn about people's working styles, organization habits, and personal tastes. It requires a tiny bit of prep but pays off in engagement.",
        category: "Team Building",
        duration: "10-15 mins",
        groupSize: "Medium"
    }
];
