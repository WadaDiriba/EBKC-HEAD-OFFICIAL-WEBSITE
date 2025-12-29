import styles from "./history.module.css";

export default function History() {
  return (
    <section className={styles.historySection} id="history">
      <div className={styles.container}>
        <h1 className={styles.title}>Our History</h1>

        {/* Paragraphs row */}
        <div className={styles.paragraphRow}>
          <div className={styles.paragraphBox}>
            <p className={styles.paragraph}>
              The Ethiopian Berhana Kristos Church, formerly known as the Ethiopian Baptist Church,
              was established through Gospel missionaries who came from the United States in 1941.
              The ministry began in Addis Ababa, at Arat Kilo, with a strong vision to spread
              the Gospel of the Kingdom of God.
            </p>
          </div>

          <div className={styles.paragraphBox}>
            <p className={styles.paragraph}>
              With a special focus on reaching the Oromo people, the church expanded its mission
              to areas such as Arsi, Ambo, Gindebarat, Jimma, and beyond. Alongside evangelism,
              hospitals and health centers were built to serve the physical and spiritual needs
              of the community.
            </p>
          </div>

          <div className={styles.paragraphBox}>
            <p className={styles.paragraph}>
              Despite challenges and divisions, the church continued to grow. Today, the Ethiopian
              Berhana Kristos Church stands as a testimony to God's faithfulness, actively
              contributing to the expansion of His Kingdom across Ethiopia.
            </p>
          </div>
        </div>

        {/* Download */}
        <div className={styles.downloadWrapper}>
          <a
            href="/apk/app-armeabi-v7a-release.apk"
            download
            className={styles.downloadBtn}
          >
             Continue Reading in Our Mobile App
          </a>
          <p className={styles.downloadNote}>
            Full history • Offline reading • Official Church App
          </p>
        </div>
      </div>
    </section>
  );
}
