const projectsData = [
    {
        title: "BESAFE: Blockchain and Encryption for Secure Access to Files and Electronic Data",
        imgSrc: "assets/projects/besafe2.png",
        description: `Final year B. Tech project, innovative solution addresses critical need for secure storage and access of data.
        Acts as a wrapper over google drive to store encrypted files, hash of file is stored in Ethereum blockchain.
        User can still use their existing drive whilst enjoying safeguarding of sensitive information.`,
        sourceCodeLink: "https://github.com/orgs/BeSafe-Org/repositories",
        liveDemoLink: "https://github.com/BeSafe-Org/besafe-angular#besafe-blockchain-and-encryption-for-secure-access-to-files-and-electronic-data"
    },
    {
        title: "Instantly: Instant Video Calling App",
        imgSrc: "assets/projects/instantly.png",
        description: `Users can create or join an instant meeting, without going through lengthy signing processes in times of urgency.Uses WebRTC for browser-to-browser connection, requiring server only for establishing connection.`,
        sourceCodeLink: "https://github.com/eissafaheem/instantly-video-calling-app",
        liveDemoLink: "https://github.com/eissafaheem/instantly-video-calling-app#instantly-video-calling-app"
    },
    {
        title: "Meow: Cats App",
        imgSrc: "assets/projects/meow.png",
        description: `Developed as a fun way to display skills, users can unlock new cat avatars by collecting 'Paw-ints' by
        meowing in their conversations. Users can have a one to one as well as group chat, members can be added and removed from group.`,
        sourceCodeLink: "https://github.com/eissafaheem?tab=repositories&q=cats-app&type=&language=&sort=",
        liveDemoLink: "https://github.com/eissafaheem/cats-app-react#meow-realtime-chat-app-preview"
    },
    {
        title: "Autohunt",
        imgSrc: "assets/projects/autohunt.png",
        description: "Autohunt is a car selling application which has a landing page, a search page, compare section, services provided, testimonials, about us and contact section. It is developed using React, typescript and css.",
        sourceCodeLink: "https://github.com/eissafaheem/autohunt_react_app",
        liveDemoLink: "https://github.com/eissafaheem/autohunt_react_app#autohunt"
    },
];

const lightModeIcon  = document.querySelector(".light-mode-icon");
const darkModeIcon  = document.querySelector(".dark-mode-icon");
let currentTheme = localStorage.getItem('theme');

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navigation = document.querySelector('.navigation');

document.addEventListener('DOMContentLoaded', function () {

    menuIcon.addEventListener('click', function () {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navigation.style.display = 'flex';
    });

    closeIcon.addEventListener('click', function () {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        navigation.style.display = 'none';
    });

    document.addEventListener('touchstart', function (event) {
        if (!event.target.closest('.nav-options') && closeIcon.style.display === 'block') {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            navigation.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
            if (closeIcon.style.display === 'block') {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                navigation.style.display = 'none';
            }
        });
    });
});

function switchTheme() {
    if (currentTheme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        currentTheme = "light";
        lightModeIcon.style.display = "none";
        darkModeIcon.style.display = "block";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        currentTheme = "dark";
        lightModeIcon.style.display = "block";
        darkModeIcon.style.display = "none";
    }
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
}

function openLink(url) {
    window.open(url, "_blank");
}

function generateProjectCards() {
    const projectGrid = document.querySelector('.card-grid');

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card-container">
                    <div class="card">
                        <div class="projects-data">
                            <img src="${project.imgSrc}" alt="${project.title}">
                            <div class="project-info">
                                <h3>${project.title}</h3>
                                <p>${project.description}</p>
                            </div>
                        </div>
                        <div class="links">
                            <button onclick="openLink('${project.sourceCodeLink}')">Source Code</button>
                            <button onclick="openLink('${project.liveDemoLink}')">Preview</button>
                        </div>
                    </div>
                </div>`;

        projectGrid.appendChild(card);
    });
}

function sendEmail() {
    const to = "eissafaheem@gmail.com";
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const body = encodeURIComponent(document.getElementById('body').value);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

generateProjectCards();

