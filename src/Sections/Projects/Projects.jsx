import { useState, useEffect, useRef } from 'react';

import Dropdown from '../../Components/Dropdown/Dropdown';
import Project from '../../Components/Project/Project';

import { filterArray } from '../../Utils/arrayFilters';

import noteworthy from '../../Assets/Data/Projects/Noteworthy.json';
import other from '../../Assets/Data/Projects/Other.json';
import tags from '../../Assets/Data/Projects/Tags.json';

function Projects(){
    const [ filter, setFilter ] = useState("All");

    const noteworthyProjs = filterArray(noteworthy, filter);
    const otherProjs = filterArray(other, filter);

    const showcaseRef = useRef(null);

    // TODO: abstract animation into hook
    const toggleAnimation = (target, bool) => target.classList.toggle("animate", bool)

    useEffect(() => {
        const els = showcaseRef.current.children;
        console.log(els)
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            toggleAnimation(entry.target, entry.isIntersecting)
          })
        },
        {
            threshold: 0.7
        })
        
        // observe 
        for(const el of els)
          observer.observe(el)
      }, [filter]);
    

    return (
        <div className="min-h-screen flex flex-col">
            {/* mx-3 pb-3 */}
            <div className="w-full mb-4 flex justify-end">
                <Dropdown dropdownText={"Filters"} dropdownItems={tags} filterHandler={setFilter}></Dropdown>
            </div>

            <div className="flex flex-col items-center">
                <div ref={showcaseRef} className="w-4/6 grid grid-cols-2 gap-8">
                    {
                        noteworthyProjs.map((project, index) =>
                        {
                            return (
                                // mb-4 mx-2
                                <div key={project.id} className="fade-in-scroll min-h-full">
                                    <Project projectData={project} />
                                </div>
                            )
                        })
                    }
                    {/* TODO: remove this into another section later */}
                    {
                        otherProjs.map((project, index) =>
                        {
                            return (
                                // mb-4 mx-2
                                <div key={project.id} className="fade-in-scroll min-h-full">
                                    <Project projectData={project} />
                                </div>
                            )
                        })
                    }
                    {noteworthyProjs.length === 0 && otherProjs.length === 0 && 
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