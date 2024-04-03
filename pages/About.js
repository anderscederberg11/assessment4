import Head from "next/head"
import styles from "@/styles/About.module.css"
import HeadArea from "@/components/HeadArea"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import DesignGoals from "@/components/DesignGoals"

export default function About() {
    return (
        <>
        <HeadArea title="About" description="Find out more about BCIT"/>
        <Header/>
        <main className={`${styles.main}`}>
         <div className={styles.aboutContainer}>
            <h1 className={styles.aboutTitle}>About</h1>
            <img src="images/BCIT-Burnaby-Campus.jpg" alt="bcit campus" width={900} height={375} className={styles.bcitCampus}></img>
            <p className={styles.aboutBody}>We offer practical career credentials designed for the workplace, from diplomas and certificates to bachelor's <br></br>and master's degrees</p>
         </div>
        <DesignGoals/>
        </main>
        <Footer/>
        </>
    )
}
