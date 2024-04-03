import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    const router = useRouter();

    return (
        <div className={styles.headerContainer}>
            <ul className={styles.headerList}>
                <li>
                    <img src="images/bcit_logo.png" alt="bcit logo" width={65} height={65} />
                </li>
                <li className={router.pathname === "/" ? styles.listHomeActive : styles.listHome} >
                    <Link href="/" style={{textDecoration: "none", color: "var(--black)"}}>Home</Link>
                </li>
                <li className={router.pathname === "/About" ? styles.listAboutActive : styles.listAbout}>
                    <Link href="/About" style={{textDecoration: "none", color: "var(--black)"}}>About</Link>
                </li>
                <li className={router.pathname === "/Contact" ? styles.listContactActive : styles.listContact}>
                    <Link href="/Contact" style={{textDecoration: "none", color: "var(--black)"}}>Contact Us</Link>
                </li>
                <li className={styles.menuBar}>
                    <img src="images/bars.png" alt="image of bar" width={45} height={15} />
                </li>
            </ul>
        </div>
    );
}
