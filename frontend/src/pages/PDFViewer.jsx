import React from 'react';
import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import useSound from "use-sound"; // for handling the sound
import click from "../sounds/click.mp3"




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
          This is a dynamically generated PDF document for the file: {fileName}.
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
    <div className="p-4 bg-black text-green-400 text-white border border-green-500 rounded-md  font-terminal sm:text-sm">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue">{fileName}</h2>
     

      {/* <div className="bg-gray-900 border border-green-500 rounded-md p-4 mb-4">
        <PDFViewer style={{ width: "100%", height: "600px" }}>
          <PDFDocument fileName={fileName} />
        </PDFViewer>
      </div> */}

<h3 className='text-2xl mb-1 '>Previous Experience:</h3>

      <div className="text-2xl mb-4 leading-relaxed">
       
        {/* PDF Download Link */}
        <PDFDownloadLink
          document={<PDFDocument fileName={fileName} />}
          fileName={`${fileName}.pdf`}
          className="text-blue-400 underline hover:text-blue-200 leading-relaxed"
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
      <button className=" text-red text-3xl " onClick={handleClick}>
        Back
      </button>
    </div>
  );
}

export default PDFViewer;