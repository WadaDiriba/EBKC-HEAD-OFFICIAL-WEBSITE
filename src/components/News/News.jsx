    import React from "react";
    import { db } from "../../firebase";
    import styles from "./News.module.css";

export default function News() {
  const getNews = () => {
    const news = db.collection("news").get();
    console.log(news);
  }
  return (
    <div>
      <button onClick={getNews}>Get News</button>

 <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Latest News</h2>
        <div className={styles.newsGrid}>
          {/* News items will be added here */}


          <div className={styles.newsItem}>
            <h3>News Item 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className={styles.newsItem}>
            <h3>News Item 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className={styles.newsItem}>
            <h3>News Item 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>  
      </div>


      
    </section>

    </div>
  );
}