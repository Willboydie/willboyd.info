import styles from './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const navHeaders = {
        'home': 'Home', 
        'projects': 'Projects', 
        'tutoring':'Tutoring'
    };
    

    const NavHeaderElement = () => {
        return Object.keys(navHeaders).map(key => (
            <li key={key}>
                <Link to={`/${key}`}>
                    {navHeaders[key]}
                </Link>
            </li>
        ));
    };

          
    return (
        <div className={styles}>
            <ul>
                <NavHeaderElement />
            </ul>
        </div>
    );
}
