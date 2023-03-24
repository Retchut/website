function YoutubeEmbed({ embedID }){    
    return (
        <iframe
            className="w-full aspect-youtube-embed"
            src={`https://www.youtube.com/embed/${embedID}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    )
}

export default YoutubeEmbed;