import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const isValidFirstName = /^[A-Za-z]+$/.test(firstName) && firstName.length > 1;
    const isValidLastName = /^[A-Za-z]+$/.test(lastName) && lastName.length > 1;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isSubmitEnabled = isValidFirstName && isValidLastName && isValidEmail && isChecked;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitEnabled) {
            // Submit form logic here, if needed
            setShowThankYou(true);
        }
    };

    return (
        <>
            {showThankYou ? (
                <h2 className={styles.thanks}>Thank you, your form has been submitted</h2>
            ) : (
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h2>Have any questions?</h2>
                        <p className={styles.placeholder}>First Name:</p>
                        <input
                            type="text"
                            className={styles.textInput}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <p className={styles.placeholder}>Last Name:</p>
                        <input
                            type="text"
                            className={styles.textInput}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <p className={styles.placeholder}>Email:</p>
                        <input
                            type="email"
                            className={styles.textInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className={styles.placeholder}>
                            Do you agree with the terms?:
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                        </p>
                        <div className={styles.buttonBox}>
                            {isSubmitEnabled && (
                                <input type="submit" value="Submit" className={styles.submit} />
                            )}
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
