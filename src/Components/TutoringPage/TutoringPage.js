import meSnowyMendoza from './meSnowyMendoza.jpg';
import meAndHamishGraduation from './meAndHamishGraduation.webp';
import styles from './TutoringPage.module.css';
import React, {useState, useEffect} from 'react';


export default function TutoringPage(props) {

    return (
        <div className={styles.tutoringBackground}>
            <div className={styles.mainContent}>
                <div className={styles.introSubContent}>
                    <div>
                        <img src={meSnowyMendoza} alt="Will with Snowy Mendoza" />
                    </div>
                    <div className={styles.textContent}>
                        <h1>I do maths tutoring!</h1>
                        <p>I’ve been tutoring since 2019. See my testimonials below.</p>
                        <p>I tutor mathematics to Advanced Higher Level.</p>
                        <p>I can also tutor Physics to Higher / A Level, and English and Biology to National 5 / GCSE.</p>
                    </div>
                </div>
                <div className={styles.qualificationsSubContent}>
                    <div className={styles.textContent}>
                        <h1>My relevant qualifications.</h1>
                        <p>BSc Applied Mathematics | University of Edinburgh | 1st Class Hons</p>
                        <p>Advanced Higher | Mathematics A, Physics A, Biology A</p>
                        <p>Higher | Mathematics A, Physics A, Biology A, English A</p>
                    </div>
                    <div>
                        <img src={meAndHamishGraduation} alt="Will and Hamish at Graduation" />
                    </div>
                </div>
                <div className={styles.testimonialsHeader}>
                    <span>
                        <p>Read my...  <a>testimonials</a>.</p>
                    </span>
                </div>
            </div>
            <footer className={styles.footer}>
                <h2>Want to get in touch? I'd love to talk!</h2>
                <span>
                    Phone Number: <a href="tel:07732886737">07732886737</a>
                    Email:  <a href="mailto:williamteboyd@gmail.com">williamteboyd@gmail.com</a>
                </span>
            </footer>
        </div>
    );
};