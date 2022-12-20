import { useEffect, useRef } from 'react';

import Film from '../../Components/Film/Film';

import favourites from '../../Assets/Data/Films/Favourites.json';

function Films(){
    const label = "Films";

    const filmsRef = useRef(null);

    // TODO: abstract animation into hook
    const toggleAnimation = (target, bool) => target.classList.toggle("animate", bool)

    useEffect(() => {
        const els = filmsRef.current.children;
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
                <div ref={filmsRef} className="w-4/6 grid grid-cols-3 gap-8">
                    {
                        favourites.map((film, index) =>
                        {
                            return (
                                // mb-4 mx-2
                                <div key={film.id} className="fade-in-scroll">
                                    <Film filmData={film} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Films;