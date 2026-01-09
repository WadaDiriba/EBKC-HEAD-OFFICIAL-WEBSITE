import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./visit.module.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaSearch,
  FaDirections,
} from "react-icons/fa";

export default function Visit() {
  const [searchQuery, setSearchQuery] = useState("");

  const locations = [
    {
      name: "Head Office Bureau",
      address: "3P54+GWH, Addis Ababa, Ethiopia",
      phone: "+251 11 123 4567",
      email: "Yayoo12@gmail.com",
      hours: " Monday -Saturday"
    },
   
  ];

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={styles.visitSection}>
      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <FaMapMarkerAlt className={styles.badgeIcon} />
            <span>Find Us</span>
          </div>
          <h1 className={styles.heroTitle}>Visit Our Church</h1>
          <p className={styles.heroSubtitle}>
            We welcome you to join us for worship, fellowship, and spiritual growth. 
            Find the nearest location and plan your visit.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Search Section */}
        <div className={styles.searchSection}>
          <div className={styles.searchCard}>
            <div className={styles.searchBar}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search by location name or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className={styles.locationsSection}>
          <h2 className={styles.sectionTitle}>Our Locations</h2>
          <div className={styles.locationsGrid}>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, index) => (
                <div key={index} className={styles.locationCard}>
                  <div className={styles.locationHeader}>
                    <FaMapMarkerAlt className={styles.locationIcon} />
                    <h3 className={styles.locationName}>{location.name}</h3>
                  </div>
                  
                  <div className={styles.locationInfo}>
                    <div className={styles.infoItem}>
                      <FaMapMarkerAlt className={styles.infoIcon} />
                      <span className={styles.infoText}>{location.address}</span>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <FaPhoneAlt className={styles.infoIcon} />
                      <a href={`tel:${location.phone}`} className={styles.infoLink}>
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <FaEnvelope className={styles.infoIcon} />
                      <a href={`mailto:${location.email}`} className={styles.infoLink}>
                        {location.email}
                      </a>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <FaClock className={styles.infoIcon} />
                      <pre className={styles.hoursText}>{location.hours}</pre>
                    </div>
                  </div>

                  <div className={styles.locationActions}>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.directionsButton}
                    >
                      <FaDirections />
                      Get Directions
                    </a>
                    <Link to="/contact" className={styles.contactButton}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                <FaMapMarkerAlt className={styles.noResultsIcon} />
                <h3>No locations found</h3>
                <p>Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <h2 className={styles.sectionTitle}>Interactive Map</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.949019105284!2d38.73690771531384!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854ababc123%3A0xabcdef1234567890!2sEthiopian%20Berhane%20Kristos%20Church!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
              title="Church Location"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Plan Your First Visit</h2>
            <p className={styles.ctaText}>
              New to our church? We'd love to welcome you! Contact us to learn more 
              about our services, programs, and how to get involved.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.ctaButtonPrimary}>
                Contact Us
              </Link>
              <Link to="/about" className={styles.ctaButtonSecondary}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
