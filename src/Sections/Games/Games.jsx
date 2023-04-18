import { useRef } from 'react';

import Interest from '../../Components/Interest/Interest';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import playing from '../../Assets/Data/Games/Playing.json';
import favourites from '../../Assets/Data/Games/Favourites.json';

function Games({ windowSize }){
    const sectionLabel = "Games";
    const sectionSubtitle = "Some of my favourite games";
    const playingSubtitle = "What I am currently (re)playing:"
    const gameLabels = {
        subtitleLabel : "Developed by:",
        videoLabel : "Trailer",
        linkLabel : "See more:"
    }
    const gameImageFolder = "./Images/Games/";
    const imageType = "square";

    const playingColNum = 2;
    const favouriteColNum = 3;
    const favouriteRows = buildRows(favourites, favouriteColNum);
    const gamesRef = useRef(null);
    useScrollAnimation(gamesRef, 0.2);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full mb-6">
                <p className="mb-4 text-4xl">{sectionLabel}</p>
                <hr />
                <p className="text-xl pt-4 pl-4">{sectionSubtitle}</p>
            </div>
            
            <div ref={gamesRef} className="w-full xl:w-4/6 flex flex-col items-center">
                {/* Favourites section */}
                {
                    // Map favourite rows to containers
                    favouriteRows.map((row, index) => {
                        return (
                            <div key={`row-${index}`} className="w-full fade-in-scroll flex gap-8 justify-center">
                                {
                                    row.map((game) => {
                                        const showcaseOnRight = (game.id % favouriteColNum) !== 0;
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

                {/* Playing section */}
                <p className="fade-in-scroll text-2xl pl-4 text-center mb-4">{playingSubtitle}</p>
                <div className="w-full fade-in-scroll flex gap-8 justify-center">
                    {
                        playing.map((game, index) => {
                            const showcaseOnRight = (game.id % playingColNum) !== 0;

                            return (
                                <div key={`playing-${index}`} className="w-1/3 mb-8">
                                    <Interest data={game.data} imgName={game.imgName} imgFolderPath={gameImageFolder} showcaseLabels={gameLabels} showcaseOnRight={showcaseOnRight} imageType={imageType} />
                                </div>
                            )})
                    }
                </div>
            </div>
        </div>
    )
}

export default Games;