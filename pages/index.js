import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    // Hero Titlepage
    <div className={styles.container}>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">

          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
              <a className="btn btn-ghost normal-case text-xl">KGV Medical Society</a>
            </div>
          </div>

          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <img src="https://github.com/wylited/KGVMedicalSociety/raw/main/public/KGVMedSociety.png" class="max-w-sm rounded-lg shadow-2xl" />
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello There!</h1>
                <p className="py-6">Get updated on the latest medical discoveries!</p>
                <button className="btn btn-primary">Find out more.</button>
              </div>
            </div>
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by KGV Medical Society</p>
        </div>
      </footer>
    </div>
  )
}
