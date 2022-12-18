import { useState } from 'react';

import Dropdown from '../../Components/Dropdown/Dropdown';
import Project from '../../Components/Project/Project';

import { filterArray } from '../../Utils/arrayFilters';

import noteworthy from '../../Assets/Data/Projects/Noteworthy.json';
import other from '../../Assets/Data/Projects/Other.json';
import tags from '../../Assets/Data/Projects/Tags.json';

function Projects(){
    const [ filter, setFilter ] = useState("All");

    const colNum = 2;
    const noteworthyProjs = filterArray(noteworthy, filter);
    const otherProjs = filterArray(other, filter);

    return (
        <div className="min-h-screen flex flex-col">
            {/* mx-3 pb-3 */}
            <div className="w-full mb-4 flex justify-end">
                <Dropdown dropdownText={"Filters"} dropdownItems={tags} filterHandler={setFilter}></Dropdown>
            </div>

            <div className="flex justify-center">
                <div className="w-4/6 grid grid-cols-2">
                    {
                        noteworthyProjs.map((project, index) =>
                        {
                            return (
                                <div key={project.id} className="min-h-full mb-4 mx-2">
                                    <Project projectData={project} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;