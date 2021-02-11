import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.title}>Navdeep Dhuti</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Navdeep Dhuti | Portfolio" key="Navdeep Dhuti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <Image src={"/assets/images/bg.jpg"}
          layout="fill"
          objectFit="cover"
          className={styles.bg}
          />
        <div className={styles.homeTitle}>
          <h1 className={styles.homeName}>N<a className={styles.homeDescription_1_style}>a </a>vdeep Dhut
          <a className={styles.homeDescription_1_style}> i</a></h1>
          <h3 className={styles.homeDescription_1}>creating magic with 
          <a className={styles.homeDescription_1_style}> technology  </a> & love with 
          <a className={styles.homeDescription_1_style}> poetry</a></h3>

        </div>
      </main>

      <footer className={styles.footer}>
        Navdeep Dhuti © All rights reserved.
      </footer>
    </div>
  )
}
