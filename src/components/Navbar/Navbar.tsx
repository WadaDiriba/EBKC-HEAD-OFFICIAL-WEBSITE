// Navbar.tsx - With About Dropdown
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { 
      id: "about", 
      label: "About", 
      path: "/about",
      dropdown: [
        { id: "mission", label: "Mission", path: "/about" },
        { id: "vision", label: "Vision", path: "/about" },
        { id: "goal", label: "Goal", path: "/about/" },
        { id: "history", label: "History", path: "/history" },
      ]
    },
    { id: "campus", label: "Campus", path: "/campus" },
    { id: "library", label: "Library", path: "/library" },


  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navbar} aria-label="Main Navigation">
        {/* Brand */}
        <Link to="/" className={styles.brand}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Ethiopian Berhane Kristos Church Logo" className={styles.logoImage} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandLine1}>Ethiopian</span>
            <span className={styles.brandLine2}>Berhane Kristos Church</span>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Overlay */}
        <div 
          className={styles.navOverlay} 
          onClick={() => setMenuOpen(false)}
          style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        />

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.navActive : ""}`}>
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={styles.navItem}
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className={`${styles.navLink} ${isActive(item.path) ? styles.active : ""}`}
                onClick={() => {
                  setMenuOpen(false);
                  if (item.dropdown) {
                    setActiveDropdown(activeDropdown === item.id ? null : item.id);
                  }
                }
              
              }
              >
                {item.label}
                {item.dropdown && (
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}>▼</span>
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <ul className={`${styles.dropdown} ${activeDropdown === item.id ? styles.dropdownActive : ""}`}>
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.id}>
                      <Link 
                        to={subItem.path} 
                        className={styles.dropdownLink} 
                        onClick={() => {
                          setMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li>
            <Link
              to="/donate"
              className={styles.donateBtn}
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`${styles.navLink} ${styles.contactLink} ${isActive('/contact') ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
