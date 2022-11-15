import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="container my-4 mx-auto flex items-center justify-center overflow-hidden bg-white text-center font-sans">
      <ul className="text-gray-700 flex list-none items-center p-0 text-sm">
        <li className="border-black px-6 pb-2 hover:border-b-2">
          <a href="/" className="text-3xl">
            {location.pathname === '/' ? 'Portofolio' : 'Top'}
          </a>
        </li>
        <li className="border-black px-6 pb-2 hover:border-b-2">
          <a href="/skills" className="text-3xl">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
