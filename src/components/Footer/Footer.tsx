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
  const [currentYear, setCurrentYear] = useState<number>(2024);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Campus", href: "/campus" },
    { label: "Library", href: "/library" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
    { label: "Visit", href: "/visit" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "3P54+GWH, Addis Ababa, Ethiopia",
      href: "https://www.google.com/maps/place/Berhane+Kristos+Church+Head+Office/@9.0587859,38.7074158,43m/data=!3m1!1e3!4m7!3m6!1s0x164b89c7142ac885:0xb242a721e7778248!4b1!8m2!3d9.0588021!4d38.7073529!16s%2Fg%2F11s8rjdqjn?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <FaPhoneAlt />,
      label: "+251 11 123 4567",
    },
    {
      icon: <FaPhoneAlt />,
      label: "+251 91 123 4567",
    },
    {
      icon: <FaEnvelope />,
      label: "EBKC12@Yahoo.com",
      href: "mailto:EBKC12@Yahoo.com",
    },
    {
      icon: <FaInbox />,
      label: "P.O.Box-160689",
      href: "https://www.google.com/maps/search/?api=1&query=P.O.Box-160689+Addis+Ababa",
    },
    {
      icon: <FaClock />,
      label: "Monday – Friday | 2:00 AM – 11:00 AM",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook", href: "https://facebook.com" },
    { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
    { icon: <FaYoutube />, label: "YouTube", href: "https://youtube.com" },
    { icon: <FaTelegramPlane />, label: "Telegram", href: "https://t.me/yourchannel" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingCross}></div>
        <div className={styles.floatingCross}></div>
        <div className={styles.lightBeam}></div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className={styles.scrollTopButton}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className={styles.scrollArrow}>↑</span>
        </button>
      )}

      {/* Main Footer Content */}
      <div className={styles.container}>
        {/* Church Info & Brand */}
        <div className={`${styles.section} ${styles.brandSection}`}>
          <div className={styles.logoContainer}>
            <img
              src={logo}
              alt="Ethiopian Berhane Kiristos Church Logo"
              className={styles.logo}
            />
            <div className={styles.logoGlow}></div>
          </div>

          <h2 className={styles.churchName}>
            Ethiopian Berhane
            <span className={styles.nameHighlight}> Kristos</span> Church
          </h2>

          <p className={styles.mission}>
            Proclaiming the Gospel, Transforming Lives, and Building a
            Christ-centered Community in Ethiopia and Entire the World.
          </p>

          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.socialIcon}>{social.icon}</span>
                <span className={styles.socialTooltip}>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>🔗</span> Quick Links
          </h3>

          <ul className={styles.linksList}>
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className={styles.linkItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={link.href} className={styles.link}>
                  <span className={styles.linkBullet}>›</span>
                  <span className={styles.linkText}>{link.label}</span>
                  <span className={styles.linkHoverLine}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>📞</span> Head Office Bureau
          </h3>

          <div className={styles.contactList}>
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className={styles.contactItem}
                target={item.href ? "_blank" : "_self"}
                rel="noreferrer"
              >
                <span className={styles.contactIcon}>{item.icon}</span>
                <span className={styles.contactText}>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className={styles.newsletter}>
            <h4 className={styles.newsletterTitle}>Stay Updated</h4>
            <p className={styles.newsletterText}>
              Subscribe to our weekly newsletter
            </p>

            <form className={styles.subscriptionForm}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="EBKC12@Yahoo.com"
                  className={styles.emailInput}
                  aria-label="Email for newsletter subscription"
                />
                <button type="submit" className={styles.subscribeButton}>
                  <span className={styles.subscribeIcon}>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <div className={styles.copyright}>
            © {currentYear} Ethiopian Berhane Kristos Church. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
