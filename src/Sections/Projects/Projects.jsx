import { useState } from 'react';

import Dropdown from '../../Components/Dropdown/Dropdown';

import { filterArray } from '../../Utils/arrayFilters';

import noteworthy from '../../Assets/Data/Projects/Noteworthy.json';
import other from '../../Assets/Data/Projects/Other.json';
import tags from '../../Assets/Data/Projects/Tags.json';

function Projects(){
    const [ filter, setFilter ] = useState("All");

    const colNum = 2;
    const noteworthyRows = filterArray(noteworthy, filter);
    const otherRows = filterArray(other, filter);

    return (
        <>
            {/* mx-3 pb-3 */}
            <div className="flex justify-end">
                <Dropdown dropdownText={"Filters"} dropdownItems={tags} filterHandler={setFilter}></Dropdown>
            </div>
        </>
    )
}

export default Projects;