import React from 'react';
// import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="content">
      <h1>Project Starter Kit (REST)</h1>

      <h2>Get Started</h2>
      <ul>
        <li>Comes with React-Redux pre-loaded -- Webpack too!</li>
        <li>Built for REST Endpoints</li>
        <li>Formatting with ESLint</li>
        <li>Integrated with Semantic UI</li>
        <li>Jest for Unit Testing</li>
        <li>SCSS like a boss</li>
        <li>Axios for HTTP client</li>
        <br/>
        <li>Launch in Dev mode: npm run start -s</li>
        <li>Build for Production: npm run build</li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ul>
    </div>
  );
};

export default HomePage;
