import { useRef } from 'react';

import Film from '../../Components/Film/Film';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import favourites from '../../Assets/Data/Films/Favourites.json';

function Films(){
    const label = "Films";

    const rows = buildRows(favourites, 3);

    const filmsRef = useRef(null);
    useScrollAnimation(filmsRef, 0.1);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{label}</p>
                <hr />
            </div>

            <div className="flex flex-col items-center">
                <div ref={filmsRef} className="w-4/6">
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
                                                    <Film filmData={film} showcaseOnRight={showcaseOnRight} />
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

export default Films;