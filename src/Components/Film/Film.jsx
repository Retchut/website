function Film(props){
    const { name, imgName } = props.filmData;

    const folderPath = "./Images/Films/";

    return (
        <div className="background-box overflow-auto">
            <img className="aspect-poster w-full" src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

export default Film;