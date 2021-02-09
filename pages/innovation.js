import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import data from '../portfolio-content.json'

export default function Innovation() {
  const imgLoader = ({src}) => {
    return `${src}`
  }
  return (
    <div className={styles.container}>
      <Head>
        <title className={styles.title}>Navdeep Dhuti</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Navdeep Dhuti | Innovation" key="Navdeep Dhuti" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
              <a href={data.url} target="_blank" className={styles.card}>
              <div className={styles.overlayContentSection}>
                <p className={styles.contentTitle}>{data.title}</p>
                <p className={styles.contentDescription}>{data.description}</p>
              </div>
                <Image
                  loader={imgLoader}
                  src={data.image}
                  alt={data.title}
                  width="500"
                  height="500"
                  className={styles.imageContent}
                  priority={true}
                />
              </a>
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


