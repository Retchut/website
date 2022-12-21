import { useEffect, useRef } from 'react';

import Show from '../../Components/Show/Show';

import favourites from '../../Assets/Data/Shows/Favourites.json';

function Shows(){
    const label = "Shows";

    const showsRef = useRef(null);

    // TODO: abstract animation into hook
    const toggleAnimation = (target, bool) => target.classList.toggle("animate", bool)

    useEffect(() => {
        const els = showsRef.current.children;
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
      }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{label}</p>
                <hr />
            </div>

            <div className="flex flex-col items-center">
                <div ref={showsRef} className="w-4/6 grid grid-cols-3 gap-8">
                    {
                        favourites.map((show, index) =>
                        {
                            return (
                                // mb-4 mx-2
                                <div key={show.id} className="fade-in-scroll">
                                    <Show showData={show} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Shows;