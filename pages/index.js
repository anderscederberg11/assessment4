import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <HeadArea title="Home" description="BCIT offers over 300 programs and 1000 part-time courses in 6 general areas of study. Search or browse our catalogues to find the right fit for the next step in your career."/>
      <Header/>
      <main className={`${styles.main}`}>
        <div id="container" className={styles.containerOne}>
          <h1 className={styles.homeTitle}>Welcome to BCIT</h1>
          <p className={styles.homeBody}>Different than a college or university, <br></br>the British Columbia Institute of Technology offers practice experience.</p>
          <Link href="/About"><button className={styles.aboutButton}>About</button></Link>
          <img src="images/BCIT-Burnaby-Campus.jpg" alt="BCIT Burnaby Campus" width={1000} height={450} className={styles.bcitCampus}></img>
        </div>
        <div className={styles.containerTwo}>
          <h2 className={styles.application}>Ready to Apply?</h2>
          <img src="images/photo2.jpg" alt="students walking" width={200} height={200} className={styles.studentsWalking}></img>
          <img src="images/photo1.jpg" alt="students studying" width={75} height={75} className={styles.studying}></img>
          <p className={styles.tuitionText}>Your tuition depends on<br></br> the type of program you enter.</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}
