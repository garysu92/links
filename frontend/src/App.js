import React, { useState, useEffect } from 'react';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';

const App = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // Fetch the URLs from the backend API on component mount
    fetch('/api/urls')
      .then((response) => response.json())
      .then((data) => setUrls(data))
      .catch((error) => console.error('Error fetching URLs:', error));
  }, []);

  const addUrl = (newUrl) => {
    // Send the new URL to the backend API for saving
    fetch('/api/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUrl), // Send both name and url in the request body
    })
      .then((response) => response.json())
      .then((data) => {
        setUrls([...urls, data]);
      })
      .catch((error) => console.error('Error adding URL:', error));
  };

  return (
    <div>
      <h1>URL Entry App</h1>
      <UrlForm addUrl={addUrl} />
      <UrlList urls={urls} />
    </div>
  );
};

export default App;
