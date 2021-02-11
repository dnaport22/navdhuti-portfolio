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
          <p className={styles.homeDescription_1_style_bio_h}>Bio</p>
          <p className={styles.homeDescription_1_style_bio_b}>I am Nav, a human first, then a 
          technologist. I write poetry to express the universe and code to get value out of data. 
          I am an experienced Data Engineer, a versatile tech entruprenuer and 
          an amazing person you will ever meet ;)</p>

        </div>
      </main>
    </div>
  )
}
