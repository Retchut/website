import { buildTagRows } from '../../Utils/arrayFilters.js';
import { getImageFileNames } from '../../Utils/textUtils.js';

import './Project.css';

function getTagColNum(windowSize){
    switch(windowSize){
        case 5: // >2xl
        case 4: // 2xl (<1536px)
        case 3: // xl (<1280px)
            return 3;
        case 2: // lg (<1024px)
            return 2;
        case 1: // md (<768px), sm (<640px)
            return 1;
        default:
            return 1;
    }
}

function getImage(folderPath, imgName){
    const [lowResImg, hiResImg] = getImageFileNames(folderPath, imgName);
    
    return (
        <div className="p-2 h-full flex justify-center items-center">
            <img className="max-w-proj-img-xs md:max-w-full w-full aspect-square rounded-md" src={lowResImg} src-hi-res={hiResImg} alt={imgName} />
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
                        <div key={`row-${index}`} className="my-2 pb-2 flex justify-center items-center">
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
        <div className="flex h-full justify-start sm:justify-center items-center">
            <a className="link-btn my-2" href={buttonUrl}>{buttonText}</a>
        </div>
    )
}

function Project(props) {
    const { name, description, imgName, tags, techs, buttonText, buttonUrl } = props.projectData;
    const windowSize = props.windowSize;
    
    return (
        <div className="background-box flex flex-col">
            <div className="md:flex">
                <div className="w-full md:w-proj-img-md">
                    {getImage("./Images/Projects/", imgName)}
                </div>
                <div className="w-full md:w-proj-desc-md">
                    {getDescription(name, description)}
                </div>
            </div>
            <div className="flex flex-row md:flex-row-reverse">
                <div className="w-proj-tags-xs md:w-proj-tags-md">
                    {getTags(name, tags, techs, windowSize)}
                </div>
                <div className="w-proj-btn-xs md:w-proj-btn-md">
                    {getButton(buttonText, buttonUrl)}
                </div>
            </div>
        </div>
    )
}

export default Project;