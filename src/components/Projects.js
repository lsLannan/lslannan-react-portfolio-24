import CardList from '../components/ProjectCard.js';
import ProjectCard from '../components/ProjectCard.js';
import '../styles/Projects.css';

export default function Projects() {
    return (
        <div className="container" id="projects">
            <h1>PROJECTS</h1>
            <h2>Welcome to my collection of frontend projects!<br></br> Ranging from personal projects, Codecademy career-path modules and University coursework</h2>
        
            <div className="projects-container">
                <CardList />
            </div>
        </div>
    );
}