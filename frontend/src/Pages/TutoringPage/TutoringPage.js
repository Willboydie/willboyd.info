import meSnowyMendoza from './meSnowyMendoza.jpg';
import meAndHamishGraduation from './meAndHamishGraduation.webp';
import styles from './TutoringPage.module.css';


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
                <div className={styles.testimonials}>
                    <div>
                        <p>
                        Will worked with my niece on a weekly basis during 2019 when it became clear that she was struggling with Maths in S4. 
                        
                        She had lost confidence and had largely disengaged at school as a means of coping. 
                        
                        Will worked with Caitlin in a way that seemed to boost her self-confidence and she began to believe that she perhaps would be able to learn and do better in Maths than she had done previously. 
                        
                        She continued with Maths in S5 as a consequence of working with Will.
                        </p>
                        <p className={styles.quotee}>Lilian Haire</p>
                    </div>
                    <div>
                        <p>
                            Earlier this year, Will tutored my daughter over a number of weeks when she needed help with her Advanced Higher Maths course.

                            My daughter said Will was an extremely good teacher – very patient and good at explaining things, going at exactly the right pace for her. I would infer from this that Will was empathetic and able to tailor his teaching to exactly the right level so that my daughter was neither overwhelmed nor bored.

                            I believe Will was pivotal in increasing both my daughter’s maths ability and her confidence.
                        </p>
                        <p className={styles.quotee}>Amy Anderson</p>
                    </div>
                    <div>
                        <p>
                            Will has been an absolute game changer. Not only has he now explained my maths issues in a very clear format, he has also given me the confidence to approach new maths without any worry or concern. It’s like night and day! My day to day lessons at school seem so much clearer with Wills weekly tutorial. Thank you Will!
                        </p>
                        <p className={styles.quotee}>Archie Horsburgh</p>
                    </div>
                    <div>
                        <p>
                            Will has been the best tutor I have had.

                            He is very clear with his work, and he take great time to explain work to me when I may be confused.

                            For me he has been particularly helpful every time I start a new topic about every week or so, he helps explain the topic and give me question that are challenging and yet not confusing enough to halt you.

                            He is a very nice person you can tell by how much extra effort to help you.

                            If I am stuck on a question and we a near the end of a lesson he will take more time just to help me. If I haven’t finished a topic but I have homework I would send him a picture of my work for him the check and on the next lesson he will go through where I went wrong and where I need to improve. 
                        </p>
                        <p className={styles.quotee}>Bruce Martin</p>
                    </div>
                    <div>
                        <p>
                            Our son, Max, had been receiving private tutoring for his National 5 Math’s exam during most of last year (2019), unfortunately, despite his tutor’s best efforts, Max failed his Math’s prelim exam in February.

                            We then decided to look for alternatives at which point Max started to receive tutoring sessions from Will.

                            Almost immediately there was a marked improvement in Max, his confidence grew working with Will and he was more focused as a result.

                            Will worked with Max over several Months, during which time Max continued to improve and as a result, was able to gain a pass in his National 5 Math’s exam in April.

                            The confidence Will instilled in Max was a major factor in his improvement, and we would have absolutely no hesitation in recommending Will as a Math’s tutor.
                        </p>
                        <p className={styles.quotee}>Roddy and Christine MacDougall</p>
                    </div>
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