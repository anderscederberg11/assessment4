import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <>
            <div className={styles.footerContainer}>
                <ul className={styles.footerContent}>
                    <li className={styles.listText}>Visit</li>
                    <li className={styles.listText}>Apply Now</li>
                    <li><img src="images/bcit_logo.png" alt="bcit logo" width={85} height={85}></img></li>
                    <li className={styles.listText}>Events</li>
                    <li className={styles.listText}>Careers</li>
                </ul>

            </div>
        </>
    )
}