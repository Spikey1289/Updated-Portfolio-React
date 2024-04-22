export default function Resume() {
    return (
        <main className="block mx-6 pb-2 mb-6">
            <h3 className="subtitle is-2">My Resume</h3>
            <embed className="resume" src="./assets/IanResume04-20-24.pdf" width={"100%"} style={{aspectRatio: 1, zoom: 95}}></embed>
            {/* <div className="is-flex is-justify-content-center">
                <a href="./assets/IanResume.pdf" download={"IanResume_4-20-24"} className="button is-link">Download Resume PDF</a>
            </div> */}
        </main>
    );
}