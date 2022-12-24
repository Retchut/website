import InterestShowcase from "../InterestShowcase/InterestShowcase";

function getImage(imgName){
    const folderPath = "./Images/Albums/";
    return <img className="aspect-square min-w-full object-fill" src={folderPath + imgName} alt={imgName} />
}

function getShowcase(data){
    const showcaseLabels = {
        subtitleLabel : "By:",
        videoLabel : "My favourite song(s)",
        linkLabel : "Full album on:"
    }
    
    return <InterestShowcase labels={showcaseLabels} data={data} />
}

function Album({ albumData, showcaseOnRight }){
    const { data, imgName } = albumData;
    const positioning = showcaseOnRight ? "left-full" : "right-full";

    return (
        <div className="flex relative w-full h-full">
            <div className="background-box overflow-auto peer w-full h-full">
                {getImage(imgName)}
            </div>
            <div className={`w-full min-h-max absolute ${positioning} z-10 hidden peer-hover:block hover:block`}>
                {getShowcase(data)}
            </div>
        </div>
    )
}

export default Album;