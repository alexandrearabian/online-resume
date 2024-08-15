import React from 'react';
import LanguageSelector from './LanguageSelector';

const TopMenu = ({ setLanguage, language }) => {
    if (language === 'es') {

        return (
            <nav className="top-menu">
                <a className='menu' href="#above-about">Sobre mí</a>
                <a href="#above-experience">Experiencia</a>
                <a href="mailto:alexandre.arabian.j@gmail.com" title='alexandre.arabian.j@gmail.com'>Contacto</a>
                <LanguageSelector languageSelector={'Idioma'} setLanguage={setLanguage} />
            </nav>
        );
    } else {
        return (
            <nav className="top-menu">
                <a href="#above-about">About Me</a>
                <a href="#above-experience">Experience</a>
                <a href="#contact">Contact</a>
                <LanguageSelector languageSelector={'Language'} setLanguage={setLanguage} language={language} />
            </nav>
        );
    }
};

export default TopMenu;
