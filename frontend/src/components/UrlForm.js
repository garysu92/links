import React, { useState } from 'react';

const UrlForm = ({ addUrl }) => {
  const [formData, setFormData] = useState({ name: '', url: '' });
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'password') {
      setPassword(value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user is authenticated
    console.log("h")
    console.log(process.env.REACT_APP_PASSWORD)
    console.log(process.env.REACT_APP_REACT_APP_PASSWORD)
    console.log(REACT_APP_PASSWORD)
    console.log("done")
    if (password === process.env.PASSWORD) {
      setIsAuthenticated(true);
      addUrl(formData);
      setFormData({ name: '', url: '' });
    } else {
      alert('Authentication failed. Please enter the correct password.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
          placeholder="URL"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UrlForm;
