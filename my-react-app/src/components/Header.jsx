import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Windsor Place</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;