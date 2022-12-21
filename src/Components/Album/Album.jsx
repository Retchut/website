function Album(props){
    const { name, imgName } = props.albumData;

    const folderPath = "./Images/Albums/";

    return (
        <div className="background-box overflow-auto">
            <img src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

export default Album;