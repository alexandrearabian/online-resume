const AboutMe = ({ wordInView, language }) => {
    if (language === 'es') {

        return (
            <div>
                <h1><span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>Sobre</span> mí</h1>
                <p className={`about-me-despcription ${wordInView ? '' : 'hidden-about-me-despcription'}`}>
                    Soy una persona activa y creativa con una pasión por el arte digital, el ajedrez y la programación. <br />
                    Con una buena base en diversos lenguajes de programación, y entusiasmo por la resolución de problemas, aporto tanto conocimiento como creatividad a mi trabajo.<br />
                    Siempre estoy emocionado de asumir nuevos desafíos y sacar el máximo provecho de ellos. <br />
                </p>
            </div >);
    }
    else {

        return (
            <div>
                <h1><span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>About</span> Me</h1>
                <p className={`about-me-despcription ${wordInView ? '' : 'hidden-about-me-despcription'}`}>

                    I am an active and creative person with a passion for digital art, chess, and coding. <br />
                    With a strong foundation in different programming languages and excitement for problem-solving, I bring both expertise and creativity to my work. <br />
                    I am always excited to take on new challenges and make the most out of them. <br />
                </p>
            </div >);
    }
}

export default AboutMe;