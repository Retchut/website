import InterestShowcase from '../InterestShowcase/InterestShowcase.jsx';

function Interest({ data, imgName, imgFolderPath, showcaseLabels, showcaseOnRight, imageType }){
    const positioning = showcaseOnRight ? "left-full" : "right-full";

    if(imageType !== "poster" && imageType !== "square"){
        console.log("Invalid aspect ratio provided: " + imageType + ". Supported image types are \"poster\" or \"square\".");
        return <></>
    }

    return (
        <div className="flex relative">
            <div className="w-full h-full background-box overflow-auto peer">
                <img className={`aspect-${imageType} min-w-full object-fill`} src={imgFolderPath + imgName} alt={imgName} />
            </div>
            <div className={`w-full min-h-max absolute ${positioning} z-10 hidden peer-hover:block hover:block`}>
                <InterestShowcase labels={showcaseLabels} data={data} />
            </div>
        </div>
    )

}

export default Interest;