import styles from './ProjectsPage.module.css'
import trevor from './sea_otter_curious.jpg';
import { GoHeartFill } from "react-icons/go";
import { useEffect, useState } from 'react';

export default function ProjectsPage() {

    const [numLikes, setNumLikes] = useState(null);

    useEffect(() => {
        const fetchLikes = async() => {

            try {
                const response = await fetch('http://localhost:4000/likes');

                if (response.ok) {
                    const likes = await response.json();
                    setNumLikes(likes.likes);
                }
            } catch(err) {
                console.log(err);
            }

        }

        fetchLikes();

    }, [])


    const addLikeToDb = async() => {

        try {
            await fetch('http://localhost:4000/likes', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'  // Specify content type
                },
                body: JSON.stringify({ "likes": numLikes+1 })
            })

        } catch(err) {
            console.log(err)
        }
    }


    const handleLikeClick = (e) => {
        e.preventDefault()
        setNumLikes(numLikes+1)
        addLikeToDb();
    }



    return (
        <div className={styles.background}>
            <div className={styles.mainContent}>
                <h1
                className={styles.header}
                >Show Trevor some love!</h1>
                <img src={trevor}
                alt="sea_otter_curious" />
                <div className={styles.likeCounter}>
                    <p className={styles.likeCount}>
                        {numLikes}  
                    </p>
                    <GoHeartFill className={styles.heart}
                        onClick={handleLikeClick}/>
                </div>
            </div>
        </div>
    );
}