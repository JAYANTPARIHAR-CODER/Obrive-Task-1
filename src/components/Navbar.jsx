export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="#home" className="logo">
          JP
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}