import ProjectsOutput from "../components/project";

export default function Projects() {
    return (
        <main className="block mx-6 pb-2 mb-6">
            <h2 className="subtitle is-2 block">My Projects</h2>
            <section className="block">
                <ProjectsOutput />
            </section>
            <br />
        </main>
    );
}