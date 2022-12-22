function Game(props){
    const { name, imgName } = props.gameData;

    const folderPath = "./Images/Games/";

    return (
        <div className="background-box overflow-auto">
            <img className="aspect-square w-full" src={folderPath + imgName} alt={imgName} />
        </div>
    )
}

export default Game;