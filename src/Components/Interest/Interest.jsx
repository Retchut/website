import InterestShowcase from '../InterestShowcase/InterestShowcase.jsx';

import { getImageFileNames } from '../../Utils/textUtils.js';

function Interest({ data, imgName, imgFolderPath, showcaseLabels, showcaseOnRight, imageType }){
    const positioning = showcaseOnRight ? "left-full" : "right-full";

    if(imageType !== "poster" && imageType !== "square"){
        console.log("Invalid aspect ratio provided: " + imageType + ". Supported image types are \"poster\" or \"square\".");
        return <></>
    }

    // const [lowResImg, hiResImg] = getImageFileNames(imgFolderPath, imgName);
    const lowResImg = imgFolderPath + 'test.jpg';
    const hiResImg = imgFolderPath + imgName;
    
    return (
        <div className="flex relative">
            <div className="w-full h-full background-box overflow-auto peer">
                <img className={`aspect-${imageType} min-w-full object-fill`} src={lowResImg} src-hi-res={hiResImg} alt={imgName} />
            </div>
            <div className={`min-w-content w-content w-1/3vw lg:w-full max-w-3/5vw min-h-max absolute ${positioning} z-10 hidden peer-hover:block hover:block`}>
                <InterestShowcase labels={showcaseLabels} data={data} />
            </div>
        </div>
    )

}

export default Interest;