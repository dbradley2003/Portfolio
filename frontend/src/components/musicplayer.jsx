import { useEffect, useState,useRef } from "react"; 
import useSound from "use-sound"; 
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; 
import daft from "../assets/daft.mp3"; 
import "../style/player.css"



function MusicPlayer(){
const audioRef = useRef(null)
const [isPlaying, setIsPlaying] = useState(false);

const [play, { pause, duration, sound }] = useSound(daft,{preload:true, volume:0.05});



const playbackRef = useRef(0);

const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };


  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "00",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

 
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60).toString().padStart(2, "0");
    
    const time = {
      min: min,
      sec: secRemain
  };

  useEffect(() => {
    const savedTime = localStorage.getItem("playbackTime");
  
    if (savedTime && audioRef.current) {
      playbackRef.current = parseFloat(savedTime);
      setSeconds(parseFloat(savedTime));
    }
    return () => {
      pause()
    }
  },[pause])


  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        const currentTime = sound.seek([])
        playbackRef.current = currentTime;
        localStorage.setItem("playbackTime", currentTime); 
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(playbackRef.current % 60).toString().padStart(2, "0");
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.seek(playbackRef.current);
    }
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.on("end", () => {
        setIsPlaying(false);
        setSeconds(0); // Reset the timeline bar
        setCurrTime({ min: 0, sec: "00" }); // Reset the current time display
      });
    }
  }, [sound]);


 



  return (
    <div className="flex flex-col items-center justify-center p-4 bg-background text-dodgerblue  border-2 font-batik rounded-3xl  w-64 h-64 md:w-64 md:h-72 lg:w-80 lg:h-72 shadow-md  ">
      <h2 className="text-lg md:text-xl font-bold pb-2 md:pb-4  text-center ">
      My Playlist
    </h2>
      <div className="flex flex-col items-center space-y-4 mb-2">
      <img
        className="rounded-lg border-4 border-accent w-24 h-24 shadow-md "
        src="https://picsum.photos/200/200"
        alt="Music Cover"
      />
      <div className="text-center text-sm md:text-base  ">
        <p className="">Now Playing: "One More Time"</p>
      </div>
    </div>
     

      <div className="flex justify-around items-center text-neutral-300 ">
      <button className="hover:scale-110 transform transition ">
          <BiSkipPrevious size="3em" className="text-lg" />
        </button>

          <button
          className=" bg-dodgerblue text-white font-bold  text-sm md:text-sm lg:text-base px-3 py-2  rounded hover:bg-blue-600 "
          onClick={playingButton}>
           {isPlaying ? "Pause" : "Play"}
          </button>

        <audio ref={audioRef} src={daft}/>
        
        <button className="hover:scale-110 transform transition ">
          <BiSkipNext size="3em" className="text-sm md:text-sm lg:text-base" />
        </button>
        <div>
        <div className="time text-xs md:text-xs lg:text-sm text-neutral-300 pr-2  ">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline text-neutral-50 "
          onChange={(e) => {
            const newTime = e.target.value;
            playbackRef.current = newTime; // Update playbackRef
            sound.seek([newTime]); // Seek to the new time
            setSeconds(newTime)
          }}
        />
      </div>

      </div>

      
    </div>
    
  );
}
export default MusicPlayer;