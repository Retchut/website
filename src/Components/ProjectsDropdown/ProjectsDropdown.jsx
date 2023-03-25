import { useState, useRef } from "react";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";

import ProjectRow from "../ProjectRow/ProjectRow";

import useScrollAnimation from '../../Hooks/useScrollAnimation';

function ProjectsDropdown(props){
    const { menuRows, windowSize, filter } = props;

    const [ dropdownOpen, setDropdownOpen ] = useState(false);

    const labelRef = useRef(null);
    useScrollAnimation(labelRef, 1, [filter]);

    const itemsRef = useRef(null);
    useScrollAnimation(itemsRef, 0.3, [filter, dropdownOpen]);

    return (
        <div className="flex flex-col">
            <div ref={labelRef} className="pt-4 pb-8">
                <button className="fade-in-scroll w-full text-2xl" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <div className="pb-1 flex justify-between">
                        <p>Other projects</p>
                        { dropdownOpen ? <RxDoubleArrowUp /> : <RxDoubleArrowDown />}
                    </div>
                </button>
                <hr className="fade-in-scroll" />
            </div>
            <div ref={itemsRef}>
                { dropdownOpen &&
                    // Map rows to containers
                    menuRows.map((row, index) => <ProjectRow key={`row-${index}`} rowData={row} windowSize={windowSize} fadeIn={true}/>)
                }
            </div>
            { dropdownOpen && menuRows.length === 0 && 
                <div className="col-span-2 flex justify-center">
                    <div className=" background-box text-center">
                        <p className="px-4 pt-3 pb-4 text-3xl">No projects here. Check back later!</p>    
                    </div>
                </div>
            }
        </div>
    );
}

export default ProjectsDropdown;