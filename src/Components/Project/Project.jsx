import { buildTagRows } from '../../Utils/arrayFilters.js';

function getTagColNum(windowSize){
    switch(windowSize){
        case 3:
            return 4;
        case 2:
            return 3;
        case 1:
            return 2;
        default:
            return 1;
    }
}

function getImage(folderPath, imgName){
    return (
        <div className="grow p-2 flex justify-center items-center">
            <img className="w-proj-thumb aspect-square rounded-md" src={folderPath + imgName} alt={imgName} />
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

function getTags(projectName, tags, techs, windowSize){
    const rows = buildTagRows(tags, techs, getTagColNum(windowSize));

    return (
        <div className="">
            {rows.map((row, index) => {
                return (
                    <div className="my-2 pb-2 flex justify-center items-center">
                        {row.map((item, index) => {
                            return (
                                <div key={projectName + "Tag" + index} className="mx-2">
                                    <p className={`text-center px-2 py-0.5 mb-0 my-1 rounded-md ${(item.isTag ? "bg-tag" : "bg-tech")}`}>{item.content}</p>
                                </div>
                            );
                        })}
                    </div>
                )
            })}
        </div>
    )
}

function Project(props) {
    const { name, description, imgName, tags, techs, buttonText, buttonUrl } = props.projectData;
    const windowSize = props.windowSize;
    
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
                    {getTags(name, tags, techs, windowSize)}
                </div>
            </div>
        </div>
    )
}

export default Project;