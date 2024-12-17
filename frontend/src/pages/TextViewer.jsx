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
  'About.txt': 
  `Hi, I’m Dominic Bradley!

I’m a third-year Computer Science student at DePaul University. My experience primarily lies in building full-stack solutions using Django 
for the backend and React for the frontend.

Currently, I work remotely as a web developer for the nonprofit organization Hunger at Home in San Jose, where I help develop tools to 
streamline operations and make a difference in the community.

Technology excites me because of its limitless potential to shape the future. I’m constantly learning and evolving in this field.

This is my first hackathon with Codex, and I’m thrilled to showcase my portfolio—a project I’ve been meaning to tackle for a while. 
I can’t wait to connect, collaborate, and grow through this experience!
`,
"TeamUpNow.txt": `<b>TeamUp:</b>
A real-time collaboration platform for film students

Overview: 
TeamUp is a startup I've been developing to help connect film students with other film students to collaborate and work on projects. 
Many film projects require a substantial amount of different roles such as actors, audio, equipment, etc. and I've witnessed that the current 
tools for connecting with people with specific skillsets are inactive and subpar. Not to mention, this addresses the issue for commuter students, 
who may not neccesarily have the same opportunity to form their clique and either find projects to work on or find people to help them.

Technologies Used
Tech Stack:
Backend: Django
Frontend: React
Database: PostgreSQL

Deployment:
Hosted on AWS, with a CI/CD pipeline leveraging Docker and GitHub Actions for seamless deployment.

Other Features:
Websockets for real-time notifications, ensuring instant communication between users.
SSO Integration with Microsoft using Azure/MSAL-React for a streamlined and secure login experience.

Learn More
Visit  <a href="https://teamupnow.org" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">TeamUpNow</a> to explore the platform 

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