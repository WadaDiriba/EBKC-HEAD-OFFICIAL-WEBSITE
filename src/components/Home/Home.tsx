import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import home1 from "../../assets/home1.png";
import Testmonial from "../Testmonial/Testmonial";
import WhatWeBelieve from "../Whatwebelive/whatwebelieve";
import FAQ from "../FAQ/FAQ";
import { FaPhoneAlt, FaEnvelope, FaTimes, FaComments, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showContactNotification, setShowContactNotification] = useState(false);
  const [notificationExiting, setNotificationExiting] = useState(false);
  const [hasSeenNotification, setHasSeenNotification] = useState(false);

  const slides = [
    { 
      image: home1, 
      title: "Welcome to Ethiopian Berhane Kristos Church", 
      subtitle: "Experience the light of Christ in our community" 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Show contact notification after 10 seconds if not seen before
  useEffect(() => {
    const notificationShown = localStorage.getItem('contactNotificationShown');
    
    if (!notificationShown) {
      const timer = setTimeout(() => {
        setShowContactNotification(true);
        localStorage.setItem('contactNotificationShown', 'true');
        setHasSeenNotification(true);
      }, 100); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseNotification = () => {
    setNotificationExiting(true);
    setTimeout(() => {
      setShowContactNotification(false);
      setNotificationExiting(false);
    }, 500);
  };

  const handleContactClick = () => {
    // Close notification and scroll to contact section or navigate
    handleCloseNotification();
    // If you have a contact section on the homepage
    // document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    // Or navigate to contact page
    window.location.href = '/contact';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/25111234567', '_blank');
  };

  return (
    <>
      {/* Contact Notification */}
      {showContactNotification && (
        <div className={`${styles.contactNotification} ${notificationExiting ? styles.notificationExit : styles.notificationEnter}`}>
          <div className={styles.notificationContent}>
            <div className={styles.notificationHeader}>
              <div className={styles.notificationIconContainer}>
                <FaComments className={styles.notificationIcon} />
                <div className={styles.notificationPulse}></div>
              </div>
              <h3>Need to Talk?</h3>
              <button 
                className={styles.notificationClose}
                onClick={handleCloseNotification}
                aria-label="Close notification"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className={styles.notificationBody}>
              <p className={styles.notificationText}>
                We're here for you! Whether you have questions, need prayer, or want to learn more about our church, our team is ready to help.
              </p>
              
              <div className={styles.contactOptions}>
                <button 
                  className={styles.contactOption}
                  onClick={handleContactClick}
                >
                  <FaEnvelope className={styles.optionIcon} />
                  <span>Send Message</span>
                </button>
                
                <button 
                  className={styles.contactOption}
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp className={styles.optionIcon} />
                  <span>WhatsApp</span>
                </button>
                
                <div className={styles.contactQuickInfo}>
                  <div className={styles.contactItem}>
                    <FaPhoneAlt className={styles.contactIcon} />
                    <span>+251 11 123 4567</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaEnvelope className={styles.contactIcon} />
                    <span>info@ebkc.org</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.notificationFooter}>
                <small>Office Hours: Mon-Fri 9AM-5PM</small>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Homepage Section */}
      <section id="home" className={styles.homeSection}>
        {/* Background Slider with Enhanced Animation */}
        <div className={styles.slider}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ""}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: `scale(${index === currentSlide ? 1.1 : 1}) translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
              }}
            />
          ))}
        </div>

        {/* Animated Overlay */}
        <div className={styles.overlay}></div>
        
        {/* Floating Particles */}
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}></div>
          ))}
        </div>

        {/* Content with Enhanced Animation */}
        <div className={styles.homeContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>✝</span>
              <span>Welcome</span>
            </div>
            
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine1}>Ethiopian Berhane</span>
              <span className={styles.titleLine2}>Kristos Church</span>
            </h1>
            
            <p className={styles.subtitle}>
              {slides[currentSlide].subtitle}
            </p>

            <div className={styles.buttonGroup}>
              <Link to="/about" className={`${styles.btn} ${styles.btnPrimary}`}>
                <span>Learn More</span>
                <span className={styles.btnArrow}>→</span>
              </Link>
              <Link to="/visit" className={`${styles.btn} ${styles.btnSecondary}`}>
                <span>Find Church</span>
                <span className={styles.btnArrow}>→</span>
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className={styles.slideIndicators}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Scroll Down</span>
        </div>
      </section>

      {/* Testmonial Section */}
      <section>
        <Testmonial />
      </section>

      {/* What We Believe Section */}
      <section>
        <WhatWeBelieve />
      </section>
      
      {/* FAQ Section */}
      <section>
        <FAQ />
      </section>
    </>
  );
}