function Game(props){
    const { name, imgName } = props.gameData;

    const folderPath = "./Images/Games/";

    return (
        <div className="background-box overflow-auto">
            <img src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

export default Game;