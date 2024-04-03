import React, { useState, useEffect } from 'react';
import styles from "./DesignGoals.module.css";

export default function DesignGoals() {
    const [index, setIndex] = useState(0);
    const words = ['Design', 'Test', 'Develop'];
    const numbers = ['1.', '2.', '3.'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <div className={styles.goalsContainer}>
                <h2 className={styles.threeGoals}>3 Good Design Goals</h2>
                <h2 className={styles.goals}>{numbers[index]}<span className={styles.design}>{words[index]}</span></h2>
                <img src="images/photo1.jpg" alt="students studying" width={150} height={150} className={styles.studying}></img>
            </div>
        </>
    )
}
