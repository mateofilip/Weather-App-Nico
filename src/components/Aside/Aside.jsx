import './Aside.scss';

export default function Aside() {
  return (
    <aside className="Aside animate__animated animate__slideInRight">
      <nav>
        <ul>
          <li>
            {' '}
            <span>01.</span> Blog
          </li>
          <li>
            {' '}
            <span>02.</span> FAQ
          </li>
          <li>
            {' '}
            <span>03.</span> About
          </li>
        </ul>
      </nav>
    </aside>
  );
}
