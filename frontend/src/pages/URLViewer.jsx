
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import useSound from "use-sound"; // for handling the sound
import click from "../sounds/click.mp3"
import H1 from "../components/H1";
import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import TextSection from "../components/TextSection";
function URLViewer() {
    const {fileName} = useParams()
    const navigate = useNavigate();
     const [playEffect] = useSound(click, { volume: 0.08 });

   
    const fileContents = {

        "LinkedIn.url":"https://www.linkedin.com/in/dominic-bradley-602787241/",
        "GitHub.url":"https://github.com/dbradley2003",
    }

    const handleClick = () => {
        playEffect()
        navigate('/Portfolio/')
    }


    return (
        <ContentLayout>
        <H1>{fileName}</H1>
        
        
         <TextSection>
          {fileContents[fileName].startsWith("https") && (
          <a
            href={fileContents[fileName]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-link"
          >
           
            {fileContents[fileName]}
       
      
          </a> 
        )}
        
        
        </TextSection>
       
      <Button onClick={handleClick}>Back</Button>
       
        
        </ContentLayout>
       
)
}

  export default URLViewer;