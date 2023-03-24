import { useState, useRef } from 'react';

import FilterDropdown from '../../Components/FilterDropdown/FilterDropdown';
import Project from '../../Components/Project/Project';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import noteworthy from '../../Assets/Data/Projects/Noteworthy.json';
import other from '../../Assets/Data/Projects/Other.json';
import tags from '../../Assets/Data/Projects/Tags.json';
import ProjectRow from '../../Components/ProjectRow/ProjectRow';

function Projects({ windowSize }){
    const sectionLabel = "Projects";
    const sectionSubtitle = "Some projects I have developed:";
    
    const [ filter, setFilter ] = useState("All");

    // const noteworthyProjs = filterArray(noteworthy, filter);
    // const otherProjs = filterArray(other, filter);
    const allProjs = noteworthy.concat(other);
    const projCols = (windowSize === 1) ? 1 : 2;
    const rows = buildRows(allProjs, projCols, filter);

    const showcaseRef = useRef(null);
    useScrollAnimation(showcaseRef, 0.3, [filter]);

    return (
        <div className="flex flex-col">
            <div className="mb-8">
                <div className="w-full mb-4 flex justify-between">
                    <p className="text-4xl">{sectionLabel}</p>
                    <FilterDropdown dropdownText={"Filters"} dropdownItems={tags} filterHandler={setFilter}></FilterDropdown>
                </div>
                <hr />
                <p className="text-xl pt-4 pl-4">{sectionSubtitle}</p>
            </div>

            <div className="flex flex-col items-center">
                <div ref={showcaseRef} className="w-full xl:w-4/6">
                    {
                        // Map rows to containers
                        rows.map((row, index) => <ProjectRow key={`row-${index}`} rowData={row} windowSize={windowSize}/>)
                    }
                    {rows.length === 0 && 
                        <div className="fade-in-scroll col-span-2 flex justify-center">
                            <div className=" background-box text-center">
                                <p className="px-4 pt-3 pb-4 text-3xl">No projects here. Check back later!</p>    
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;