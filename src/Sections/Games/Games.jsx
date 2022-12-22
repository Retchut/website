import { useRef } from 'react';

import Game from '../../Components/Game/Game';

import useScrollAnimation from '../../Hooks/useScrollAnimation';

import favourites from '../../Assets/Data/Games/Favourites.json';

function Games(){
    const label = "Games";

    const gamesRef = useRef(null);
    useScrollAnimation(gamesRef, 0.7, []);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{label}</p>
                <hr />
            </div>

            <div className="flex flex-col items-center">
                <div ref={gamesRef} className="w-4/6 grid grid-cols-3 gap-8">
                    {
                        favourites.map((game, index) =>
                        {
                            return (
                                // mb-4 mx-2
                                <div key={game.id} className="fade-in-scroll">
                                    <Game gameData={game} />
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