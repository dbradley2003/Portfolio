import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
// import qala from "../assets/qala.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; 
import { IconContext } from "react-icons"; // for customazing the icons
import daft from "../assets/daft.mp3"; 
import "../style/player.css"



function MusicPlayer(){

const [isPlaying, setIsPlaying] = useState(false);

const [play, { pause, duration, sound }] = useSound(daft,{preload:true, volume:0.05});
const artist = useState('')
const songname = useState('One More Time by Daft Punk')

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
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

 
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    
    const time = {
      min: min,
      sec: secRemain
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <div className="p-4 bg-background text-dodgerblue border border-2 font-batik rounded-3xl  ">
      <h2 className="text-3xl font-bold underline mb-4 text-center ">
      My Tunes
    </h2>
      <div className="flex flex-col items-center space-y-4">
      <img
        className="rounded-lg border-4 border-accent w-40 h-40 shadow-md "
        src="https://picsum.photos/200/200"
        alt="Music Cover"
      />
      <div className="text-center text-lg font-bold">
        Now Playing: "One More Time"
      </div>
    </div>
     

      <div className="flex justify-around items-center text-gray ">
      <button className="hover:scale-110 transform transition ">
          <BiSkipPrevious size="3em" className="text-xl" />
        </button>


        {isPlaying ? (
          <button
          className=" bg-gray text-dodgerblue font-bold text-lg px-4 py-2 rounded hover:bg-hover"
            onClick={playingButton}
          >
            Stop
            {/* <AiFillPauseCircle size="3em" className="text-green-400" /> */}
          </button>
        ) : (
          <button
            className="bg-gray text-lg text-dodgerblue f font-bold px-4 py-2 rounded hover:bg-hover"
            onClick={playingButton}
          >
            Play
            {/* <AiFillPlayCircle size="3em" className="text-green-400" /> */}
          </button>
        )}
        
        <button className="hover:scale-110 transform transition ">
          <BiSkipNext size="3em" className="text-xl" />
        </button>
        <div>
        <div className="time text-sm pr-4">
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
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>

      </div>

      
    </div>
    
  );
}
export default MusicPlayer;