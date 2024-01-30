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

function generateExperienceCards() {
    const experienceheading = document.querySelector('#experience-heading');
    let exp = getTimestampDifference(Date.now(), experienceData[experienceData.length - 1].from)
    experienceheading.innerText = `Experience ${exp} years`
    const experienceGrid = document.querySelector('#all-experience-items');

    experienceData.forEach(experience => {
        const card = document.createElement('div');
        card.classList.add('item');

        const fromDate = getMonthYearFromTimestamp(experience.from);
        let toDate = getMonthYearFromTimestamp(experience.to);
        const nowDate = getMonthYearFromTimestamp(Date.now());
        if (nowDate === toDate) {
            toDate = "Present";
        }

        const descriptionLines = experience.description.split('\n');
        const formattedDescription = descriptionLines.length > 1 ?
            `<ul>${descriptionLines.map(line => `<li>${line}</li>`).join('')}</ul>` :
            project.description;

        // const duration = getTimestampDifference(experience.to, experience.from);

        card.innerHTML = `
            <h3>
                <a href="${experience.companyUrl}" target="_blank">${experience.conpanyName}, ${experience.location}: ${experience.role}</a>
                <span class="duration">${fromDate} - ${toDate}</span>
            </h3>
            <div class="item-data">
                <div class="details">
                    <div class="description">
                        ${formattedDescription}
                    </div>
                </div>
                <img src="${experience.imgSrc}" alt="">
            </div>
        `;

        experienceGrid.appendChild(card);
    });
}

function getTimestampDifference(to, from) {
    let difference = to - from;
    let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    let years = (daysDifference / 365).toFixed(1);
    return years;
}

function getMonthYearFromTimestamp(timestamp) {
    const timestampObj = new Date(timestamp);
    return `${timestampObj.toLocaleString('default', { month: 'short' })} ${timestampObj.getFullYear()}`;
}

function generateProjectCards() {
    const projectGrid = document.querySelector('#all-project-items');

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('item');

        const descriptionLines = project.description.split('\n');
        const formattedDescription = descriptionLines.length > 1 ?
            `<ul>${descriptionLines.map(line => `<li>${line}</li>`).join('')}</ul>` :
            project.description;

        let linksHTML = '';

        if (project.sourceCodeLink) {
            linksHTML += `<a href="${project.sourceCodeLink}" target="_blank"><img src="./assets/github-mark-dark.svg" alt="Github" title="Github"></a>`;
        }

        if (project.screenshotLink) {
            linksHTML += `<a href="${project.screenshotLink}" target="_blank"><img src="./assets/screenshot.svg" alt="Screenshots" title="Screenshots"></a>`;
        }

        if (project.liveDemoLink) {
            linksHTML += `<a href="${project.liveDemoLink}" target="_blank"><img src="./assets/open-new-tab.svg" alt="Live" title="Live"></a>`;
        }

        card.innerHTML = `
            <h3>${project.title}</h3>
            <div class="item-data">
                <div class="details">
                    <div class="description">
                        ${formattedDescription}
                    </div>
                    <div class="links">
                        ${linksHTML}
                    </div>
                </div>
                <img src="${project.imgSrc}" alt="">
            </div>
        `;

        projectGrid.appendChild(card);
    });
}


function sendEmail() {
    const to = "eissafaheem@gmail.com";
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const body = encodeURIComponent(document.getElementById('message').value);
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
        title: "Fullstack BESAFE: Blockchain and Encryption for Secure Access to Files \n and Electronic Data",
        imgSrc: "./assets/projects/besafe2.png",
        description: `Final year B. Tech project, innovative solution addresses critical need for secure storage and access of data. 
        Acts as a wrapper over google drive to store encrypted files, hash of file is stored in Ethereum blockchain. 
        User can still use their existing drive whilst enjoying safeguarding of sensitive information.
        Skills Used: Angular, JavaScript, TypeScript, Java, Spring Boot, JDBC, Solidity`,
        sourceCodeLink: "https://github.com/orgs/BeSafe-Org/repositories",
        screenshotLink: "https://github.com/BeSafe-Org/besafe-angular#besafe-blockchain-and-encryption-for-secure-access-to-files-and-electronic-data",
        // liveDemoLink: "https://github.com/BeSafe-Org/besafe-angular#besafe-blockchain-and-encryption-for-secure-access-to-files-and-electronic-data"
    },
    {
        title: "Fullstack Instantly: Instant Video Calling App",
        imgSrc: "./assets/projects/instantly.png",
            description: `Engineered an instant meeting platform prioritizing user convenience and urgency.
            Seamless meeting creation and joining without cumbersome sign-up processes.
            Utilized WebRTC for efficient peer-to-peer connections, reducing latency.
            Minimized server dependency, leveraging it solely for WebRTC connection establishment.
            Skills used: React, NodeJS, JavaScript Typescript, WebRTC.`,
        sourceCodeLink: "https://github.com/eissafaheem/instantly-video-calling-app",
        screenshotLink: "https://github.com/eissafaheem/instantly-video-calling-app#instantly-video-calling-app",
        liveDemoLink: "https://instantly-video-calling.netlify.app/"
    },
    {
        title: "Fullstack Meow: Realtime Chat Application",
        imgSrc: "./assets/projects/meow.png",
        description: `Innovatively designed chat application to showcase skills with a playful twist.
        Users unlock new cat avatars by earning 'Paw-ints' through meowing in conversations.
        Implemented one-to-one and group chat functionalities for a dynamic user experience.
        Skills used: React, NodeJS, MongoDB, JavaScript, TypeScript`,
        sourceCodeLink: "https://github.com/eissafaheem?tab=repositories&q=cats-app&type=&language=&sort=",
        screenshotLink: "https://github.com/eissafaheem/cats-app-react#meow-realtime-chat-app-preview",
        liveDemoLink: "https://cats-chat-app.netlify.app/"
    },
    {
        title: "Fullstack Draw Together: Shared Meeting Board for Teams",
        imgSrc: "./assets/projects/draw-together.png",
        description: `Developed a Fullstack Draw Together platform, fostering collaborative creativity.
        Users initiate a shared meeting board by creating a room and sharing a unique code with their team.
        Helps team members to collectively brainstorm and plan.
        Real-time synchronization of doodles and ideas on the shared screen for all team members.
        Skills Used: React, JavaScript, TypeScript, NodeJS, SocketIO`,
        sourceCodeLink: "https://github.com/eissafaheem?tab=repositories&q=draw-together&type=&language=&sort=",
        screenshotLink: "https://github.com/eissafaheem/draw-together-react?tab=readme-ov-file#create-or-join-a-drawing-room",
        liveDemoLink: "https://draw-together.netlify.app/   "
    },
];

const experienceData = [
    {
        conpanyName:"Ziroh Labs",
        companyUrl:"https://gozunu.com/",
        role: "Member of Technical Staff",
        location: "Bangalore",
        from: 1672511400000,
        to: Date.now(),
        imgSrc: "./assets/projects/zunu-messages1.png",
        description: `Working on Zunu Messages, ensures ultimate message privacy through device-to-device end-to-end encryption. Media files remain invisible to third-party apps in the gallery. 
        SMS messages are secure from third-party apps with inbox access. Telecom providers can't access sent or received messages. 
        Even in the event of a lost device or compromised password, message confidentiality remains intact.
        Skills used: React Native, JavaScript, TypeScript, Java, OOPS.`,
    },
    {
        conpanyName:"Ziroh Labs",
        companyUrl:"https://gozunu.com/",
        role: "Member of Technical Staff Intern",
        location: "Bangalore",
        from: 1656613800000,
        to: 1672425000000,
        imgSrc: "./assets/projects/ziroh-store.png",
        description: `Contributed to the development of Ziroh Store, an encrypted file storage system, integrates with OneDrive, Google Drive, and Dropbox, serving as a secure interface over them, encrypting files before storing them on the respective cloud platforms, ensuring total privacy for users.
        EnterPrize Vault, a robust administrative panel tailored for enterprises. This platform empowers enterprises to efficiently utilize Ziroh products while providing comprehensive tools to manage teams and members seamlessly.
        Skills used: React, JavaScript, TypeScript.`,
    }
];

generateExperienceCards();
generateProjectCards();
toggleEyes();
applyTheme(currentTheme);