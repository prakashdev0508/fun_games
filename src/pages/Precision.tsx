import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Precision = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);
  const [timeLeft, settimeLeft] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * (90 - 15 + 1)) + 15;
    const left = Math.random() * 90;

    return { top, left };
  };

  const startGame = () => {
    if (!gameStatus) {
      setGameStatus(true);
      settimeLeft(15);
      setScore(0);
      setPosition(getRandomPosition());
      setGameOver(false);
    }
  };

  const handleClick = () => {
    if (gameStatus && !gameOver) {
      setScore(score + 1);
      setPosition(getRandomPosition());
    }
  };

  useEffect(() => {
    if (gameStatus && timeLeft > 0) {
      const timer = setInterval(() => {
        settimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameStatus(false);
      setGameOver(true);
    }
  }, [timeLeft, gameStatus]);

  return (
    <>
      <Helmet>
        <title>Precision Game</title>
        <meta
          name="description"
          content="A fun game to test your precision skills"
        />
      </Helmet>
      <div className=" text-center font-bold text-2xl underline">
        Precision Game
      </div>

      <div>
        <div className="flex justify-between mt-10">
          <div className=" font-bold text-xl"> Score : {score} </div>
          {timeLeft > 0 && gameStatus ? (
            <div className=" font-bold text-xl"> Time left : {timeLeft} </div>
          ) : (
            ""
          )}
          <div
            className={`${
              gameStatus ? " cursor-not-allowed" : " cursor-pointer "
            } start-btn px-3`}
            onClick={startGame}
          >
            {gameStatus ? "Playing..." : "Start Game"}
          </div>
        </div>

        <div
          onClick={handleClick}
          style={{
            position: "absolute",
            top: `${position.top}%`,
            left: `${position.left}%`,
            width: "50px",
            height: "50px",
            backgroundImage:
              'url("https://cdn1.vectorstock.com/i/1000x1000/97/45/bulls-eye-icon-vector-21679745.jpg")',
            backgroundSize: "cover",
            cursor: "pointer",
            // transition: "top 0.5s ease, left 0.5s ease", // Add transition for smooth movement
          }}
        ></div>
      </div>
      {gameOver && (
        <div className="flex flex-col justify-center items-center fixed backdrop-filter backdrop-blur-sm top-0 left-0 w-full h-full bg-black/50 z-[2000] pt-5 px-3">
          <div className="text-white text-4xl font-bold">
            Game Over : {score}
          </div>
          <button
            className="mt-5 bg-white text-black px-5 py-2 rounded-lg text-xl font-semibold"
            onClick={startGame}
          >
            Restart Game
          </button>
        </div>
      )}
    </>
  );
};

export default Precision;
