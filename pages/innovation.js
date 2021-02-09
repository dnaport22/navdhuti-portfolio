import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import data from '../portfolio-content.json'

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

        {
          data.content.innovation.map((data) => {
            return (
              <div className={styles.gridContent}>
                <html className={styles.embed} dangerouslySetInnerHTML={{__html: data.content}}/>
              </div>
            )
         })
        }

      </main>

      <footer className={styles.footer}>
        Navdeep Dhuti © All rights reserved.
      </footer>
    </div>
  )
}


