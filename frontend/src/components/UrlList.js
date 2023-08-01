import React from 'react';
import { Link } from 'react-router-dom';

const UrlList = ({ urls }) => {
  return (
    <div>
      If you do not see any links below, you may have to click <a href='https://lb-rqsu.onrender.com/api/urls'>here</a> and then come back.
      <ul>
        {urls.map((url) => (
          <li key={url._id}>
            <a href={url.url} target="_blank" >{url.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
