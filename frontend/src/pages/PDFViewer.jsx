
import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import useSound from "use-sound"; // for handling the sound
import click from "../sounds/click.mp3"
import H1 from "../components/H1";
import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import TextSection from '../components/TextSection';

const styles = StyleSheet.create({
    page: {
      backgroundColor: "#000000",
      color: "#00ff00",
      padding: 30,
      fontFamily: "Courier",
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center",
    },
    content: {
      fontSize: 14,
      marginBottom: 10,
    },
    footer: {
      marginTop: 20,
      fontSize: 12,
      textAlign: "center",
      borderTop: "1px solid #00ff00",
      paddingTop: 10,
    },
  });
  const PDFDocument = ({ fileName }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>PDF Viewer: {fileName}</Text>
        <Text style={styles.content}>
          My Experience {fileName}.
          Coming Soon..
        </Text>
        <Text style={styles.footer}>© 2024 Dominic's Retro File Explorer</Text>
      </Page>
    </Document>
  );


function PDFViewer() {
  const {fileName} = useParams()

  const navigate = useNavigate();
  const [playEffect] = useSound(click, { volume: 0.2 });


const handleClick = () => {
    playEffect()
    navigate('/Portfolio/')
}

return (
    <ContentLayout>
      <H1>{fileName}</H1>

{/* <h3 className='text-2xl mb-1 '>Previous Experience:</h3> */}

      
       <TextSection>
         
        <PDFDownloadLink
          document={<PDFDocument fileName={fileName} />}
          fileName={`${fileName}.pdf`}
          className="underline hover:text-link"
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </TextSection>
      <Button onClick={handleClick}>Back</Button>
      </ContentLayout>
  );
}

export default PDFViewer;