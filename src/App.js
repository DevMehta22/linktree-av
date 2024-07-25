import React from 'react';
import './App.css';
import logo from './images/Anirveda.jpeg';
import instagramLogo from './images/Instagram.png';
import linkedinLogo from './images/LinkedIn.png';
import xLogo from './images/Twitter.jpeg'; // Ensure you have the appropriate logos in the src folder

const links = [
  { name: 'Instagram', url: 'https://www.instagram.com/anirveda_pdeu/', logo: instagramLogo },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/anirveda-the-technoeconomics-club/?originalSubdomain=in', logo: linkedinLogo },
  { name: 'X', url: 'https://x.com/Anirveda_pdeu?t=2-rWPxS624hY2IFlcEEBaw&s=08', logo: xLogo },
];

const eventLinks = [
  { name: 'Bahikhata', url: '#' },
  { name: 'Introvia', url: '#' },
  { name: 'Interview Registrations', url: '#' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Anirveda Logo" />
        <h1>Anirveda - The Techno Economics Club of PDEU</h1>
        <div className="links">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link">
              <img src={link.logo} alt={`${link.name} logo`} className="social-logo" />
              {link.name}
            </a>
          ))}
          <h3>Events</h3>
          {eventLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link">
              {link.name}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;