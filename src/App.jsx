import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const clock = () => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  };
  useEffect(() => {
    clock();
    return function cleanup() {
      clearInterval(clock);
    };
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 via-blue-600 to-yellow-500 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md text-white border border-white/20">
        <h1 className="text-3xl md:text-4xl font-bold font-mono text-center mb-6 tracking-wider">
          Digital Clock
        </h1>

        <div className="text-center mb-4">
          <h2 className="text-lg md:text-xl font-medium mb-1">Today's Date:</h2>
          <p className="text-base md:text-lg font-light font-mono tracking-wide">
            {date.toLocaleDateString()}
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-5xl md:text-6xl font-mono font-semibold tracking-widest drop-shadow-lg">
            {date.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
