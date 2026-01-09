import React, { useState, useEffect } from "react";
import styles from "./Campus.module.css";

interface Location {

  name: string;
  email: string;
  phone: string;
  address: string;
 
 
}

interface ProgramCategory {
  category: string;
  items: string[];
}

interface GraduationImage {
  id: number;
  url: string;
  text: string;
  overlayText: string;
}

export default function Campus() {
  const [locations] = useState<Location[]>([
    {
     
      name: "Kachis Campus",
      email: "wedadiriba@gmail.com",
      phone: "0985159172",
      address: "kechis,01",
     
     
    },
    {
     
      name: "Eastside Campus",
      email: "east@churchcampus.org",
      phone: "(555) 234-5678",
      address: "456 Faith Ave, East District",
     
    
    },
    {
    
      name: "Westside Campus",
      email: "west@churchcampus.org",
      phone: "(555) 345-6789",
      address: "789 Grace Blvd, West Hills",
     
     
    },
    {
    
      name: "North Campus",
      email: "north@churchcampus.org",
      phone: "(555) 456-7890",
      address: "101 Hope Lane, North County",
      
     
    },
    {
    
      name: "South Campus",
      email: "south@churchcampus.org",
      phone: "(555) 567-8901",
      address: "202 Peace Rd, South Suburbs",
    
     
    },
    {
    
      name: "Riverfront Campus",
      email: "river@churchcampus.org",
      phone: "(555) 678-9012",
      address: "303 Mercy Way, River District",
    
    },
    {
     
      name: "Hilltop Campus",
      email: "hilltop@churchcampus.org",
      phone: "(555) 789-0123",
      address: "404 Glory Heights, Mountain View",
     
    },
    {
      
      name: "Valley Campus",
      email: "valley@churchcampus.org",
      phone: "(555) 890-1234",
      address: "505 Redemption Valley, Green Acres",
     
    },
    {
     
      name: "Lakeside Campus",
      email: "lake@churchcampus.org",
      phone: "(555) 901-2345",
      address: "606 Serenity Lake, Lakeside",
    
    },
    {
     
      name: "Heritage Campus",
      email: "heritage@churchcampus.org",
      phone: "(555) 012-3456",
      address: "707 Legacy Plaza, Old Town",
     
    },
    {
      
      name: "Metro Campus",
      email: "metro@churchcampus.org",
      phone: "(555) 112-2334",
      address: "808 Urban Center, Downtown Metro",
    
    },
    {
     
      name: "Community Campus",
      email: "community@churchcampus.org",
      phone: "(555) 223-3445",
      address: "909 Unity Square, Community Center",
     
    }
  ]);

  const [programs] = useState<ProgramCategory[]>([
    {
      category: "Spiritual Growth",
      items: ["Bible Study Classes", "Discipleship Training", "Prayer Ministry", "Theology Courses", "Spiritual Gifts Discovery"]
    },
    {
      category: "Ministry Training",
      items: ["Leadership Development", "Worship Ministry Training", "Children's Ministry Certification", "Evangelism Training", "Pastoral Counseling"]
    },
    {
      category: "Community Services",
      items: ["Marriage & Family Counseling", "Financial Peace University", "Addiction Recovery Programs", "Career Development", "Health & Wellness Workshops"]
    },
    {
      category: "Specialized Ministries",
      items: ["Youth & Teen Programs", "Senior Adult Ministry", "Men's & Women's Ministries", "Music & Arts Ministry", "Mission Training Programs"]
    }
  ]);

  const [graduationImages] = useState<GraduationImage[]>([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      text: "2023 Graduation: 250 Students Commissioned for Ministry",
      overlayText: "Equipped to serve, called to lead, prepared to transform"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      text: "Biblical Studies Graduates Ready to Serve",
      overlayText: "Transforming lives through biblical education"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      text: "Worship Ministry Graduates Leading Praise",
      overlayText: "Raising up the next generation of worship leaders"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      text: "Leadership Training Graduates Changing Communities",
      overlayText: "Equipped to lead with wisdom and compassion"
    }
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (!autoSlide) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === graduationImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [graduationImages.length, autoSlide]);

  const handleLocationClick = (location: Location) => {
    alert(`${location.name}\n📞 ${location.phone}\n✉️ ${location.email}\n📍 ${location.address}`);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === graduationImages.length - 1 ? 0 : prev + 1
    );
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? graduationImages.length - 1 : prev - 1
    );
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Church Campus Network</h1>
          <p className={styles.heroSubtitle}>Multiple Locations, One Mission: Making Disciples of All Nations</p>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>12</span>
              <span className={styles.statLabel}>Campuses</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Programs</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5000+</span>
              <span className={styles.statLabel}>Students</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>
          
          <button 
            className={styles.primaryBtn}
            onClick={() => {
              document.querySelector(`.${styles.locations}`)?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Find Your Nearest Campus
          </button>
        </div>
      </section>

      {/* GRADUATION SLIDER */}
      <section className={styles.sliderSection}>
        <h2 className={styles.sectionTitle}>Celebrating Success Stories</h2>
        <p className={styles.sectionSubtitle}>Transforming Lives Through Biblical Education</p>
        
        <div className={styles.sliderContainer}>
          <button 
            className={styles.sliderNav} 
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <div className={styles.sliderWrapper}>
            <div
              className={styles.slider}
              style={{
                backgroundImage: `url(${graduationImages[currentImageIndex].url})`
              }}
            >
              <div className={styles.sliderOverlay}>
                <h3>{graduationImages[currentImageIndex].text}</h3>
                <p>{graduationImages[currentImageIndex].overlayText}</p>
              </div>
            </div>
            
            <div className={styles.sliderDots}>
              {graduationImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button 
            className={styles.sliderNav} 
            onClick={handleNextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </section>

      {/* CAMPUS LOCATIONS */}
      <section className={styles.locations}>
        <h2 className={styles.sectionTitle}>Our Campus Locations</h2>
        <p className={styles.sectionSubtitle}>Find a campus near you and join our growing community</p>
        
        <div className={styles.grid}>
          {locations.map((loc) => (
            <div
             
              className={styles.card}
              onClick={() => handleLocationClick(loc)}
            >
              <div className={styles.cardHeader}>
                <h3>{loc.name}</h3>
              
              </div>
              
              <div className={styles.cardInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>📍</span>
                  <span className={styles.infoText}>{loc.address}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>📞</span>
                  <span className={styles.infoText}>{loc.phone}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>✉️</span>
                  <span className={styles.infoText}>{loc.email}</span>
                </div>
               
              </div>
             
              
              <button className={styles.secondaryBtn}>
                Visit This Campus
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className={styles.programs}>
        <h2 className={styles.sectionTitle}>Our Educational Programs</h2>
        <p className={styles.sectionSubtitle}>Comprehensive training for every stage of spiritual growth</p>
        
        <div className={styles.programGrid}>
          {programs.map((cat, i) => (
            <div key={i} className={styles.programCard}>
              <div className={styles.programHeader}>
                <h3>{cat.category}</h3>
                <div className={styles.programIcon}>
                  {i === 0 && '📖'}
                  {i === 1 && '🎓'}
                  {i === 2 && '🤝'}
                  {i === 3 && '🌟'}
                </div>
              </div>
              
              <ul className={styles.programList}>
                {cat.items.map((item, idx) => (
                  <li key={idx}>
                    <span className={styles.bullet}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className={styles.primaryBtn}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
          <p className={styles.ctaSubtitle}>Join thousands of students transforming their lives through biblical education</p>
          
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Apply Now</button>
            <button className={styles.outlineBtn}>Schedule a Campus Tour</button>
          </div>
        </div>
      </section>

     
    </div>
  );
}