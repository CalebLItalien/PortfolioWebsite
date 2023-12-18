import React, { useState } from 'react';
import { ContactWrapper } from '../../styles/Wrappers';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email|| !message) {
      alert('Please fill in all fields.');
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
        alert('Message sent successfully!')
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error: ', error);
      alert('An error occurred. Please try again at a later date.');
    }
  };
  return (
    <ContactWrapper>
      <h1>Contact Me Section</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
    </ContactWrapper>
  );
};

export default Contact;
