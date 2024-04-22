import projectData from "../utils/projectData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectElements = (project) => {
    let button;
    if (project.deployedLink){
        button = <a href={project.deployedLink} className="button is-link" target="_blank">Deployed Application</a>
    }
    return (
        <article key={project.id} className="project box">
            <h3 className="title is-3 block">
                {project.title}
            </h3>
            <img src={project.image} alt="social networking api image" className="image block"/>
            <section className="content">
                <p>{project.body}</p>
            </section>
                {button}
            <a href={project.link} className="button is-info mx-1" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" />&nbsp;Github Repo</a>
        </article>
    )
}

export default function ProjectsOutput() {
    return projectData.map(projectElements);
}