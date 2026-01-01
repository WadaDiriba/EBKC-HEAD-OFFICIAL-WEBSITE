import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import Testmonial from "../Testmonial/Testmonial";
import WhatWeBelieve from "../Whatwebelive/whatwebelieve";
import FAQ from "../FAQ/FAQ"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    { image: home1, title: "Welcome to Ethiopian Berhane Kristos Church", subtitle: "Experience the light of Christ in our community" },
    { image: home2, title: "Building Faith, Transforming Lives", subtitle: "Join us in worship and fellowship" },
    { image: home3, title: "A Community of Love and Hope", subtitle: "Where faith meets action" }
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

  return (
    <>
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
