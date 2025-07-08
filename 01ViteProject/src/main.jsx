import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const username = "Suhani";

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  "Click here to visit Google",
  `${username}`
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}
  </StrictMode>
);
