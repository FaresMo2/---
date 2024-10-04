import { useEffect, useState } from "react";
import { FaYoutube, FaFacebook } from "react-icons/fa";

function App() {
  const targetDate = "2020-11-27T22:40:00";
  return (
    <div className="h-screen w-full relative flex flex-col justify-center items-center overflow-hidden">
      <video
        loop
        autoPlay
        muted
        className="w-full h-full object-cover lg:object-fill absolute"
      >
        <source src="/goal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <img
        className="md:hidden absolute right-10 top-10 z-20 w-10 "
        src="/ahly-logo.png"
        alt="ahly-logo"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-[#212529] opacity-75"></div>

      {/* Content on top of the video */}
      <CounterUpTimer targetDate={targetDate} />

      <div className="relative z-30 mt-20 flex flex-col md:flex-row items-center gap-10">
        <a
          href="https://www.facebook.com/alahly"
          target="_blank"
          rel="noreferrer"
          className="flex font-semibold items-center gap-3 bg-[#4267B2] text-white py-2 px-4 rounded-full outline-none border-none"
        >
          <FaFacebook size={20} /> Al Ahly SC Page
        </a>
        <a
          href="https://www.youtube.com/watch?v=BmY2_40ZcGw&t=156s"
          target="_blank"
          rel="noreferrer"
          className="flex font-semibold items-center gap-3 bg-[#FF0000] text-white py-2 px-4 rounded-full outline-none border-none"
        >
          <FaYoutube size={20} /> Watch video on Youtube
        </a>
      </div>
    </div>
  );
}

const CounterUpTimer = ({ targetDate }) => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - new Date(targetDate).getTime();

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center relative z-50">
      {/* Commented out the heading for a cleaner look */}
      {/* <h1 className="text-4xl font-bold mb-4 text-white"> */}
      {/*   27-11-2020 10:40pm الوقت من */}
      {/* </h1> */}
      <div className="text-white p-4 md:p-6 rounded-lg inline-block">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl">{timeElapsed.days}</span>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl">{timeElapsed.hours}</span>
            <span>Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl">{timeElapsed.minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl">{timeElapsed.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>
      <p className="text-xl md:text-2xl font-bold relative z-10 text-white">
        الجمعه ال{" "}
        <span className="relative -mt-10 md:-mt-20 text-5xl md:text-7xl">
          201
        </span>{" "}
        علي القاضيه ممكن اعادها الله علينا وعليكم بالخير{" "}
      </p>

      <footer className="text-white md:text-xl font-semibold absolute top-[560px] left-1/2 z-50 -translate-x-1/2 md:top-[550px]">
        by &copy;Fares Mohamed.
      </footer>
    </div>
  );
};

export default App;
