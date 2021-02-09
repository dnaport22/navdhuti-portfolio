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
              <div className={styles.parallax}>
              <div className={styles.parallaxTopLeft}></div>
              <div className={styles.parallaxTopRight}></div>
              <div className={styles.parallaxBottomLeft}></div>
              <div className={styles.parallaxBottomRight}></div>
              <div className={styles.parallaxContent }>
              <a href={data.url} target="_blank">
              <div className={styles.overlayContentSection + " " + styles.parallaxFront}>
                <p className={styles.contentTitle}>{data.title} <br/>
                <a className={styles.contentDescription}>{data.description}</a></p>
              </div>
                <Image
                  loader={imgLoader}
                  src={data.image}
                  alt={data.title}
                  width="500"
                  height="500"
                  className={styles.imageContent + " " + styles.parallaxBack}
                  priority={true}
                />
              </a>
              </div>
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


