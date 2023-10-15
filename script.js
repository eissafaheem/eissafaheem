const lightModeIcon = document.querySelector(".light-mode-icon");
const darkModeIcon = document.querySelector(".dark-mode-icon");
let currentTheme = localStorage.getItem('theme');
var avatar = document.querySelector('.avatar');
var eyes = document.querySelector('.eyes_container');
var eye1 = document.getElementById("eye1");
var eye2 = document.getElementById("eye2");
var isVisible = true;
var isMouseMoved = false;

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navigation = document.querySelector('.navigation');

window.addEventListener("mousemove", startEyeMovement);

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

function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        lightModeIcon.style.display = "block";
        darkModeIcon.style.display = "none";
        menuIcon.src = "./assets/menu-icon-dark.svg";
        closeIcon.src = "./assets/close-icon-dark.svg";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightModeIcon.style.display = "none";
        darkModeIcon.style.display = "block";
        menuIcon.src = "./assets/menu-icon-light.svg";
        closeIcon.src = "./assets/close-icon-light.svg";
    }
}

function switchTheme() {
    if (currentTheme === "dark") {
        localStorage.setItem('theme', 'light');
        currentTheme = "light";
    } else {
        currentTheme = "dark";
        localStorage.setItem('theme', 'dark');
    }
    applyTheme(currentTheme);
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

function generateBird(event) {
    console.log("object")
    const container = document.getElementById('body');
    const birdBody = document.createElement('div');
    birdBody.className = 'birdBody';

    const x = event.pageX;
    const y = event.pageY;
    birdBody.style.left = x + 'px';
    birdBody.style.top = y + 'px';
    container.appendChild(birdBody);

    const birdWings = document.createElement('div');
    birdWings.className = 'birdWings';
    birdBody.appendChild(birdWings);

    setTimeout(() => {
        move(birdBody);
    }, 200);

    setTimeout(() => {
        container.removeChild(birdBody);
    }, 6000);
}

function move(element) {
    element.style.top = 0 + "vh";
    element.style.left = generateRandomNumber() + "vw";
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 0;
}

function startEyeMovement() {
    if (isMouseMoved === false) {
        toggleEyes();
    }
    rotateEye(eye1);
    rotateEye(eye2);
}

function rotateEye(eye) {
    if (eye) {
        var eyeRect = eye.getBoundingClientRect();
        var x = eyeRect.left + (eyeRect.width / 2);
        var y = eyeRect.top + (eyeRect.height / 2);
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.style.transform = "rotate(" + rot + "deg)";
    }
}

function toggleEyes() {
    if (isVisible && isMouseMoved === false) {
        avatar.appendChild(eyes);
        isVisible = false;
        isMouseMoved = true;
        setTimeout(() => {
            avatar.removeChild(eyes);
            isVisible = true;
            isMouseMoved = false;
        }, 1000);
    }
}

const projectsData = [
    {
        title: "BESAFE: Blockchain and Encryption for Secure Access to Files and Electronic Data",
        imgSrc: "./assets/projects/besafe2.png",
        description: `Final year B. Tech project, innovative solution addresses critical need for secure storage and access of data.
        Acts as a wrapper over google drive to store encrypted files, hash of file is stored in Ethereum blockchain.
        User can still use their existing drive whilst enjoying safeguarding of sensitive information.`,
        sourceCodeLink: "https://github.com/orgs/BeSafe-Org/repositories",
        liveDemoLink: "https://github.com/BeSafe-Org/besafe-angular#besafe-blockchain-and-encryption-for-secure-access-to-files-and-electronic-data"
    },
    {
        title: "Instantly: Instant Video Calling App",
        imgSrc: "./assets/projects/instantly.png",
        description: `Users can create or join an instant meeting, without going through lengthy signing processes in times of urgency. Uses WebRTC for browser-to-browser connection, requiring server only for establishing connection.`,
        sourceCodeLink: "https://github.com/eissafaheem/instantly-video-calling-app",
        liveDemoLink: "https://github.com/eissafaheem/instantly-video-calling-app#instantly-video-calling-app"
    },
    {
        title: "Meow: Realtime Chat Application",
        imgSrc: "./assets/projects/meow.png",
        description: `Developed as a fun way to display skills, users can unlock new cat avatars by collecting 'Paw-ints' by
        meowing in their conversations. Users can have a one to one as well as group chat, members can be added and removed from group.`,
        sourceCodeLink: "https://github.com/eissafaheem?tab=repositories&q=cats-app&type=&language=&sort=",
        liveDemoLink: "https://github.com/eissafaheem/cats-app-react#meow-realtime-chat-app-preview"
    },
    {
        title: "Autohunt: Car Buying Application ",
        imgSrc: "./assets/projects/autohunt.png",
        description: "Autohunt is a car selling application which has a landing page, a search page, compare section, services provided, testimonials, about us and contact section. It is developed using React, typescript and css.",
        sourceCodeLink: "https://github.com/eissafaheem/autohunt_react_app",
        liveDemoLink: "https://github.com/eissafaheem/autohunt_react_app#autohunt"
    },
];

generateProjectCards();
toggleEyes();
applyTheme(currentTheme);