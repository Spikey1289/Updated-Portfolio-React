import projectData from "../utils/projectData"

const projectElements = (project) => {
    return (
        <article key={project.id} className="project box">
            <h3 className="title is-3 block">
                {project.title}
            </h3>
            <img src={project.image} alt="placeholder" className="image is-128x128 block"/>
            <section className="content">
                <p>{project.body}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, reiciendis fuga. Doloremque dolore assumenda exercitationem impedit nemo, tenetur numquam maiores consectetur libero inventore nisi voluptas rem aliquid porro voluptatem voluptate quas ipsum. Necessitatibus ipsa voluptates ratione facere enim porro odio blanditiis id nisi officiis et voluptatum quam, debitis quisquam voluptatem?</p>
            </section>
            <a href={project.link} className="button is-link" target="_blank">Deployed Application</a>
        </article>
    )
}

export default function ProjectsOutput() {
    return projectData.map(projectElements);
}