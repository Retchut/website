import { useRef } from 'react';

import Interest from '../../Components/Interest/Interest';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import favourites from '../../Assets/Data/Games/Favourites.json';

function Games(){
    const sectionLabel = "Games";
    const gameLabels = {
        subtitleLabel : "Developed by:",
        videoLabel : "Trailer",
        linkLabel : "See more:"
    }
    const gameImageFolder = "./Images/Games/";
    const imageType = "square";

    const rows = buildRows(favourites, 3);

    const gamesRef = useRef(null);
    useScrollAnimation(gamesRef, 0.2);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{sectionLabel}</p>
                <hr />
            </div>

            <div className="flex flex-col items-center">
                <div ref={gamesRef} className="w-4/6">
                    {
                        // Map rows to containers
                        rows.map((row, index) => {
                            return (
                                <div key={`row-${index}`} className="fade-in-scroll flex gap-8 justify-center">
                                    {
                                        // Map rows to items
                                        row.map((game) => {
                                            const showcaseOnRight = (game.id % 3) !== 0;
                                            return (
                                            <div key={`game-${game.id}`} className="w-1/3 mb-8">
                                                    <Interest data={game.data} imgName={game.imgName} imgFolderPath={gameImageFolder} showcaseLabels={gameLabels} showcaseOnRight={showcaseOnRight} imageType={imageType} />
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

export default Games;