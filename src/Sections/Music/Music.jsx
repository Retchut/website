import { useRef } from 'react';

import Album from '../../Components/Album/Album';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import favourites from '../../Assets/Data/Music/Favourites.json';

function Music(){
    const sectionLabel = "Music";

    const rows = buildRows(favourites, 3);

    const musicRef = useRef(null);
    useScrollAnimation(musicRef, 0.2);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{sectionLabel}</p>
                <hr />
            </div>

            <div className="flex flex-col items-center">
                <div ref={musicRef} className="w-4/6">
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
                                                    <Album albumData={album} showcaseOnRight={showcaseOnRight} />
                                            </div>
                                        )})
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Music;