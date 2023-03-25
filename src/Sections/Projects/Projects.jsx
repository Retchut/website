import { useRef, useState } from 'react';

import FilterDropdown from '../../Components/FilterDropdown/FilterDropdown';
import ProjectsDropdown from '../../Components/ProjectsDropdown/ProjectsDropdown';
import ProjectRow from '../../Components/ProjectRow/ProjectRow';

import { buildRows, filterArray } from '../../Utils/arrayFilters';

import noteworthy from '../../Assets/Data/Projects/Noteworthy.json';
import other from '../../Assets/Data/Projects/Other.json';
import tags from '../../Assets/Data/Projects/Tags.json';
import useScrollAnimation from '../../Hooks/useScrollAnimation';

function Projects({ windowSize }){
    const sectionLabel = "Projects";
    const sectionSubtitle = "Some projects I have developed:";
    
    const [ filter, setFilter ] = useState("All");

    const mainProjs = filterArray(noteworthy, filter);
    const otherProjs = filterArray(other, filter);
    const projCols = (windowSize === 1) ? 1 : 2;
    const mainRows = buildRows(mainProjs, projCols, filter);
    const otherRows = buildRows(otherProjs, projCols, filter);

    const mainProjRef = useRef(null);
    useScrollAnimation(mainProjRef, 0.3, [filter, projCols]);

    // TODO: use scroll animation with dropdown (maybe inside div with ref?)

    return (
        <div className="flex flex-col">
            <div className="mb-6">
                <div className="w-full mb-4 flex justify-between">
                    <p className="text-4xl">{sectionLabel}</p>
                    <FilterDropdown dropdownText={"Filters"} dropdownItems={tags} filterHandler={setFilter} />
                </div>
                <hr />
                <p className="text-xl pt-4 pl-4">{sectionSubtitle}</p>
            </div>

            <div className="flex flex-col items-center">
                {/* main projects */}
                <div ref={mainProjRef} className="w-full xl:w-4/6">
                    {
                        mainRows.map((row, index) => <ProjectRow key={`row-${index}`} rowData={row} windowSize={windowSize} fadeIn={true} />)
                    }
                    {mainRows.length === 0 && 
                        <div className="fade-in-scroll col-span-2 flex justify-center">
                            <div className=" background-box text-center">
                                <p className="px-4 pt-3 pb-4 text-3xl">No projects here for this category. Check out the "Other projects" tab, or come back later!</p>    
                            </div>
                        </div>
                    }
                </div>
                {/* less important projects */}
                <div className="w-full xl:w-4/6">
                    <ProjectsDropdown menuRows={otherRows} windowSize={windowSize} filter={filter} />
                </div>
            </div>
        </div>
    )
}

export default Projects;