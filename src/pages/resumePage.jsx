import ResumeElement from "../components/resume";

export default function Resume() {
    return (
        <main className="block mx-6 pb-2 mb-6">
            <h3 className="subtitle is-2">My Resume</h3>
            <div className="box m-2 mx-5 has-background-primary-100">
                <ResumeElement />
            </div>
            <div className="is-flex is-justify-content-center">
                <a href="./assets/IanResume.pdf" download className="button is-link">Download Resume PDF</a>
            </div>
        </main>
    );
}