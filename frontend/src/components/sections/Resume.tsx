import React, { useState, useEffect } from 'react';
import { ResumeWrapper } from '../../styles/Wrappers';
import { PDFImage } from '../../styles/Image';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { PDFImageFrame } from '../../styles/Frame';

GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.269/pdf.worker.min.mjs';

const Resume: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pdfImage, setPdfImage] = useState<string>('');

  useEffect(() => {
    const fetchPdf = async () => {
      const loadingTask = getDocument(`${process.env.PUBLIC_URL}/resume.pdf`);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const context = canvas.getContext('2d');

      if (context) {
        await page.render({ canvasContext: context, viewport }).promise;
        setPdfImage(canvas.toDataURL());
      } else {
        console.error('Unable to get canvas context');
      }
      setPdfImage(canvas.toDataURL());
    };
    fetchPdf();
  }, []);
  // const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!email) {
  //     alert('Please enter an email address.');
  //     return;
  //   }
    
  //   try {
  //     const response = await fetch('http://localhost:8081/send-resume', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     if (response.ok) {
  //       alert('Resume sent to your email!');
  //     } else {
  //       alert('Failed to send resume. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error ocurred. Please try again later.');
  //   }
  // };

  return (
    <ResumeWrapper>
      <PDFImageFrame>
        {pdfImage && (
          <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
            <PDFImage src={pdfImage} alt="Resume Preview" />
          </a>
        )}
      </PDFImageFrame>
      {/* <form onSubmit={handleEmailSubmit}>
        <input 
          type="email"
          placeholder="Your email"ZZ
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        {/* <button type="submit">Email Me the Resume</button> */}
      {/* </form> */}
    </ResumeWrapper>
  );
};

export default Resume;
