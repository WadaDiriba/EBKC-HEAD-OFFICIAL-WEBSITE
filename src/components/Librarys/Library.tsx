import { useState, useEffect } from "react";
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
  FaQuestionCircle,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  year: string;
  available: boolean;
  description: string;
  fileFormat: string;
  fileSize: string;
  downloadUrl: string;
}

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showHowToUse, setShowHowToUse] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show notification on initial load with animation
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setShowHowToUse(false);
      }, 500);
    }, 8000); // Auto-hide after 8 seconds

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", name: "All Books", icon: <FaBook /> },
    { id: "bible", name: "Bible Studies", icon: <FaBible /> },
    { id: "theology", name: "Theology", icon: <FaGraduationCap /> },
    { id: "devotional", name: "Devotionals", icon: <FaPrayingHands /> },
    { id: "history", name: "Church History", icon: <FaBookOpen /> },
    { id: "children", name: "Children's Books", icon: <FaBookReader /> },
  ];

  // Sample books data with download information
  const sampleBooks: Book[] = [
    {
      id: 1,
      title: "The Complete Guide to Bible Study",
      author: "Dr. John Smith",
      category: "bible",
      year: "2023",
      available: true,
      description: "A comprehensive guide to studying the Bible effectively.",
      fileFormat: "PDF",
      fileSize: "5.2 MB",
      downloadUrl: "/books/complete-guide-bible-study.pdf"
    },
    {
      id: 2,
      title: "Systematic Theology",
      author: "Dr. Mary Johnson",
      category: "theology",
      year: "2022",
      available: true,
      description: "An in-depth exploration of Christian doctrine.",
      fileFormat: "EPUB",
      fileSize: "8.7 MB",
      downloadUrl: "/books/systematic-theology.epub"
    },
    {
      id: 3,
      title: "Daily Devotions for Believers",
      author: "Pastor David Lee",
      category: "devotional",
      year: "2024",
      available: true,
      description: "365 days of inspirational devotions.",
      fileFormat: "PDF",
      fileSize: "12.3 MB",
      downloadUrl: "/books/daily-devotions.pdf"
    },
    {
      id: 4,
      title: "History of the Ethiopian Church",
      author: "Prof. Alemayehu Tekle",
      category: "history",
      year: "2021",
      available: true,
      description: "A detailed account of Ethiopian church history.",
      fileFormat: "PDF",
      fileSize: "15.8 MB",
      downloadUrl: "/books/ethiopian-church-history.pdf"
    },
    {
      id: 5,
      title: "Children's Bible Stories",
      author: "Sarah Williams",
      category: "children",
      year: "2023",
      available: true,
      description: "Beautifully illustrated Bible stories for children.",
      fileFormat: "PDF",
      fileSize: "24.5 MB",
      downloadUrl: "/books/children-bible-stories.pdf"
    },
    {
      id: 6,
      title: "Understanding the Gospel",
      author: "Rev. Michael Brown",
      category: "theology",
      year: "2022",
      available: true,
      description: "A clear explanation of the Gospel message.",
      fileFormat: "MOBI",
      fileSize: "6.9 MB",
      downloadUrl: "/books/understanding-gospel.mobi"
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
    { number: "5000+", label: "Digital Books", icon: <FaBook /> },
    { number: "50+", label: "Digital Resources", icon: <FaLaptop /> },
    { number: "24/7", label: "Online Access", icon: <FaClock /> },
    { number: "Free", label: "Download", icon: <FaDownload /> },
  ];

  const services = [
    {
      icon: <FaDownload />,
      title: "Instant Download",
      description: "Download books instantly in PDF, EPUB, or MOBI format",
    },
    {
      icon: <FaBookOpen />,
      title: "Read Online",
      description: "Access e-books directly in your browser",
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

  const handleDownload = (book: Book) => {
    // In a real app, this would trigger the download
    console.log(`Downloading: ${book.title}`);
    window.open(book.downloadUrl, '_blank');
  };

  const handleCloseNotification = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowHowToUse(false);
    }, 500);
  };

  const handleShowHowToUse = () => {
    setShowHowToUse(true);
    setIsExiting(false);
  };

  return (
    <section className={styles.librarySection}>
      {/* Animated How to Use Notification */}
      {showHowToUse && (
        <div className={`${styles.notification} ${isExiting ? styles.notificationExit : styles.notificationEnter}`}>
          <div className={styles.notificationContent}>
            <div className={styles.notificationHeader}>
              <FaInfoCircle className={styles.notificationIcon} />
              <h3>How to Use Digital Library</h3>
              <button 
                className={styles.notificationClose}
                onClick={handleCloseNotification}
              >
                <FaTimes />
              </button>
            </div>
            <div className={styles.notificationBody}>
              <div className={styles.notificationSteps}>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>1</span>
                  <span>Search or filter books</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>2</span>
                  <span>Click Download button</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>3</span>
                  <span>Enjoy on any device!</span>
                </div>
              </div>
              <div className={styles.notificationFormats}>
                <span>Formats: </span>
                <span className={styles.formatTag}>PDF</span>
                <span className={styles.formatTag}>EPUB</span>
                <span className={styles.formatTag}>MOBI</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <FaBook className={styles.badgeIcon} />
            <span>Digital Library</span>
          </div>
          <h1 className={styles.heroTitle}>Church Digital Library</h1>
          <p className={styles.heroSubtitle}>
            Download thousands of books and digital resources instantly to enrich your faith journey
          </p>
          <button 
            className={styles.howToUseButton}
            onClick={handleShowHowToUse}
          >
            <FaQuestionCircle />
            Show Instructions
          </button>
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
              {selectedCategory === "all" ? "All Digital Books" : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <p className={styles.resultsCount}>
              {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"} available for download
            </p>
          </div>

          {filteredBooks.length > 0 ? (
            <div className={styles.booksGrid}>
              {filteredBooks.map((book) => (
                <div key={book.id} className={styles.bookCard}>
                  <div className={styles.bookCover}>
                    <FaBook className={styles.bookIcon} />
                    <div className={styles.fileInfo}>
                      <span className={styles.fileFormat}>{book.fileFormat}</span>
                      <span className={styles.fileSize}>{book.fileSize}</span>
                    </div>
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
                    <div className={styles.downloadInfo}>
                      <span className={styles.downloadFormat}>{book.fileFormat} format</span>
                      <span className={styles.downloadSize}>{book.fileSize}</span>
                    </div>
                    <button
                      className={styles.downloadButton}
                      onClick={() => handleDownload(book)}
                    >
                      <FaDownload className={styles.downloadIcon} />
                      Download Now
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
          <h2 className={styles.sectionTitle}>Digital Services</h2>
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
            <h2 className={styles.contactTitle}>Need Help with Downloads?</h2>
            <p className={styles.contactText}>
              Our library staff is here to assist you with file formats, e-reader setup, 
              or any technical issues you may encounter.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.contactIcon} />
                <span>+251 11 123 4567</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>digital-library@ebkc.org</span>
              </div>
              <div className={styles.contactItem}>
                <FaClock className={styles.contactIcon} />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <Link to="/contact" className={styles.contactButton}>
              Get Technical Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}