const currentTheme = localStorage.getItem('theme');
// switchTheme()

function switchTheme(e) {
    if (currentTheme==="light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Save theme preference to local storage
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}



// Define an array of objects for your projects
const projectsData = [
    {
        title: "BESAFE: Blockchain",
        imgSrc:"/assets/projects/besafe.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis totam expedita ex nobis at dolor pariatur voluptate harum error.",
        sourceCodeLink: "https://github.com/yourusername/project1",
        liveDemoLink: "https://yourprojectdemo.com"
    },
    {
        title: "Meow: Cats App",
        imgSrc:"/assets/projects/meow.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis totam expedita ex nobis at dolor pariatur voluptate harum error.",
        sourceCodeLink: "https://github.com/yourusername/project2",
        liveDemoLink: "https://yourprojectdemo.com"
    },
    {
        title: "Instantly: Instant Video Calling App",
        imgSrc:"/assets/projects/besafe.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis totam expedita ex nobis at dolor pariatur voluptate harum error.",
        sourceCodeLink: "https://github.com/yourusername/project2",
        liveDemoLink: "https://yourprojectdemo.com"
    },
    {
        title: "Autohunt",
        imgSrc:"/assets/projects/autohunt.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis totam expedita ex nobis at dolor pariatur voluptate harum error.",
        sourceCodeLink: "https://github.com/yourusername/project2",
        liveDemoLink: "https://yourprojectdemo.com"
    },
    // Add more projects as needed
];

// Function to generate project cards
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

// Call the function to generate project cards
generateProjectCards();
