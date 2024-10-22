import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <div className=" font-bold text-center text-2xl mt-5 underline">
            All Fun Games
        </div>
        <div className=" mx-5 mt-10">

        <Link to={"/precision-game"} className="start-btn px-3">Precision Game</Link>
        </div>
    </div>
  )
}

export default Home