import "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="logo">
      <img src="/logo.png" alt="Church Logo" width="80" height="80" />
      <h3>Ethiopian Berhana Kiristos Church</h3>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#campus">Campus</a></li>
        <li><a href="#library">Library</a></li>
        <li><a href="#testmonial">Testmonial</a></li>
        <li><a href="#donate">Donate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
