
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import useSound from "use-sound"; // for handling the sound
import click from "../sounds/click.mp3"


function URLViewer() {
    const {fileName} = useParams()
    const navigate = useNavigate();
    const [playEffect] = useSound(click, { volume: 0.2 });

   
    const fileContents = {

        "LinkedIn.url":"https://www.linkedin.com/in/dominic-bradley-602787241/",
        "GitHub.url":"https://github.com/dbradley2003",
    }

    const handleClick = () => {
        playEffect()
        navigate('/Portfolio/')
    }


    return (
        <div className="p-4 bg-black text-green-400 text-white border border-green-500 rounded-md font-terminal sm:text-sm">
        <h2 className="text-4xl text-center  font-bold mb-8 text-white">{fileName}</h2>
        
        
         <div className=" text-blue mb-4 text-2xl">
          {fileContents[fileName].startsWith("https") && (
          <a
            href={fileContents[fileName]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-200 "
          >
           
            {fileContents[fileName]}
       
      
          </a> 
        )}
        
        
        </div>
       
        <button className="text-3xl text-red" onClick={handleClick}> 
        Back
        </button>
       
        
        </div>
       
)
}

  export default URLViewer;