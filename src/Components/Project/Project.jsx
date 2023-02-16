import { buildTagRows } from '../../Utils/arrayFilters.js';

import './Project.css';

function getTagColNum(windowSize){
    switch(windowSize){
        case 5: // >2xl
        case 4: // 2xl (<1536px)
        case 3: // xl (<1280px)
            return 3;
        case 2: // lg (<1024px)
        case 1: // md (<768px), sm (<640px)
            return 2;
        default:
            return 1;
    }
}

function getImage(folderPath, imgName){
    return (
        <div className="p-2 h-full flex justify-center items-center">
            <img className="w-proj-thumb aspect-square rounded-md" src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

function getDescription(name, description){
    return (
        <div className="shrink lg:grow px-4 pt-3 pb-4">
            <p className="text-3xl pb-4">{name}</p>
            <p>{description}</p>
        </div>
    )
}

function getTags(projectName, tags, techs, windowSize){
    const rows = buildTagRows(tags, techs, getTagColNum(windowSize));

    return (
        <div className="h-full flex justify-center items-center">
            <div className="flex flex-col justify-around">
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
        </div>
    )
}

function getButton(buttonText, buttonUrl) {
    return (
        <div className="flex h-full justify-center items-center">
            <a className="link-btn my-2" href={buttonUrl}>{buttonText}</a>
        </div>
    )
}

function Project(props) {
    const { name, description, imgName, tags, techs, buttonText, buttonUrl } = props.projectData;
    const windowSize = props.windowSize;
    
    return (
        <div className="background-box grid grid-rows-4 grid-cols-6">
            <div className="image-xs image-lg">
                {getImage("./Images/Projects/", imgName)}
            </div>
            <div className="description-xs description-lg">
                {getDescription(name, description)}
            </div>
            <div className="tags-xs tags-lg">
                {getTags(name, tags, techs, windowSize)}
            </div>
            <div className="button-xs button-lg">
                    {getButton(buttonText, buttonUrl)}
            </div>
        </div>
    )
}

export default Project;