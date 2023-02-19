import { useRef } from 'react';

import ParagraphBox from '../../Components/ParagraphBox/ParagraphBox';

import useScrollAnimation from '../../Hooks/useScrollAnimation';

import './Home.css';

import texts from '../../Assets/Data/Home/Texts.json';
import myPortrait from '../../Assets/Images/Home/me.jpg';

function Home(){
    const homeRef = useRef(null);
    useScrollAnimation(homeRef, 1);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="w-full mb-8">
                <p className="mb-4 text-4xl">{texts.label}</p>
                <hr />
            </div>
            <div ref={homeRef} className="w-4/6 h-5/6 grid grid-cols-6 grid-rows-5">
                <div className="fade-in-scroll z-10 background-box p-4 overflow-auto xl:overflow-hidden textbox-xs textbox-lg textbox-xl textbox-2xl">
                    <div className="grid grid-rows-3 grid-cols-5">
                        <div className="row-start-1 col-start-1 row-span-1 col-span-5">
                            <ParagraphBox paragraphs={texts.row1} keyText={"welcome1"} />
                        </div>
                        <div className="row-start-2 col-start-1 row-span-2 col-span-4">
                            <ParagraphBox paragraphs={texts.row2} keyText={"welcome2"} />
                        </div>
                    </div>
                </div>
                <div className="fade-in-scroll z-10 py-5 lg:py-0 flex justify-center lg:block image-xs image-lg image-xl image-2xl">
                    <img src={myPortrait} alt="Me" className="img-fluid background-box"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;