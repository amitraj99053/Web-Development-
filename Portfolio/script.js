// Sample data for skills and projects (customize as needed)
const skills = [
    { name: "HTML5", level: 95, description: "Semantic, accessible, SEO-friendly markup." },
    { name: "CSS3", level: 90, description: "Responsive layouts, Flexbox, Grid, Animations." },
    { name: "JavaScript", level: 88, description: "ES6+, DOM, Fetch API, SPA basics." },
    { name: "React", level: 75, description: "Hooks, components, props, state." },
    { name: "Node.js", level: 65, description: "Express, REST APIs, npm." },
    { name: "Git", level: 85, description: "Branching, collaboration, version control." }
];

const projects = [
    {
        name: "Portfolio Website",
        description: "A responsive personal portfolio to showcase my skills and projects.",
        link: "#"
    },
    {
        name: "Weather App",
        description: "A web app for live weather updates using OpenWeather API.",
        link: "#"
    },
    {
        name: "Task Manager",
        description: "A simple to-do app with local storage and user-friendly design.",
        link: "#"
    }
];

// Render skills
function renderSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill';
        div.innerHTML = `
            <h3>${skill.name}</h3>
            <div class="bar-bg">
                <div class="bar" style="width:0%"></div>
            </div>
            <p>${skill.description}</p>
        `;
        skillsList.appendChild(div);
        setTimeout(() => {
            div.querySelector('.bar').style.width = skill.level + '%';
        }, 100);
    });
}

// Render projects
function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project';
        div.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsList.appendChild(div);
    });
}

// Contact form handler
document.addEventListener('DOMContentLoaded', function () {
    renderSkills();
    renderProjects();

    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // (Fake) form submission
        formMessage.textContent = "Thank you! Your message has been sent.";
        form.reset();
        setTimeout(() => { formMessage.textContent = ""; }, 3000);
    });
});