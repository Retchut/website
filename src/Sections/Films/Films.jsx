import { useRef } from 'react';

import Interest from '../../Components/Interest/Interest';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import favourites from '../../Assets/Data/Films/Favourites.json';

function Films({ windowSize }){
    const sectionLabel = "Films";
    const sectionSubtitle = "Some of my favourite films:";
    const filmLabels = {
        subtitleLabel : "Director:",
        videoLabel : "Trailer",
        linkLabel : "See more:"
    }
    const filmImageFolder = "./Images/Films/";
    const imageType = "poster";

    const rows = buildRows(favourites, 3);

    const filmsRef = useRef(null);
    useScrollAnimation(filmsRef, 0.1);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full mb-6">
                <p className="mb-4 text-4xl">{sectionLabel}</p>
                <hr />
                <p className="text-xl pt-4 pl-4">{sectionSubtitle}</p>
            </div>

            <div ref={filmsRef} className="w-4/6 flex flex-col items-center">
                {
                    // Map rows to containers
                    rows.map((row, index) => {
                        return (
                            <div key={`row-${index}`} className="fade-in-scroll flex gap-8 justify-center">
                                {
                                    // Map rows to items
                                    row.map((film) => {
                                        const showcaseOnRight = (film.id % 3) !== 0;
                                        return (
                                        <div key={`film-${film.id}`} className="w-1/3 mb-8">
                                            <Interest data={film.data} imgName={film.imgName} imgFolderPath={filmImageFolder} showcaseLabels={filmLabels} showcaseOnRight={showcaseOnRight} imageType={imageType} />
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

export default Films;