import Project from "../Project/Project";

function ProjectRow(props){
    const { rowData, windowSize, fadeIn } = props;
    return (
        <div className={`${fadeIn ? " fade-in-scroll " : ""}flex gap-8 justify-center`}>
            {
                // Map rows to items
                rowData.map((project) => {
                    return (
                    <div key={`project-${project.id}`} className="w-3/4 lg:w-1/2 mb-8">
                        <Project windowSize={windowSize} projectData={project} />
                    </div>
                )})
            }
        </div>
    );
}

export default ProjectRow;