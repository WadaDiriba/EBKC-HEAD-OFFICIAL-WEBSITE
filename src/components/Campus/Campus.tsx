import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Campus.module.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUsers,
  FaBuilding,
  FaParking,
  FaWifi,
  FaUtensils,
  FaChild,
  FaPrayingHands,
  FaBook,
  FaMusic,
} from "react-icons/fa";

export default function Campus() {
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  const campusInfo = {
    name: "Ethiopian Berhane Kristos Church Campus",
    address: "3P54+GWH, Addis Ababa, Ethiopia",
    phone: "+251 11 123 4567",
    email: "campus@ebkc.org",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: 7:00 AM - 2:00 PM",
  };

  const facilities = [
    {
      id: 1,
      name: "Main Sanctuary",
      description: "Our beautiful main worship hall with seating for 500+ congregants",
      icon: <FaPrayingHands />,
      capacity: "500+",
      features: ["Sound System", "Projection", "Air Conditioning"],
    },
    {
      id: 2,
      name: "Youth Center",
      description: "Modern facility for youth programs, Bible studies, and fellowship",
      icon: <FaChild />,
      capacity: "150",
      features: ["Gaming Area", "Study Rooms", "Café"],
    },
    {
      id: 3,
      name: "Library & Resource Center",
      description: "Extensive collection of Christian literature and study materials",
      icon: <FaBook />,
      capacity: "50",
      features: ["Reading Area", "Study Desks", "Digital Resources"],
    },
    {
      id: 4,
      name: "Conference Hall",
      description: "Versatile space for meetings, seminars, and special events",
      icon: <FaBuilding />,
      capacity: "200",
      features: ["AV Equipment", "Stage", "Catering"],
    },
    {
      id: 5,
      name: "Music & Media Room",
      description: "Dedicated space for choir practice and media production",
      icon: <FaMusic />,
      capacity: "30",
      features: ["Recording Studio", "Instruments", "Editing Suite"],
    },
    {
      id: 6,
      name: "Children's Ministry",
      description: "Safe and engaging environment for children's programs",
      icon: <FaChild />,
      capacity: "100",
      features: ["Play Area", "Classrooms", "Nursery"],
    },
  ];

  const amenities = [
    { icon: <FaParking />, name: "Free Parking", description: "Ample parking space for all visitors" },
    { icon: <FaWifi />, name: "Free WiFi", description: "High-speed internet throughout the campus" },
    { icon: <FaUtensils />, name: "Cafeteria", description: "Fresh meals and refreshments available" },
    { icon: <FaBuilding />, name: "Accessibility", description: "Wheelchair accessible facilities" },
  ];

  const campusStats = [
    { number: "45+", label: "Years Serving", icon: <FaBuilding /> },
    { number: "500+", label: "Seating Capacity", icon: <FaUsers /> },
    { number: "12", label: "Facilities", icon: <FaBuilding /> },
    { number: "24/7", label: "Prayer Support", icon: <FaPrayingHands /> },
  ];

  return (
    <section className={styles.campusSection}>
      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <FaMapMarkerAlt className={styles.badgeIcon} />
            <span>Our Campus</span>
          </div>
          <h1 className={styles.heroTitle}>Welcome to Our Campus</h1>
          <p className={styles.heroSubtitle}>
            A place of worship, fellowship, and spiritual growth in the heart of Addis Ababa
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Campus Stats */}
        <div className={styles.statsGrid}>
          {campusStats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Campus Information */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h2 className={styles.sectionTitle}>Campus Information</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt className={styles.infoIcon} />
                <div>
                  <h3>Address</h3>
                  <p>{campusInfo.address}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FaPhoneAlt className={styles.infoIcon} />
                <div>
                  <h3>Phone</h3>
                  <a href={`tel:${campusInfo.phone}`}>{campusInfo.phone}</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FaEnvelope className={styles.infoIcon} />
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${campusInfo.email}`}>{campusInfo.email}</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FaClock className={styles.infoIcon} />
                <div>
                  <h3>Office Hours</h3>
                  <pre className={styles.hoursText}>{campusInfo.hours}</pre>
                </div>
              </div>
            </div>
            <div className={styles.mapPlaceholder}>
              <FaMapMarkerAlt className={styles.mapIcon} />
              <p>Interactive Map Coming Soon</p>
              <Link to="/visit" className={styles.mapButton}>
                Get Directions
              </Link>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className={styles.facilitiesSection}>
          <h2 className={styles.sectionTitle}>Our Facilities</h2>
          <p className={styles.sectionSubtitle}>
            Explore our state-of-the-art facilities designed to serve our community
          </p>
          <div className={styles.facilitiesGrid}>
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className={`${styles.facilityCard} ${selectedFacility === facility.id ? styles.facilityCardActive : ""}`}
                onMouseEnter={() => setSelectedFacility(facility.id)}
                onMouseLeave={() => setSelectedFacility(null)}
              >
                <div className={styles.facilityIcon}>{facility.icon}</div>
                <h3 className={styles.facilityName}>{facility.name}</h3>
                <p className={styles.facilityDescription}>{facility.description}</p>
                <div className={styles.facilityDetails}>
                  <div className={styles.capacity}>
                    <FaUsers />
                    <span>Capacity: {facility.capacity}</span>
                  </div>
                  <div className={styles.features}>
                    {facility.features.map((feature, idx) => (
                      <span key={idx} className={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Section */}
        <div className={styles.amenitiesSection}>
          <h2 className={styles.sectionTitle}>Campus Amenities</h2>
          <div className={styles.amenitiesGrid}>
            {amenities.map((amenity, index) => (
              <div key={index} className={styles.amenityCard}>
                <div className={styles.amenityIcon}>{amenity.icon}</div>
                <h3 className={styles.amenityName}>{amenity.name}</h3>
                <p className={styles.amenityDescription}>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit CTA */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Plan Your Visit</h2>
            <p className={styles.ctaText}>
              We welcome you to visit our campus and experience our community. 
              Schedule a tour or join us for worship.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/visit" className={styles.ctaButtonPrimary}>
                Schedule a Visit
              </Link>
              <Link to="/contact" className={styles.ctaButtonSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
