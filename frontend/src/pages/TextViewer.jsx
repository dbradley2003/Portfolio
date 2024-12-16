import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import useSound from "use-sound"; // for handling the sound
import click from "../sounds/click.mp3"
import H1 from "../components/H1";
import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import parse from 'html-react-parser';
import TextSection from "../components/TextSection";
function TextViewer() {
    const {fileName} = useParams()
    const navigate = useNavigate();
    const [playEffect] = useSound(click, { volume: 0.2 });

    
    const fileContents = {
  'About.txt': `Hi,
I'm a third year student at <b>DePaul University</b>, studying computer science. I have experience building full stack web 
applications and mostly use <b>Django/React</b> as my framework. I currently work remotely as a web developer for a nonprofit in San Jose called 
<b>Hunger at Home</b>. I am always learning and applying myself into this field because the future for technology excites me and anticipate 
the future world we might all live in one day (if AI doesn't end our species). Anyways, this is my first ever Hack a thon with codex and 
am excited to share my portfolio, especially since I probably needed to build one at some point anyways.
`,
"TeamUpNow.txt": `TeamUp:
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
Visit <a href="https://teamupnow.org" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">TeamUpNow</a> for more information.
`,
'Email.txt': `<strong>Personal Email:</strong>
dombradley2003@gmail.com
<strong>School Email:</strong>
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
      <ContentLayout>
      <H1>{fileName}</H1>
      <TextSection>
        {parse(fileContents[fileName]) || "File not found."}
       </TextSection>
      <Button onClick={handleClick}>Back</Button>
   </ContentLayout>
    )
}

export default TextViewer;