import './Navbar.scss';
import { FaSun, FaTimes, FaBars } from 'react-icons/fa';
import Aside from '../Aside/Aside';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="icon">
        <FaSun />
        <h3>Weather App</h3>
      </div>

      {open ? <Aside /> : void 0}

      <button>
        {open ? (
          <FaTimes onClick={() => setOpen(!open)} />
        ) : (
          <FaBars onClick={() => setOpen(!open)} />
        )}
      </button>

      <ul className="desktop-menu">
        <li>Blog</li>
        <li>FAQ</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
