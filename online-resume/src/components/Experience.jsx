const Experience = ({ wordInView, language }) => {
    if (language == 'es') {
        return (
            <>
                <h1>
                    Experiencia <span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>Laboral</span>
                </h1>
                <div className='experience'>


                    <div className={`experience job ${wordInView ? '' : 'hidden-experience-job'}`} >
                        <h2><span className="important">Globant</span> , 2024 | Madrid, Spain</h2>
                        <p>
                            <strong>Trainee Full Stack:</strong> Enfoque en desarrollo Front-end, aprendiendo y trabajando con React.

                        </p>

                    </div>
                    <div className={`experience job ${wordInView ? '' : 'hidden-experience-job'}`} >
                        <h2><span className="important">Tadron</span> Theatre, 2018 - 2019 <br />Buenos Aires, Argentina</h2>
                        <p>
                            <strong>Community Manager:</strong> Manejo de redes sociales.
                        </p>
                        <p>
                            <strong>Camarero:</strong> Bienvenida y entrega de menus, recibir pedidos, y servir comidas y bebidas.
                        </p>


                    </div>
                </div>
            </>
        );
    }
    else {

        return (
            <>
                <h1>
                    <span className={`color-transition-word ${wordInView ? 'in-view' : ''}`}>Work</span> Experience
                </h1>
                <div className='experience'>


                    <div className={`experience job ${wordInView ? '' : 'hidden-experience-job'}`} >
                        <h2><span className="important">Globant</span> , 2024 | Madrid, Spain</h2>
                        <p>
                            <strong>Full stack Trainee:</strong> Main focus on Front-end development, learning and working with React.
                        </p>

                    </div>
                    <div className={`experience job ${wordInView ? '' : 'hidden-experience-job'}`} >
                        <h2><span className="important">Tadron</span> Theatre, 2018 - 2019 <br />Buenos Aires, Argentina</h2>
                        <p>
                            <strong>Community Manager:</strong> Social Media Management
                        </p>
                        <p>
                            <strong>Waiter:</strong> Welcome and delivery of menus, write down orders, and serve food and drinks
                        </p>


                    </div>
                </div>
            </>
        );
    }
}

export default Experience;