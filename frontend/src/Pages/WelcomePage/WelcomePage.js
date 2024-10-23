import linkedInLogo from './LI-Logo.png';
import githubLogo from './github-mark.png';
import ColoursWill from './meColourCafe.jpg';
import styles from './WelcomePage.module.css';

export default function WelcomePage(props) {


    return (
        <div className={styles.background}>
            <div className={styles.mainContent}> {/* Use mainContent to apply the centering styles */}
                <h1 className={styles.header}>Hi, I'm Will Boyd.</h1>
                <img
                className={styles.img}
                src={ColoursWill}
                alt="ColoursWill"
                />
            </div>
            <div className={styles.hyperLinkSection}>
                <a href='https://www.linkedin.com/in/will-boyd-67370b213/'
                target='_blank'
                rel="noreferrer">
                    <img className={styles.linkedInLogo}
                src={linkedInLogo} 
                alt="LinkedIn"/>
                </a>
                <a href='https://github.com/Willboydie'
                target='_blank'
                rel="noreferrer">
                <img className={styles.githubLogo}
                src={githubLogo}
                alt="Github"/>
                </a>
            </div>
        </div>
    );
}