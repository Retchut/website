import { useState, useRef } from 'react';

import Dropdown from '../../Components/Dropdown/Dropdown';
import Project from '../../Components/Project/Project';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows, filterArray } from '../../Utils/arrayFilters';

import noteworthy from '../../Assets/Data/Projects/Noteworthy.json';
import other from '../../Assets/Data/Projects/Other.json';
import tags from '../../Assets/Data/Projects/Tags.json';

function Projects(){
    const label = "Projects";
    
    const [ filter, setFilter ] = useState("All");

    // const noteworthyProjs = filterArray(noteworthy, filter);
    // const otherProjs = filterArray(other, filter);
    const allProjs = noteworthy.concat(other);
    const rows = buildRows(allProjs, 2, filter);

    const showcaseRef = useRef(null);
    useScrollAnimation(showcaseRef, 0.7, [filter]);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="mb-8">
                <div className="w-full mb-4 flex justify-between">
                    <p className="text-4xl">{label}</p>
                    <Dropdown dropdownText={"Filters"} dropdownItems={tags} filterHandler={setFilter}></Dropdown>
                </div>
                <hr />
            </div>

            <div className="flex flex-col items-center">
                <div ref={showcaseRef} className="w-4/6">
                    {
                        // Map rows to containers
                        rows.map((row, index) => {
                            return (
                                <div key={`row-${index}`} className="fade-in-scroll flex gap-8 justify-center">
                                    {
                                        // Map rows to items
                                        row.map((project) => {
                                            return (
                                            <div key={`project-${project.id}`} className="w-1/2 mb-8">
                                                <Project projectData={project} />
                                            </div>
                                        )})
                                    }
                                </div>
                            )
                        })
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