function YoutubeEmbed({ embedID }){
    const width = "250";
    const height = "150";
    return (
        <iframe
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${embedID}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    )
}

export default YoutubeEmbed;