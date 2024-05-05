const AboutMe = ({ wordInView, language }) => {
    if (language === 'es') {

        return (
            <div>
                <h1><span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>Sobre</span> mí</h1>
                <p className={`about-me-despcription ${wordInView ? '' : 'hidden-about-me-despcription'}`}>
                    Soy estudiante de Ingeniería Informática en mi último año de universidad, buscando aplicar y perfeccionar mis conocimientos.<br />
                    Mi emoción por programar, junto a mi pasión por el arte y la creación, me motivan a seguir aprendiendo y mejorando.<br />
                    Entrar en el desarrollo web es una experiencia maravillosa, y ansío descubrir todo lo que tiene para ofrecer.
                </p>
            </div >);
    }
    else {

        return (
            <div>
                <h1><span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>About</span> Me</h1>
                <p className={`about-me-despcription ${wordInView ? '' : 'hidden-about-me-despcription'}`}>
                    I am Computer Engineering student in my final year of college, looking to apply and improve my knowledge.<br />
                    My excitement for coding, together with my passion for art and creation, greatly motivate me to keep learning and improving.<br />
                    Getting into Web Development is a beatiful journey, and I am looking forward to discover everything it has to offer.
                </p>
            </div >);
    }
}

export default AboutMe;