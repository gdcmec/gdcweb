import React, { useState, useRef } from 'react';
// import bird from './birdy-sprite-sheets-gif-animation.gif';

function Game() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef(null);

  function startGame() {
    setScore(0);
    setTime(30);
    setPlaying(true);
    timerRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  }

  function stopGame() {
    clearInterval(timerRef.current);
    setPlaying(false);
  }

  function handleClick() {
    if (!playing) {
      startGame();
    }
    setScore((score) => score + 1);
    const button = document.getElementById('button');
    button.style.top = Math.floor(Math.random() * 300 + 100) + 'px';
    button.style.left = Math.floor(Math.random() * 1000 + 200) + 'px';
  }

  function handleReset() {
    stopGame();
    setScore(0);
    setTime(30);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed">
      <h1 className="text-4xl font-bold text-white mb-4">{playing ? `Time Left: ${time}` : 'Click me to start'}</h1>
      <button
    //   style={{ top: '200px', left: '500px' }
        id="button"
        className="block w-32 h-32 bg-brown border-none outline-none hover:cursor-crosshair hover:bg-yellow-500 hover:shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={handleClick}
      >
        <img src="" alt="bird" className="w-full h-full object-contain" />
      </button>
      <h2 className="text-2xl font-bold text-white mt-8">Score: {score}</h2>
      {playing && (
        <button
          className="mt-8 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Game;
