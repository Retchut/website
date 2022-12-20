import { useEffect, useRef } from 'react';

import Game from '../../Components/Game/Game';

import favourites from '../../Assets/Data/Games/Favourites.json';

function Games(){
    const label = "Games";

    const gamesRef = useRef(null);

    // TODO: abstract animation into hook
    const toggleAnimation = (target, bool) => target.classList.toggle("animate", bool)

    useEffect(() => {
        const els = gamesRef.current.children;
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
                <div ref={gamesRef} className="w-4/6 grid grid-cols-3 gap-8">
                    {
                        favourites.map((game, index) =>
                        {
                            return (
                                // mb-4 mx-2
                                <div key={game.id} className="fade-in-scroll min-h-full">
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