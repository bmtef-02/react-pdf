import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFComponent from './components/PDFComponent';

function App() {
  return (
    <PDFViewer style={{ position: 'absolute', border: 0, width: '100%', height: '100%' }}>
        <PDFComponent />
    </PDFViewer>

  );
}

export default App;
