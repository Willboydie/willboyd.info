import styles from './NavBar.css';
import React, { useState, useEffect } from 'react';

export default function NavBar(props) {

    const navHeaders = ['Home', 'Projects', 'Tutoring'];

    const [selectedHeader, setSelectedHeader] = useState(0);

    function handleClick(e, index) {
        e.preventDefault();
        setSelectedHeader(index);
    }
    
    useEffect(() => {
        props.pageToggle(selectedHeader)
    }, [selectedHeader]);
    

    const NavHeaderElement = () => {
        return navHeaders.map((header, index) => (
            <li key={index}>
                 <a 
                 onClick={(e) => handleClick(e, index)}
                 > 
                    {header}
                </a>
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
