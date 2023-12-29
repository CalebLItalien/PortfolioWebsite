import React, { useState, useEffect } from 'react';
import { ResumeWrapper } from '../../styles/Wrappers';
import { PDFImage } from '../../styles/Image';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { PDFImageFrame } from '../../styles/Frame';
import { DownloadResume } from '../../styles/Headers';

GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.269/pdf.worker.min.mjs';

const Resume: React.FC = () => {
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

  return (
    <ResumeWrapper>
      {/* <DownloadResume>
        <p>Click resume to download</p>
      </DownloadResume> */}
      <PDFImageFrame>
        {pdfImage && (
          <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
            <PDFImage src={pdfImage} alt="Resume Preview" />
          </a>
        )}
      </PDFImageFrame>
    </ResumeWrapper>
  );
};

export default Resume;
