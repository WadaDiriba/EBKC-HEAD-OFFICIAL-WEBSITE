import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaInbox,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Campus", href: "/campus" },
    { label: "Library", href: "/library" },
    { label: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: "3P54+GWH, Addis Ababa" },
    { icon: <FaPhoneAlt />, label: "+251 11 123 4567" },
    { icon: <FaEnvelope />, label: "EBKC12@Yahoo.com" },
    { icon: <FaInbox />, label: "P.O.Box-160689" },
    { icon: <FaClock />, label: "Mon-Fri: 2-11 AM" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaTelegramPlane />, href: "https://t.me" },
  ];

  return (
    <footer className={styles.footer}>
      <button
        className={`${styles.scrollTop} ${showScrollTop ? styles.visible : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brandSection}>
          <img src={logo} alt="Church Logo" className={styles.logo} />
          <h3 className={styles.churchName}>
            Ethiopian Berhane <span className={styles.nameHighlight}>Kristos</span>
          </h3>
          <p className={styles.mission}>Proclaiming the Gospel, Transforming Lives.</p>
          <div className={styles.socialLinks}>
            {socialLinks.map((social, i) => (
              <a key={i} href={social.href} className={styles.socialLink}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <div className={styles.linksList}>
            {quickLinks.map((link, i) => (
              <a key={i} href={link.href} className={styles.link}>
                › {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Contact</h4>
          <div className={styles.contactList}>
            {contactInfo.map((item, i) => (
              <div key={i} className={styles.contactItem}>
                <span className={styles.contactIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {currentYear} Ethiopian Berhane Kristos Church
        </p>
      </div>
    </footer>
  );
}