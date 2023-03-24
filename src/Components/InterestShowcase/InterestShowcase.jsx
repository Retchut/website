import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed.jsx';

import { capitalize } from '../../Utils/textUtils.js';

function InterestShowcase({ labels, data }){
    const { title, subtitle, video, links } = data;
    const { subtitleLabel, videoLabel, linkLabel } = labels;

    const videoKeys = Object.keys(video);
    const showVideoLabel = true && (videoKeys.length !== 0);
    
    const linkKeys = Object.keys(links);

    return (
        <div className="background-box mx-4 px-4 h-full flex flex-col justify-center items-center">
            <div className="my-3 text-center">
                <p className="mb-2 text-4xl">{title}</p>
                <p className="my-1 text-xl">{subtitleLabel} {subtitle}</p>
            </div>
            {showVideoLabel && <p className="text-xl pb-1">{videoLabel}</p>}
            <div className="w-full flex flex-col items-center pb-2">
                {
                    videoKeys.map((type, index) => {
                        return (
                            <div key={`video-${index}`} className="pb-1">
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
                                <a key={`url-${index}`} className="m-2 link-btn" href={links[platform]}>{capitalize(platform)}</a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterestShowcase;