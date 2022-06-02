import './Navbar.scss';
import { FaSun, FaTimes, FaBars } from 'react-icons/fa';
import Aside from '../Aside/Aside';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (!open) {
      setOpen(!open);
    } else {
      document
        .querySelector('.Aside')
        .classList.remove('animate__slideInRight');

      document.querySelector('.Aside').classList.add('animate__slideOutRight');

      setTimeout(function () {
        setOpen(!open);
      }, 1000);
    }
  }

  return (
    <nav className="Navbar">
      <div className="icon">
        <FaSun />
        <h3>Weather App</h3>
      </div>

      {open ? <Aside /> : void 0}

      <button>
        {open ? (
          <FaTimes onClick={handleClick} />
        ) : (
          <FaBars onClick={handleClick} />
        )}
      </button>

      <ul className="desktop-menu">
        <li>
          {' '}
          <span> 01. </span> Blog
        </li>
        <li>
          {' '}
          <span> 02. </span> FAQ
        </li>
        <li>
          {' '}
          <span> 03. </span>About
        </li>
      </ul>
    </nav>
  );
}
