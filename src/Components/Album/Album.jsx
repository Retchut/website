import { capitalize } from '../../Utils/textUtils.js';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed.jsx';

function getImage(imgName){
    const folderPath = "./Images/Albums/";
    return <img className="aspect-square min-w-full object-fill" src={folderPath + imgName} alt={imgName} />
}

function getShowcase({ name, artist, video, links }){
    const subtitleLabel = "By: ";

    const videoKeys = Object.keys(video);
    const showVideoLabel = true;
    const videoLabel = "My favourite song" + ((videoKeys.length > 1) ? "s" : "") + ":";

    const linkKeys = Object.keys(links);
    const linkLabel = "Full album on:";

    return (
        <div className="background-box mx-4 px-4 h-full flex flex-col justify-center items-center">
            <div className="my-3 text-center">
                <p className="mb-2 text-4xl">{name}</p>
                <p className="my-1 text-xl">{subtitleLabel} {artist}</p>
            </div>
            {showVideoLabel && <p className="text-xl pb-1">{videoLabel}</p>}
            <div className="w-full flex flex-col items-center pb-2">
                {
                    videoKeys.map((type, index) => {
                        return (
                            <div className="pb-1">
                                <YoutubeEmbed key={index} embedID={video[type]} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-full grow flex items-end pb-1">
                <div className="w-full">
                    <p className="pl-4 text-xl">{linkLabel}</p>
                    <div className="flex justify-center">
                        {linkKeys.map((platform, index) => {
                            return (
                                <a className="m-2 link-btn" href={links[platform]}>{capitalize(platform)}</a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
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