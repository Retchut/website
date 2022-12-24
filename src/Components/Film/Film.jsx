import InterestShowcase from "../InterestShowcase/InterestShowcase";

function getImage(imgName){
    const folderPath = "./Images/Films/";
    return <img className="aspect-poster min-w-full object-fill" src={folderPath + imgName} alt={imgName} />
}

function getShowcase(data){
    const showcaseLabels = {
        subtitleLabel : "Director:",
        videoLabel : "Trailer",
        linkLabel : "See more:"
    }
    
    return <InterestShowcase labels={showcaseLabels} data={data} />
}

function Film({ filmData, showcaseOnRight }){
    const { data, imgName } = filmData;
    const positioning = showcaseOnRight ? "left-full" : "right-full";

    return (
        <div className="flex relative">
            <div className="background-box overflow-auto peer">
                {getImage(imgName)}
            </div>
            <div className={`w-full min-h-max absolute ${positioning} z-10 hidden peer-hover:block hover:block`}>
                {getShowcase(data)}
            </div>
        </div>
    )
}

export default Film;