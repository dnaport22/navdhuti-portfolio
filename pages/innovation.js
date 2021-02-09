import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Innovation() {
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.title}>Navdeep Dhuti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Navdeep Dhuti
        </h1>

        <p className={styles.description}>
          Innovation
        </p>

        <div className={styles.grid}>
          <iframe 
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6567722834196471808" 
            height="823" width="504" frameborder="0" 
            allowfullscreen="" title="Embedded post">
          </iframe>
        </div>

      </main>

      <footer className={styles.footer}>
        Navdeep Dhuti © All rights reserved.
      </footer>
    </div>
  )
}
