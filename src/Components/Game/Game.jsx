import { capitalize } from '../../Utils/textUtils.js';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed.jsx';

function getImage(imgName){
    const folderPath = "./Images/Games/";
    return <img className="aspect-square w-full" src={folderPath + imgName} alt={imgName} />
}

function getShowcase({ name, developer, embedID, links }){
    const linkKeys = Object.keys(links);
    return (
        <div className="background-box mx-4 p-4 h-full flex flex-col justify-center items-center">
            <div className="my-3">
                <p className="mb-2 text-4xl">{name}</p>
                <p className="my-2 text-xl">Developed by: {developer}</p>
            </div>
            <div className="w-full flex justify-center pb-1">
                <YoutubeEmbed embedID={embedID} />
            </div>
            <div className="w-full grow flex items-end">
                <div className="w-full">
                    <p className="pl-4 text-xl">See more:</p>
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

function Game(props){
    const { data, imgName } = props.gameData;

    return (
        <div className="flex relative">
            <div className="background-box overflow-auto peer">
                {getImage(imgName)}
            </div>
            <div className="w-full h-full absolute left-full z-10 hidden peer-hover:block hover:block">
                {getShowcase(data)}
            </div>
        </div>
    )
}

export default Game;