function getImage(folderPath, imgName){
    return (
        <div className="h-full p-2 flex justify-center items-center">
            <img className="max-h-full rounded-md" src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

function getDescription(name, description){
    return (
        <div className="px-4 pt-3 pb-4">
            <p className="text-3xl pb-4">{name}</p>
            <p>{description}</p>
        </div>
    )
}

function getButton(buttonText, buttonUrl) {
    return (
        <div className="h-full flex justify-center items-center">
            <a className="link-btn" href={buttonUrl}>{buttonText}</a>
        </div>
    )
}

function getTags(projectName, tags, techs){
    const colNum = 3;
    return (
        <div className="h-full p-2 grid grid-cols-3">
            {tags.map((tag, index) =>
                <div key={projectName + "Tag" + index} className="flex h-min justify-center">
                    <p className="whitespace-nowrap px-2 py-0.5 mb-0 my-1 bg-tag rounded-md">{tag}</p>
                </div>
            )}
            {techs.map((technology, index) =>
                <div key={projectName + "Tech" + index} className="flex h-min justify-center">
                    <p className="whitespace-nowrap px-2 py-0.5 mb-0 my-1 bg-tech rounded-md">{technology}</p>
                </div>
            )}
        </div>
    )
}

function Project(props) {
    const { id, name, description, imgName, tags, techs, buttonText, buttonUrl } = props.projectData;
    
    return (
        <div className="background-box grid grid-cols-3">
            <div className="col-span-1">
                {getImage("./Images/Projects/", imgName)}
            </div>
            <div className="col-span-2">
                {getDescription(name, description)}
            </div>
            <div className="col-span-1">
                {getButton(buttonText, buttonUrl)}
            </div>
            <div className="col-span-2">
                {getTags(name, tags, techs)}
            </div>
        </div>
    )
}

export default Project;