import { useEffect, useRef } from 'react';

import Album from '../../Components/Album/Album';

import useScrollAnimation from '../../Hooks/useScrollAnimation';

import favourites from '../../Assets/Data/Music/Favourites.json';

function Music(){
    const label = "Music";

    const musicRef = useRef(null);
    useScrollAnimation(musicRef, 0.7, []);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{label}</p>
                <hr />
            </div>

            <div className="flex flex-col items-center">
                <div ref={musicRef} className="w-4/6 grid grid-cols-3 gap-8">
                    {
                        favourites.map((album, index) =>
                        {
                            return (
                                // mb-4 mx-2
                                <div key={album.id} className="fade-in-scroll">
                                    <Album albumData={album} />
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