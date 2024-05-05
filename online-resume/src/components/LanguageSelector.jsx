import React from 'react';

const LanguageSelector = ({ setLanguage, languageSelector, language }) => {

    const selectorStyle = {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
    };

    const optionsStyle = {
        display: 'none',
        width: '160px',
        position: 'absolute',
        top: '30%',
        left: '0%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        zIndex: 1,
        padding: '10%',
        borderRadius: '5%',
        textAlign: 'left',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    };
    const handleMouseEnter = (e) => {
        const options = e.currentTarget.querySelector('.options');
        options.style.display = 'block';
    };

    const handleMouseLeave = (e) => {
        const options = e.currentTarget.querySelector('.options');
        options.style.display = 'none';
    };

    return (
        <a
            style={selectorStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseEnter}
        >
            <span>🌐 {languageSelector}</span>
            <ol className="options" style={optionsStyle}>
                <ul
                    className="language-option"
                    onClick={() => setLanguage('en')}
                >
                    🇬🇧 English
                </ul>
                <ul
                    className="language-option"
                    onClick={() => setLanguage('es')}
                >
                    🇪🇸 Español
                </ul>
            </ol>
        </a >
    );
};

export default LanguageSelector;
