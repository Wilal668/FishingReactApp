// ContactPage.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Submitted data:', formData);
      setSubmittedData(formData);
      setErrors({});
    }
  };

  const handleDownload = () => {
    const fileContent = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact-message.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <div className="error">{errors.subject}</div>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Subject:</strong> {submittedData.subject}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
          <button onClick={handleDownload}>Download as File</button>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
