import React, { useState } from 'react';

const UrlForm = ({ addUrl }) => {
  const [formData, setFormData] = useState({ name: '', url: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUrl(formData);
    setFormData({ name: '', url: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
      <input type="text" name="url" value={formData.url} onChange={handleInputChange} placeholder="URL" />
      <button type="submit">Add URL</button>
    </form>
  );
};

export default UrlForm;
