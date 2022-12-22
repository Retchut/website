import { useRef } from 'react';

import Show from '../../Components/Show/Show';

import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { buildRows } from '../../Utils/arrayFilters';

import favourites from '../../Assets/Data/Shows/Favourites.json';

function Shows(){
    const label = "Shows";

    const rows = buildRows(favourites, 3);

    const showsRef = useRef(null);
    useScrollAnimation(showsRef, 0.1);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{label}</p>
                <hr />
            </div>

            <div className="flex flex-col items-center">
                <div ref={showsRef} className="w-4/6">
                    {
                        // Map rows to containers
                        rows.map((row, index) => {
                            return (
                                <div key={`row-${index}`} className="fade-in-scroll flex gap-8 justify-center">
                                    {
                                        // Map rows to items
                                        row.map((show) => {
                                            return (
                                            <div key={`show-${show.id}`} className="w-1/3 mb-8">
                                                    <Show showData={show} />
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

export default Shows;