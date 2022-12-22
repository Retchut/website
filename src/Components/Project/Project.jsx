function getImage(folderPath, imgName){
    return (
        <div className="grow p-2 flex justify-center items-center">
            <img className="w-proj-thumb h-auto rounded-md" src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

function getButton(buttonText, buttonUrl) {
    return (
        <div className="flex justify-center items-end">
            <a className="link-btn my-2" href={buttonUrl}>{buttonText}</a>
        </div>
    )
}

function getDescription(name, description){
    return (
        <div className="grow px-4 pt-3 pb-4">
            <p className="text-3xl pb-4">{name}</p>
            <p>{description}</p>
        </div>
    )
}

function getTags(projectName, tags, techs){
    return (
        <div className="my-2 pb-2 grid grid-cols-4">
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
    const { name, description, imgName, tags, techs, buttonText, buttonUrl } = props.projectData;
    
    return (
        <div className="background-box grid grid-cols-3">
            <div className="col-span-1">
                <div className="h-full flex flex-col">
                    {getImage("./Images/Projects/", imgName)}
                    {getButton(buttonText, buttonUrl)}
                </div>
            </div>
            <div className="col-span-2">
                <div className="h-full flex flex-col">
                    {getDescription(name, description)}
                    {getTags(name, tags, techs)}
                </div>
            </div>
        </div>
    )
}

export default Project;