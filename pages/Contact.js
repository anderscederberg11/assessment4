import Head from "next/head";
import styles from "@/styles/Contact.module.css";
import HeadArea from "@/components/HeadArea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Link from "next/link";

export default function Contact() {
    return(
        <div className={styles.page}>
            <HeadArea title="Contact Us" description="Please contact us if you have any questions."/>
            <Header/>
            <main className={styles.contactMain}>
                <h1 className={styles.contactTitle}>Contact Us</h1>
                <Form/>
            </main>
                <Footer/>  
        </div>
    )
}