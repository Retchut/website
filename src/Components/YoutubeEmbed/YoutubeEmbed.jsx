function YoutubeEmbed({ embedID }){    
    return (
        <iframe
            className="w-full aspect-youtube-embed"
            src={`https://www.youtube.com/embed/${embedID}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}

export default YoutubeEmbed;