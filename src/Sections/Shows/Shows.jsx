import { useRef } from 'react';

import Interest from '../../Components/Interest/Interest';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import favourites from '../../Assets/Data/Shows/Favourites.json';

function Shows({ windowSize }){
    const sectionLabel = "Shows";
    const sectionSubtitle = "Some of my favourite shows:";
    const showLabels = {
        subtitleLabel : "Director:",
        videoLabel : "Trailer",
        linkLabel : "See more:"
    }
    const showImageFolder = "./Images/Shows/";
    const imageType = "poster";

    const rows = buildRows(favourites, 3);

    const showsRef = useRef(null);
    useScrollAnimation(showsRef, 0.1);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full mb-6">
                <p className="mb-4 text-4xl">{sectionLabel}</p>
                <hr />
                <p className="text-xl pt-4 pl-4">{sectionSubtitle}</p>
            </div>

            <div ref={showsRef} className="w-full xl:w-4/6 flex flex-col items-center">
                {
                    // Map rows to containers
                    rows.map((row, index) => {
                        return (
                            <div key={`row-${index}`} className="w-full fade-in-scroll flex gap-8 justify-center">
                                {
                                    // Map rows to items
                                    row.map((show) => {
                                        const showcaseOnRight = (show.id % 3) !== 0;
                                        return (
                                        <div key={`show-${show.id}`} className="w-1/3 mb-8">
                                            <Interest data={show.data} imgName={show.imgName} imgFolderPath={showImageFolder} showcaseLabels={showLabels} showcaseOnRight={showcaseOnRight} imageType={imageType} />
                                        </div>
                                    )})
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shows;