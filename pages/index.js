import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    // Hero Titlepage
    <div className={styles.container}>
      <Head>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">KGV Medical Society</h1>
              <p className="py-6">Get updated on the latest medical discoveries!</p>
              <button className="btn btn-primary">Find out more.</button>
            </div>
          </div>
        </div>
      </Head>

      // Main content, posts go here.
      <main className={styles.main}>
      </main>

      // Footer
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by KGV Medical Society</p>
        </div>
      </footer>
    </div>
  )
}
