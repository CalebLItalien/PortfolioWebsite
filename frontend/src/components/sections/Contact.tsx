import React, { useState, useEffect } from 'react';
import { ContactWrapper } from '../../styles/Wrappers';
import { ContactMe } from '../../styles/Headers';
import { ContactFrame } from '../../styles/Frame';
import { StyledForm,
         StyledInput,
         StyledTextArea } from '../../styles/Form';
import { SubmitButton } from '../../styles/Button';
import Alert from '../Alert';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [startFadeOut, setStartFadeOut] = useState(false);
  const [alertType, setAlertType] = useState('success');

  const showAlert = (message: string, type: string) => {
    setAlertMessage(message);
    setStartFadeOut(false);
    setAlertType(type);
  }

  const closeAlert = () => {
    setAlertMessage('');
    setStartFadeOut(false);
  }

  useEffect(() => {
    let fadeOutTimer: NodeJS.Timeout | number;
    let removeAlertTimer: NodeJS.Timeout | number;
  
    if (alertMessage) {
      fadeOutTimer = setTimeout(() => {
        setStartFadeOut(true);
      }, 2000);
  
      removeAlertTimer = setTimeout(() => {
        setAlertMessage('');
        setStartFadeOut(false); 
      }, 3000);
    }
  
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeAlertTimer);
    };
  }, [alertMessage]);
  
  const validEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validEmail(email)) {
      showAlert('Please enter a valid email address.', 'failure');
      return;
    }

    if (!name || !email|| !message) {
      showAlert('Please fill in all fields.', 'failure');
      return;
    }

    const formData = { 
      user_email: String(email),
      user_name: String(name),
      user_message: String(message),
    };

    try {
      const response = await fetch('http://127.0.0.1:8081/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        showAlert('Message sent successfully!', 'success')
        setName('');
        setEmail('');
        setMessage('');
      } else {
        showAlert('Failed to send message. Please try again.', 'failure');
      }
    } catch (error) {
      console.error('Error: ', error);
      showAlert('An error occurred. Please try again at a later date.', 'failure');
    }
  };
  return (
    <ContactWrapper>
      <ContactFrame>
        <ContactMe>Contact Me</ContactMe>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextArea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </StyledForm>
      </ContactFrame>
      {alertMessage && <Alert 
                        message={alertMessage} 
                        type={alertType} 
                        fadeOut={startFadeOut} 
                        onClose={closeAlert} />}
    </ContactWrapper>
  );
};

export default Contact;
