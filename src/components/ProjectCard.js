import '../styles/ProjectCard.css';

const projects = [
    {
        id: 1,
        title: "Blush Landing Page",
        description: "Using knowledge of Flexbox, grid and breakpoints I created a responsive sleek company landing page as part of a Codecademy Front End Pathway",
        imageSrc: require('../images/blush-homepage.png'),
        imageAlt: "Blush homepage",
        stackUsed: "html css",
        projectLink: "https://lslannan.github.io/codecademy-company-homepage/"
    },
    {
        id: 2,
        title: "ToDo Web App",
        description: "To use knowledge of CRUD to create a ToDo manager",
        imageSrc: require('../images/todo-thumbnail-small.png'),
        imageAlt: "ToDo Web App",
        stackUsed: "html css js",
        projectLink: "https://lslannan.github.io/celestial-todo/",
        projectGithub: "https://lslannan.github.io/celestial-todo/"
    },
    {
        id: 3,
        title: "Ace Training",
        description: "Ace Training has a simplistic version of Moodle, i.e. a virtual learning environment.",
        imageSrc: require('../images/ace-training.jpg'),
        imageAlt: "Ace Training homepage",
        stackUsed: "html css js php",
        projectLink: "https://github.com/lsLannan/AceTraining",
        projectGithub: "https://github.com/lsLannan/AceTraining"
    },
    {
        id: 4,
        title: "Personal Portfolio v1",
        description: "Personal portfolio v1",
        imageSrc: require('../images/lslannan-portfolio-v1.png'),
        imageAlt: "Portfolio homepage",
        stackUsed: "html css js",
        projectLink: "https://lslannan.github.io/lslannanportfolio/",
        projectGithub: "https://github.com/lsLannan/lslannanportfolio"
    },
    {
        id: 5,
        title: "UNDER CONSTRUCTION: Jammming",
        description: "Codecademy FrontEnd Pathway Project",
        imageSrc: require('../images/jammming-screenshot.png'),
        imageAlt: "Jammming homepage",
        stackUsed: "html css js react api",
        projectLink: "https://github.com/lsLannan/Jammming",
        projectGithub: "https://github.com/lsLannan/Jammming"
    }
];

function ProjectCard(props) {
    return (
        <div className="project-card-container">
            <div className='project-all-info'>
                <img className='project-img' src={props.projects.imageSrc} alt={props.projects.imageAlt}/>
                <h1>{props.projects.title}</h1>
                <p className='stack-used'>{props.projects.stackUsed}</p>
                <p>{props.projects.description}</p>
                <div className="project-btns">
                    <button className='github-btn btn'><a href={props.projects.projectGithub} target='_blank' rel="noreferrer"><i class="fa-brands fa-github" title='GitHub'></i></a></button>
                    <button className='visit-btn btn'><a href={props.projects.projectLink} target='_blank' rel="noreferrer">Visit the site</a></button>
                </div>
            </div>
        </div>
    );
};

export default function CardList() {
    return (
        <>
            {projects.map(project => {
                return <ProjectCard projects={project} key={project.id} />;
            })}
        </>
    );
};