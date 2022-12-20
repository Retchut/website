function Film(props){
    const { name, imgName } = props.filmData;

    const folderPath = "./Images/Films/";

    return (
        <div className="background-box overflow-auto">
            <img src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

export default Film;