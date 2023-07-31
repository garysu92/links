import React from 'react';
import { Link } from 'react-router-dom';

const UrlList = ({ urls }) => {
  return (
    <div>
      <ul>
        {urls.map((url) => (
          <li key={url._id}>
            <a href={'//' + url.url} target="_blank" >{url.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
