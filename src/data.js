const data = [
    {
        id: 10,
        title: "BookGraph",
        blurb: "Interactive 3D map of books powered by embeddings and WebGL",
        description: `Ingest and embed open-source Goodreads data, project books into 3D space, and render the world of books in WebGL.
        You can explore clusters, use queries for semantic teleportation, and even upload your own personal Goodreads CSV to place yourself on the map 📚🐛`,
        breaks: 0,
        url: "https://bookgraph.up.railway.app/",
        img: "bookgraph.png",
        techstack: [
            "UMAP",
            "pgvector",
            "THREE.js",
            "FastAPI",
            "PostgreSQL",
            "DuckDB",
            "Python",
        ]
    },
    {
        id: 9,
        title: "Music Visualizer",
        blurb: "Real-time audio-reactive visualizer for music",
        description: `Takes live sound or music input and turns it into art real-time! Each panel
        shows a visualization sensitive to frequencies, amplitudes, and more. Choose one of the
        provided songs, or play into your microphone to see the magic happen live 💃 🕺`,
        breaks: 0,
        url: "https://leonmaksin.github.io/audio-art/",
        img: "audio-viz.png",
        techstack: [
            "Processing",
            "Javascript",
            "Audio"
        ]
    },
    {
        id: 0,
        title: "AngelBoard",
        blurb: "Donation platform with generative solana crystals for donators as incentive",
        description: `Developed a donation platform hosted on the Solana blockchain that incentivizes 
        donators through beautiful generative crystal NFTs. Solana, Ethereum, and card payment processing 
        allows charities to receive almost 100% of donations and forego most processing fees.`,
        breaks: 0,
        url: "https://angelboard.netlify.app/",
        img: "angelboard.png",
        techstack: [
            "Rust",
            "Processing",
            "React",
            "JavaScript",
            "Solidity",
            "Solana"
        ]
    },
    {
        id: 1,
        title: "ZTrade",
        blurb: "Online marketplace for college students and future college creator platform",
        description: `Secure, fast, and easy-to-use online marketplace built to facilitate easy exchange 
        for students, creators, and local businesses built as a full-stack application. Currently facilitates 
        transactions at 3+ college campuses but plateauing growth; project on hold indefinitely.`,
        breaks: 0,
        url: "https://joseph-stern.herokuapp.com/",
        img: "ztrade.png",
        techstack: [
            "Django",
            "React",
            "Node.js",
            "JavaScript",
            "Heroku",
            "AWS"
        ]
    },
    {
        id: 2,
        title: "NYC Aerospace",
        blurb: "Nonprofit educating students about aerospace with hands-on projects",
        description: `NYC Aerospace was founded in 2018 and encapsulated nine schools, 150+ students, 
        three museum programs, and six intensive projects. Projects included a 100,000ft rocket 
        build in California, educational rocketry competition, incubator program, and more.`,
        breaks: 0,
        url: "https://www.nycaerospace.org/",
        img: "rocket.jpg",
        techstack: [
            "Flask",
            "Javascript"
        ]
    },
    {
        id: 3,
        title: "Wander",
        blurb: "Social media platform for discussing and recommending intellectual content",
        description: `Spearheaded product design process and oversaw four teams as product manager by
        creating sprints, owning roadmap, developing features, and guiding team operations.
        Grew to 200+ active users and achieved sustainable growth in retention while on team.`,
        breaks: 0,
        url: "https://www.thinkwander.com/",
        img: "wander.png",
        techstack: [
            "React",
            "Node.js",
            "Javascript",
            "Heroku",
            "AWS"
        ]
    },
    {
        id: 4,
        title: "BOND Consulting",
        blurb: "The University of Michigan's original pro-bono consulting group",
        description: `We have worked with over 120 local businesses, startups, and non-profits in 
        the Ann Arbor area to help them solve their toughest problems over the last 16 years. 
        Have gotten to work with some awesome clients, and met my closest friends on campus 💙`,
        breaks: 0,
        url: "http://www.bond-consulting.org/",
        img: "BOND.png",
        techstack: [
            "Javascript"
        ]
    },
    {
        id: 5,
        title: "Trees",
        blurb: "WebGL meets link-tree, of sorts",
        description: `My first project using WebGL, and a fun way to spend a Tuesday. Interactive
        stress reliever I've turned to countless times.`,
        breaks: 2,
        url: "https://leonmaksin.me/trees/",
        img: "trees.png",
        techstack: [
            "THREE.js",
            "Javascript"
        ]
    },
    {
        id: 8,
        title: "GPT-3 Travel Finder",
        blurb: "In the future, we plan our trips with AI...",
        description: `Pick a spot on the map, choose a category of activities, and let GPT-3 plan the rest!
        The website will create a smart prompt for any input, then call OpenAI's' API to share a few recommendations.`,
        breaks: 1,
        url: "https://www.gptravel.app/",
        img: "gptravel.png",
        techstack: [
            "GPT-3",
            "Javascript",
            "Next.js"
        ]
    },
    {
        id: 6,
        title: "Generative Art",
        blurb: "Currently playing with processing in my free time",
        description: `Check these artworks/simulations/whatever-you-want-to-call-it!`,
        breaks: 3,
        url: "https://leonmaksin.me/gallery/",
        img: "eye.png",
        techstack: [
            "Processing",
            "Javascript"
        ]
    },
    {
        id: 7,
        title: "Super Scripts",
        blurb: "Some productivity scripts to prevent your procrastination Daemons",
        description: `An automatic site blacklister and closer, a shutdown script linked to your calendar,
        and a guest/incognito access toggler. Built to boost productivity and learn Bash, AppleScript, and
        Daemons. Let me know if you'd like to set these up and try them out for yourself!`,
        breaks: 0,
        url: "https://github.com/leonmaksin/super-scripts",
        img: "bash.png",
        techstack: [
            "Bash",
            "AppleScript",
            "XML"
        ]
    }
]

export default data;
