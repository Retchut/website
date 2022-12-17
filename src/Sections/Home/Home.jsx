import homeData from '../../Assets/Data/HomeData.json';
import myPortrait from '../../Assets/Images/Home/me.jpg';

function Home(){
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-4/6 h-5/6 grid grid-cols-6 grid-rows-5">
                <div className="row-start-1 col-start-1 row-span-3 col-span-5 background-box p-4 overflow-auto">
                    <div className="grid grid-rows-3 grid-cols-5">
                        <div className="row-start-1 col-start-1 row-span-1 col-span-5">
                            {homeData.row1.map((paragraph, index) => {
                                return (<p key={"welcome-" + index} className="py-3">{paragraph}</p>)
                            })}
                        </div>
                        <div className="row-start-2 col-start-1 row-span-2 col-span-4">
                            {homeData.row2.map((paragraph, index) => {
                                return (<p key={"welcome-" + index} className="py-3">{paragraph}</p>)
                            })}
                        </div>
                    </div>
                </div>
                <div className="row-start-2 col-start-5 row-span-3 col-span-2">
                    <img src={myPortrait} alt="Me" className="img-fluid background-box"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;