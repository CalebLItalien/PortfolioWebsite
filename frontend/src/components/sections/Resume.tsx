import React, { useState, useEffect, useRef } from 'react';
import { ResumeWrapper } from '../../styles/Wrappers';
import { PDFImage } from '../../styles/Image';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { PDFImageFrame } from '../../styles/Frame';
import { DownloadResume } from '../../styles/Text';
import TypingAnimation from '../TypingAnimation';

GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs';

const Resume: React.FC = () => {
  const [pdfImage, setPdfImage] = useState<string>('');
  const [imageWidth, setImageWidth] = useState<number>(0);
  const pdfImageRef = useRef<HTMLImageElement>(null); 
  const downloadResumeText = "Click resume to download.";

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
    };

    fetchPdf();
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (pdfImageRef.current) {
        setImageWidth(pdfImageRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', updateWidth); 
    updateWidth(); 

    return () => window.removeEventListener('resize', updateWidth); 
  }, [pdfImage]); 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <ResumeWrapper>
      <PDFImageFrame>
        {pdfImage && (
          <>
            <PDFImage ref={pdfImageRef} src={pdfImage} alt="Resume Preview" onClick={handleDownload} />
            <DownloadResume width={imageWidth}>
              <TypingAnimation text={downloadResumeText} speed={100}/>
            </DownloadResume>
          </>
        )}
      </PDFImageFrame>
    </ResumeWrapper>
  );
};

export default Resume;
