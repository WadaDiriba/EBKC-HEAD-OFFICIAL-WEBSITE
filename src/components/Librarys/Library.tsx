import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Library.module.css";
import {
  FaBook,
  FaSearch,
  FaBookOpen,
  FaUser,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
  FaBookReader,
  FaGraduationCap,
  FaBible,
  FaPrayingHands,
  FaVideo,
  FaHeadphones,
  FaLaptop,
  FaFilter,
} from "react-icons/fa";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  year: string;
  available: boolean;
  description: string;
}

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Books", icon: <FaBook /> },
    { id: "bible", name: "Bible Studies", icon: <FaBible /> },
    { id: "theology", name: "Theology", icon: <FaGraduationCap /> },
    { id: "devotional", name: "Devotionals", icon: <FaPrayingHands /> },
    { id: "history", name: "Church History", icon: <FaBookOpen /> },
    { id: "children", name: "Children's Books", icon: <FaBookReader /> },
  ];

  // Sample books data - will be replaced with backend data
  const sampleBooks: Book[] = [
    {
      id: 1,
      title: "The Complete Guide to Bible Study",
      author: "Dr. John Smith",
      category: "bible",
      year: "2023",
      available: true,
      description: "A comprehensive guide to studying the Bible effectively.",
    },
    {
      id: 2,
      title: "Systematic Theology",
      author: "Dr. Mary Johnson",
      category: "theology",
      year: "2022",
      available: true,
      description: "An in-depth exploration of Christian doctrine.",
    },
    {
      id: 3,
      title: "Daily Devotions for Believers",
      author: "Pastor David Lee",
      category: "devotional",
      year: "2024",
      available: true,
      description: "365 days of inspirational devotions.",
    },
    {
      id: 4,
      title: "History of the Ethiopian Church",
      author: "Prof. Alemayehu Tekle",
      category: "history",
      year: "2021",
      available: false,
      description: "A detailed account of Ethiopian church history.",
    },
    {
      id: 5,
      title: "Children's Bible Stories",
      author: "Sarah Williams",
      category: "children",
      year: "2023",
      available: true,
      description: "Beautifully illustrated Bible stories for children.",
    },
    {
      id: 6,
      title: "Understanding the Gospel",
      author: "Rev. Michael Brown",
      category: "theology",
      year: "2022",
      available: true,
      description: "A clear explanation of the Gospel message.",
    },
  ];

  const filteredBooks = sampleBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const libraryStats = [
    { number: "5000+", label: "Books Available", icon: <FaBook /> },
    { number: "50+", label: "Digital Resources", icon: <FaLaptop /> },
    { number: "24/7", label: "Online Access", icon: <FaClock /> },
    { number: "Free", label: "Membership", icon: <FaUser /> },
  ];

  const services = [
    {
      icon: <FaBookOpen />,
      title: "Book Lending",
      description: "Borrow physical books for up to 2 weeks",
    },
    {
      icon: <FaDownload />,
      title: "Digital Resources",
      description: "Access e-books and digital materials online",
    },
    {
      icon: <FaVideo />,
      title: "Video Library",
      description: "Watch sermons, teachings, and documentaries",
    },
    {
      icon: <FaHeadphones />,
      title: "Audio Books",
      description: "Listen to audiobooks and podcasts",
    },
  ];

  return (
    <section className={styles.librarySection}>
      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <FaBook className={styles.badgeIcon} />
            <span>Our Library</span>
          </div>
          <h1 className={styles.heroTitle}>Church Library & Resource Center</h1>
          <p className={styles.heroSubtitle}>
            Discover thousands of books, digital resources, and study materials to enrich your faith journey
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Library Stats */}
        <div className={styles.statsGrid}>
          {libraryStats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className={styles.searchSection}>
          <div className={styles.searchCard}>
            <div className={styles.searchBar}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search books, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <div className={styles.categoryFilter}>
              <FaFilter className={styles.filterIcon} />
              <div className={styles.categoryButtons}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.categoryButtonActive : ""}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className={styles.booksSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {selectedCategory === "all" ? "All Books" : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <p className={styles.resultsCount}>
              {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"} found
            </p>
          </div>

          {filteredBooks.length > 0 ? (
            <div className={styles.booksGrid}>
              {filteredBooks.map((book) => (
                <div key={book.id} className={styles.bookCard}>
                  <div className={styles.bookCover}>
                    <FaBook className={styles.bookIcon} />
                    {!book.available && (
                      <div className={styles.unavailableBadge}>Checked Out</div>
                    )}
                  </div>
                  <div className={styles.bookInfo}>
                    <h3 className={styles.bookTitle}>{book.title}</h3>
                    <p className={styles.bookAuthor}>by {book.author}</p>
                    <p className={styles.bookDescription}>{book.description}</p>
                    <div className={styles.bookMeta}>
                      <span className={styles.bookCategory}>
                        {categories.find((c) => c.id === book.category)?.name}
                      </span>
                      <span className={styles.bookYear}>{book.year}</span>
                    </div>
                    <button
                      className={`${styles.borrowButton} ${!book.available ? styles.borrowButtonDisabled : ""}`}
                      disabled={!book.available}
                    >
                      {book.available ? "Borrow Book" : "Unavailable"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <FaBook className={styles.noResultsIcon} />
              <h3>No books found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Library Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactCard}>
            <h2 className={styles.contactTitle}>Need Help?</h2>
            <p className={styles.contactText}>
              Our library staff is here to assist you. Contact us for book recommendations, 
              research assistance, or to learn more about our resources.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.contactIcon} />
                <span>+251 11 123 4567</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>library@ebkc.org</span>
              </div>
              <div className={styles.contactItem}>
                <FaClock className={styles.contactIcon} />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <Link to="/contact" className={styles.contactButton}>
              Contact Library Staff
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
