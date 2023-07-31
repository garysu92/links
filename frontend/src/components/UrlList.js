import React from 'react';

const UrlList = ({ urls }) => {
  return (
    <ul>
      {urls.map((url) => (
        <li key={url._id}>{url.url}</li>
      ))}
    </ul>
  );
};

export default UrlList;
