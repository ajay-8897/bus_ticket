import React from 'react';
import { useHistory } from 'react-router-dom';

const NavBar: React.FC = () => {
  const history = useHistory();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push('/about');
  };

  return (
    <nav style={{
      background: '#1976d2',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }}>
      <a
        href="/"
        style={{ color: '#fff', marginLeft: '18px', fontWeight: 500, textDecoration: 'none' }}
        onClick={e => { e.preventDefault(); history.push('/'); }}
      >
        Home
      </a>
      <a
        href="/about"
        onClick={handleAboutClick}
        style={{ color: '#fff', marginLeft: '18px', fontWeight: 500, textDecoration: 'none' }}
      >
        About
      </a>
      <a
        href="/contact"
        style={{ color: '#fff', marginLeft: '18px', fontWeight: 500, textDecoration: 'none' }}
        onClick={e => { e.preventDefault(); history.push('/contact'); }}
      >
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
