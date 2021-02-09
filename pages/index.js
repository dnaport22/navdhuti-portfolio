import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
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
          Creating magic with technology and love with poetry!
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
          <div className={styles.sectiontext}>Data</div>
            <Image
              src="/assets/images/data.png"
              alt="Data"
              width={500}
              height={500}
              className={styles.image}
              priority={true}
            />
          </a>

          <a href="#" className={styles.card}>
          <div className={styles.sectiontext}>Innovation</div>
            <Image
              src="/assets/images/innovation.png"
              alt="Innovation"
              width={500}
              height={500}
              className={styles.image}
              priority={true}
            />
          </a>

          <a href="#" className={styles.card}>
          <div className={styles.sectiontext}>Poetry</div>
            <Image
              src="/assets/images/poetry.png"
              alt="Poetry"
              width={500}
              height={500}
              className={styles.image}
              priority={true}
            />
          </a>

          <a href="#" className={styles.card}>
          <div className={styles.sectiontext}>Life</div>
            <Image
              src="/assets/images/life.png"
              alt="Life"
              width={500}
              height={500}
              className={styles.image}
              priority={true}
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Navdeep Dhuti © All rights reserved.
      </footer>
    </div>
  )
}
