import InterestShowcase from '../InterestShowcase/InterestShowcase.jsx';

function getImage(imgName){
    const folderPath = "./Images/Games/";
    return <img className="aspect-square min-w-full object-fill" src={folderPath + imgName} alt={imgName} />
}

function getShowcase(data){
    const showcaseLabels = {
        subtitleLabel : "Developed by:",
        videoLabel : "Trailer",
        linkLabel : "See more:"
    }
    
    return <InterestShowcase labels={showcaseLabels} data={data} />
}

function Game({ gameData, showcaseOnRight }){
    const { data, imgName } = gameData;
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

export default Game;