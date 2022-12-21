function Show(props){
    const { name, imgName } = props.showData;

    const folderPath = "./Images/Shows/";

    return (
        <div className="background-box overflow-auto">
            <img src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

export default Show;