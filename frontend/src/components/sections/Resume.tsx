import React, { useState } from 'react';
import { ResumeWrapper } from '../../styles/Wrappers';

const Resume: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      alert('Please enter an email address.');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8081/send-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Resume sent to your email!');
      } else {
        alert('Failed to send resume. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error ocurred. Please try again later.');
    }
  };

  return (
    <ResumeWrapper>
      <h1>My Resume</h1>
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
        Download Resume
      </a>
      {/* <form onSubmit={handleEmailSubmit}>
        <input 
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        {/* <button type="submit">Email Me the Resume</button> */}
      {/* </form> */}
    </ResumeWrapper>
  );
};

export default Resume;
