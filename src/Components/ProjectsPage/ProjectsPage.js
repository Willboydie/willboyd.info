import styles from './ProjectsPage.module.css'

export default function ProjectsPage(props) {

    return (
        <div className={styles.background}>
            <div className={styles.mainContent}> {/* Use mainContent to apply the centering styles */}
                <h1
                className={styles.header}
                >These are my projects.</h1>
            </div>
        </div>
    );
}