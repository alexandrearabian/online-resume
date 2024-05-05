import React, { useState, useEffect } from 'react';
import './App.css'
import MainPage from './pages/MainPage'
import TopMenu from './components/TopMenu'
import MainPageSpanish from './pages/MainPageSpanish'

function App() {
  // Retrieve the stored language from localStorage, defaulting to 'en' if not found
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? storedLanguage : 'en';
  });

  // Store the language choice in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <>
      <div className="background-animation">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
        <div className="ball ball4"></div>
        <div className="ball ball5"></div>
        <div className="ball ball6"></div>
      </div>

      <TopMenu setLanguage={setLanguage} language={language} />
      {language === 'en' ? (
        <MainPage />
      ) : (
        <MainPageSpanish language={language} />
      )}
    </>
  );
}

export default App;
