import React, { useState, useEffect } from 'react';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
const apiUrl = process.env.REACT_APP_BACKEND_URL;

const App = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/urls`)
      .then((response) => response.json())
      .then((data) => setUrls(data))
      .catch((error) => console.error('Error fetching URLs:', error));
  }, []);

  const addUrl = (newUrl) => {
    fetch(`${apiUrl}/urls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUrl),
    })
      .then((response) => response.json())
      .then((data) => {
        setUrls([...urls, data]);
      })
      .catch((error) => console.error('Error adding URL:', error));
  };

  return (
    <div>
      <h1>Other Projects</h1>
      <UrlForm addUrl={addUrl} />
      <UrlList urls={urls} />
    </div>
  );
};

export default App;
