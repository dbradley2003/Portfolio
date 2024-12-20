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
    const [playEffect] = useSound(click, { volume: 0.08 });

    
    const fileContents = {
  'About.txt': 
  `Hi, I’m Dominic Bradley!

I’m a third-year Computer Science student at DePaul University with a strong passion for building full-stack web applications. My expertise lies in using Django for backend development and React for frontend development.

Additionally, I have experience with technologies like PostgreSQL, AWS, Azure, Docker, and CI/CD pipelines, which I leverage to create scalable and secure applications.

I currently work as a web developer for Hunger at Home, a nonprofit organization based in San Jose. In this role, I develop tools that enhance operational efficiency and support impactful community services.

Currently, I've been working on a real-time collaboration platform called TeamUp, which connects film students to collaborate on creative projects and build professional experience. The platform is designed to help students discover projects, showcase their skills, and connect with others to develop their portfolios and improve their chances of securing jobs in the competitive film industry.

I also have a strong interest for trading and finance and am currently developing my skills to build predictive trading platforms that empower users to make smarter trading decisions.

I’m excited to continue learning and growing as a developer and look forward to new opportunities to apply my skills and contribute to innovative projects.


`,
"TeamUpNow.txt": `<b>TeamUp:</b>
<b>A Real-Time Collaboration Platform for Film Students</b>

<b>Overview:</b>
TeamUp is a startup I developed to connect film students with peers to collaborate on creative projects and build professional experience. The platform is designed to help students discover projects, showcase their skills, and connect with others to develop their portfolios and improve their chances of securing jobs in the competitive film industry. By bridging gaps in communication and collaboration, TeamUp fosters a professional network that supports students' career growth.

<b>Technologies Used:</b>

<b>Tech Stack:</b>

<ul> <li><b>Backend:</b> Django, providing a robust framework for scalable and secure backend development.</li> <li><b>Frontend:</b> React, delivering a responsive, interactive, and user-friendly interface.</li> <li><b>Database:</b> PostgreSQL, chosen for its ability to efficiently handle relational data and scale with user demands.</li> </ul>
<b>Deployment:</b>

<ul> <li>Hosted on <b>AWS</b>, leveraging its scalable cloud infrastructure for optimal performance.</li> <li>Implemented a <b>CI/CD pipeline</b> using Docker and GitHub Actions to automate seamless deployment processes.</li> </ul>
<b>Key Features:</b>

<ul> <li><b>Real-Time Notifications:</b> Built with WebSockets to enable instant updates and enhance collaboration between users.</li> <li><b>SSO Integration:</b> Secure login experience through Microsoft Azure using MSAL-React.</li> </ul>
<b>Learn More:</b>
Visit <a href="https://teamupnow.org" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">TeamUpNow</a> to explore the platform and see how it empowers film students to collaborate, create, and advance their careers.

`,
'Email.txt': `<strong>Personal Email:</strong>
dombradley2003@gmail.com
<strong>School Email:</strong>
dbradl17@depaul.edu
`,


"TradeAnalysis.txt": `
<b>Trading Simulation Tool: </b>
<b>A Predictive Trading Platform for Smarter Decision-Making</b>

<b>Overview:</b>
This project was developed as part of the Northern Trust x DePaul Competition to create a simulation platform for foreign exchange trading. The goal was to empower users to simulate trades, manage portfolios, and exchange assets in a controlled environment, helping them make smarter trading decisions through data-driven insights. The platform combines predictive analytics, intuitive dashboards, and a user-friendly interface to provide a comprehensive trading experience.

<b>Technologies Used:</b>

<ul> <li><b>Backend:</b> Python and Django, used to create a scalable backend infrastructure for simulating trades and managing user portfolios.</li> <li><b>Database:</b> PostgreSQL, ensuring efficient handling and storage of user portfolios, transaction data, and market trends.</li> <li><b>Predictive Analytics:</b> LSTM models were integrated to analyze historical market data and forecast future trends for smarter trading decisions.</li> <li><b>Frontend:</b> React, HTML5, CSS3, delivering an interactive and user-friendly interface.</li> <li><b>API Integration:</b> Leveraged APIs to fetch real-time market data and ensure up-to-date simulations.</li> </ul>
<b>Key Features:</b>

<ul> <li><b>Portfolio Management:</b> Allows users to create and manage virtual portfolios, providing insights into performance and risk.</li> <li><b>Trade Simulation:</b> Enables users to simulate trades and exchange assets in a controlled environment to test strategies.</li> <li><b>Predictive Analytics:</b> Incorporates LSTM models to forecast market trends and improve trading decisions.</li> <li><b>Data Visualization:</b> Dynamic dashboards visualize market trends, trade performance, and portfolio summaries, offering actionable insights.</li> </ul>

`,


"Portfolio.txt":`

`,
"RaspberryPI.txt":`

`,


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