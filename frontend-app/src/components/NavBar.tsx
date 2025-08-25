import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const linkStyle: React.CSSProperties = {
  color: '#000',
  fontWeight: 500,
  textDecoration: 'none',
  transition: 'color 0.2s',
  cursor: 'pointer'
};

const NavBar: React.FC = () => {
  const history = useHistory();
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    // Hide navbar if on /signin route (Account page)
    if (window.location.pathname === '/signin') {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [window.location.pathname]);

  if (hideNav) return null;

  return (
    <nav
      className="navbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        backgroundColor: '#f0c497ff'
      }}
    >
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '1.3rem',
          marginRight: '2rem',
          fontFamily: 'cursive'
        }}
      >
        HimBusses
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
        <span
          style={linkStyle}
          onClick={() => {
            if (window.location.pathname !== '/') {
              history.push('/');
              setTimeout(() => {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            } else {
              const aboutSection = document.getElementById('about-section');
              if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          onMouseOver={e => (e.currentTarget.style.color = '#8b6f23')}
          onMouseOut={e => (e.currentTarget.style.color = '#000')}
        >
          About
        </span>
        <span
          style={linkStyle}
          onClick={() => {
            if (window.location.pathname !== '/') {
              history.push('/');
              setTimeout(() => {
                const supportSection = document.getElementById('support-section');
                if (supportSection) supportSection.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            } else {
              const supportSection = document.getElementById('support-section');
              if (supportSection) supportSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          onMouseOver={e => (e.currentTarget.style.color = '#8b6f23')}
          onMouseOut={e => (e.currentTarget.style.color = '#000')}
        >
          Support
        </span>
        <span
          style={linkStyle}
          onClick={() => {
            setHideNav(true);
            history.push('/signin');
          }}
          onMouseOver={e => (e.currentTarget.style.color = '#8b6f23')}
          onMouseOut={e => (e.currentTarget.style.color = '#000')}
        >
          <span
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginRight: '6px',
              color: '#1976d2'
            }}
          >
            {/* Simple user/account SVG icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="#1976d2" strokeWidth="2" />
              <path d="M4 20c0-3.3137 3.134-6 7-6s7 2.6863 7 6" stroke="#1976d2" strokeWidth="2" />
            </svg>
          </span>
          Account
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
