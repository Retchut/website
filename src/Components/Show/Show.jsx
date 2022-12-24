import InterestShowcase from '../InterestShowcase/InterestShowcase.jsx';

function getImage(imgName){
    const folderPath = "./Images/Shows/";
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

function Show({ showData, showcaseOnRight }){
    const { data, imgName } = showData;
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

export default Show;