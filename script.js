const currentTheme = localStorage.getItem('theme');

function switchTheme(e) {
    if (currentTheme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

const projectsData = [
    {
        title: "BESAFE: Blockchain",
        imgSrc: "/assets/projects/besafe2.png",
        description: `Final year B. Tech project, innovative solution addresses critical need for secure storage and access of data.
        Acts as a wrapper over google drive to store encrypted files, hash of file is stored in Ethereum blockchain.
        User can still use their existing drive whilst enjoying safeguarding of sensitive information.`,
        sourceCodeLink: "https://github.com/orgs/BeSafe-Org/repositories",
        liveDemoLink: "https://github.com/BeSafe-Org/besafe-angular#besafe-blockchain-and-encryption-for-secure-access-to-files-and-electronic-data"
    },
    {
        title: "Instantly: Instant Video Calling App",
        imgSrc: "/assets/projects/instantly.png",
        description: `Users can create or join an instant meeting, without going through lengthy signing processes in times of urgency.Uses WebRTC for browser-to-browser connection, requiring server only for establishing connection.`,
        sourceCodeLink: "https://github.com/eissafaheem/instantly-video-calling-app",
        liveDemoLink: "https://github.com/eissafaheem/instantly-video-calling-app#instantly-video-calling-app"
    },
    {
        title: "Meow: Cats App",
        imgSrc: "/assets/projects/meow.png",
        description: `Developed as a fun way to display skills, users can unlock new cat avatars by collecting 'Paw-ints' by
        meowing in their conversations. Users can have a one to one as well as group chat, members can be added and removed from group.`,
        sourceCodeLink: "https://github.com/eissafaheem?tab=repositories&q=cats-app&type=&language=&sort=",
        liveDemoLink: "https://github.com/eissafaheem/cats-app-react#meow-realtime-chat-app-preview"
    },
    {
        title: "Autohunt",
        imgSrc: "/assets/projects/autohunt.png",
        description: "Autohunt is a car selling application which has a landing page, a search page, compare section, services provided, testimonials, about us and contact section. It is developed using React, typescript and css.",
        sourceCodeLink: "https://github.com/eissafaheem/autohunt_react_app",
        liveDemoLink: "https://github.com/eissafaheem/autohunt_react_app#autohunt"
    },
];


function openLink(url) {
    window.open(url, "_blank");
}

function generateProjectCards() {
    const projectGrid = document.querySelector('.card-grid');

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${project.imgSrc}" alt="">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="links">
                    <button><a href="${project.sourceCodeLink}" target="_blank">Source Code</a></button>
                    <button><a href="${project.liveDemoLink}" target="_blank">Live Demo</a></button>
                </div>
            </div>
        `;

        projectGrid.appendChild(card);
    });
}


generateProjectCards();
switchTheme()
