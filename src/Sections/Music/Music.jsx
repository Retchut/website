import { useRef } from 'react';

import Interest from '../../Components/Interest/Interest';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import favourites from '../../Assets/Data/Music/Favourites.json';

function Music({ windowSize }){
    const sectionLabel = "Music";
    const sectionSubtitle = "Some of my favourite music albums:";
    const albumLabels = {
        subtitleLabel : "By:",
        videoLabel : "My favourite song(s)",
        linkLabel : "Full album on:"
    }
    const albumImageFolder = "./Images/Albums/";
    const imageType = "square";

    const rows = buildRows(favourites, 3);

    const musicRef = useRef(null);
    useScrollAnimation(musicRef, 0.2);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full mb-6">
                <p className="mb-4 text-4xl">{sectionLabel}</p>
                <hr />
                <p className="text-xl pt-4 pl-4">{sectionSubtitle}</p>
            </div>

            <div ref={musicRef} className="w-full xl:w-4/6 flex flex-col items-center">
                {
                    // Map rows to containers
                    rows.map((row, index) => {
                        return (
                            <div key={`row-${index}`} className="fade-in-scroll flex gap-8 justify-center">
                                {
                                    // Map rows to items
                                    row.map((album) => {
                                        const showcaseOnRight = (album.id % 3) !== 0;
                                        return (
                                        <div key={`album-${album.id}`} className="w-1/3 mb-8">
                                            <Interest data={album.data} imgName={album.imgName} imgFolderPath={albumImageFolder} showcaseLabels={albumLabels} showcaseOnRight={showcaseOnRight} imageType={imageType} />
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

export default Music;