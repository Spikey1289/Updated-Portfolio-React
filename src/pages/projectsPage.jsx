import ProjectsOutput from "../components/project";

export default function Projects() {
    return (
        <main className="block ml-6 mr-6">
            <h2 className="subtitle is-2 block">My Projects</h2>
            <section>
                <ProjectsOutput />
            </section>
        </main>
    );
}