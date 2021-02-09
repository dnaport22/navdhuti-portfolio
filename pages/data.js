import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Data() {
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
          Data
        </p>

      </main>

      <footer className={styles.footer}>
        Navdeep Dhuti © All rights reserved.
      </footer>
    </div>
  )
}
