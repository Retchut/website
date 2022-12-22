import { useRef } from 'react';

import Game from '../../Components/Game/Game';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import favourites from '../../Assets/Data/Games/Favourites.json';

function Games(){
    const label = "Games";

    const rows = buildRows(favourites, 3);

    const gamesRef = useRef(null);
    useScrollAnimation(gamesRef, 0.7);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{label}</p>
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
                                            return (
                                            <div key={`game-${game.id}`} className="w-1/3 mb-8">
                                                    <Game gameData={game} />
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