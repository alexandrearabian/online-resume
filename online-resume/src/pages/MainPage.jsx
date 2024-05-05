
import React, { useState, useEffect } from 'react';
import DownloadElement from '../components/DownloadElement';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ProfilePicture from '../assets/ProfilePicture.jpeg';
import Curriculum from '../assets/Alexandre-Arabian-CV-Linkedin.pdf';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import { useInView } from 'react-intersection-observer';

const MainPage = () => {

    const LinkedinLink = "https://www.linkedin.com/in/alexandre-arabian-jensezian";
    const GithubLink = "https://github.com/alexandrearabian";

    const { ref: aboutRef, inView: aboutInView, entry: aboutEntry } = useInView({ rootMargin: '0px', threshold: 0, });
    const { ref: experienceRef, inView: experienceInView, entry: experienceEntry } = useInView({ rootMargin: '-50px', threshold: 0, });

    const [aboutIsVisible, setAboutIsVisible] = useState(false);
    const [experienceIsVisible, setExperienceIsVisible] = useState(false);
    const [prevY, setprevY] = useState(null);

    useEffect(() => {
        if (aboutEntry) {
            const currentY = aboutEntry.boundingClientRect.top;
            if (prevY !== null) {
                const isScrollingDown = prevY > currentY;
                if (isScrollingDown) {
                    setAboutIsVisible(true);
                }

                if (!aboutInView && !isScrollingDown) {
                    setAboutIsVisible(false);
                }

            }
            setprevY(currentY);
        }
    }, [aboutInView, aboutEntry]);

    useEffect(() => {
        if (experienceEntry) {
            const currentY = experienceEntry.boundingClientRect.top;
            if (prevY !== null) {
                const isScrollingDown = prevY > currentY;
                console.log(isScrollingDown);
                if (isScrollingDown) {
                    setExperienceIsVisible(true);
                }

                if (!experienceInView && !isScrollingDown) {
                    setExperienceIsVisible(false);
                }

            }
            setprevY(currentY);
        }
    }, [experienceInView, experienceEntry]);


    const [isGlowing, setIsGlowing] = useState(false);

    const triggerGlow = () => {
        setIsGlowing(true);
        setTimeout(() => {
            setIsGlowing(false);
        }, 5000);
    };

    useEffect(() => {
        triggerGlow();
    }, []);


    return (
        <>
            <div className="main-page">

                <img src={ProfilePicture} className="profilePicture" />
                <section className="section">
                    <header className="header">
                        <h1><span className={`color-glow-word ${isGlowing ? 'glowing' : ''}`}>Computer</span> Engineer,  <span className={`color-glow-word ${isGlowing ? 'glowing' : ''}`}>Web</span> Developer</h1>
                        <h2><span className={`color-glow-word ${isGlowing ? 'glowing' : ''}`}>Alexandre</span> Arabian Jensezian</h2>
                    </header>
                    <div className="links">

                        <DownloadElement type="download" url={Curriculum} filename="Alexandre-Arabian-CV" icon={faDownload}>
                            Download CV
                        </DownloadElement>

                        <DownloadElement type="link" url={LinkedinLink} icon={faLinkedin}>
                            LinkedIn
                        </DownloadElement>

                        <DownloadElement type="link" url={GithubLink} icon={faGithub}>
                            GitHub
                        </DownloadElement>

                        <DownloadElement type="link" url="mailto:alexandre.arabian.j@gmail.com" icon={faEnvelope}>
                            Email
                        </DownloadElement>
                    </div>
                </section>
                <br id='above-about' className='filler-space' />
                <section ref={aboutRef} id="about" className={`section ${aboutIsVisible ? '' : 'hidden-section'}`}>
                    <AboutMe wordInView={aboutIsVisible} />
                </section>
                <br id='above-experience' className='filler-space' />
                <section ref={experienceRef} id="experience" className={`section ${experienceIsVisible ? '' : 'hidden-section'}`}>
                    <Experience wordInView={experienceIsVisible} />
                </section>

                <footer id="contact" className="footer">
                    <p>
                        Contact: <a href="mailto:alexandre.arabian.j@gmail.com" title='alexandre.arabian.j@gmail.com'>alexandre.arabian.j@gmail.com</a>
                    </p>
                </footer>

            </div >
        </>
    );
};

export default MainPage;
