import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import useSound from "use-sound"; // for handling the sound
import click from "../sounds/click.mp3"
function TextViewer() {
    const {fileName} = useParams()
    const navigate = useNavigate();
    const [playEffect] = useSound(click, { volume: 0.2 });

    const content = 'Learn more: <a href="https://www.yourhomepage.com" target="_blank">Visit TeamUpNow</a>';
    const fileContents = {

  'About.txt': `
Welcome to my portfolio!

Hi, I'm Dominic and I'm a third year student at DePaul University, studying computer science. I have experience building full stack web 
applications and mostly use Django/React as my framework. I currently work remotely as a web developer for a nonprofit in San Jose called 
Hunger at Home. I am continously learning and applying myself into this field because the future for technology excites me and anticipate 
the future world we might all live in one day (if AI doesn't end our species). Anyways, this is my first ever Hack a thon with codex and 
am excited to share myportfolio, especially since I probably needed to build one at some point anyways.

`,
"TeamUpNow.txt": `
TeamUp:
A real-time collaboration platform for film students

Overview:
TeamUp is a startup I've been developing to help connect film students with other film students to collaborate and work on projects. Many film projects 
require a substantial amount of different roles such as actors, audio, equipment, etc. and I've witnessed that the current tools for connecting with people 
with specific skillsets are inactive and subpar. Not to mention, this addresses the issue for commuter students, who may not neccesarily have the same 
opportunity to form their clique and either find projects to work on or find people to help them.

Technologies Used:
* Stack - My stack is Django the backend, React for the frontend, and PostgreSQL for the database. 
* Deployment - I deployed the app using AWS and setup a CD pipeline with Docker and GitHub Actions
* Other tools - websockets for real-time notifications, Azure/msal-react for SSO integration with Microsoft 

`,

'Email.txt': `
   Personal Email:
   dombradley2003@gmail.com

   School Email: 
   dbradl17@depaul.edu
`,

"TradeAnalysis.txt": `
...
`
}

    const handleClick = () => {
        playEffect()
        navigate('/Portfolio/')
    }


    return(

        <div className="p-4 bg-black text-green-400 text-white border rounded-md font-terminal sm:text-sm ">
      <h2 className="text-4xl font-bold mb-4 text-center text-yellow">{fileName}</h2>
      <pre className="flex flex-col justify-center text-left items-left whitespace-pre-wrap leading-relaxed  text-xl mb-4  p-2 font-terminal text-white">
        {fileContents[fileName] || "File not found."}
        {fileName === "TeamUpNow.txt" && (
          <a href="https://teamupnow.org" target="blank" className="text-xl text-blue font-bold">Visit TeamUpNow</a>
        )}
      </pre>
      

      <button className="text-3xl text-red" onClick={handleClick}> 
        Back
      </button>
    </div>

    )
}

export default TextViewer;