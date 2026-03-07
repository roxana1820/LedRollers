import React, { useEffect, useRef } from 'react';
import '../styles/PrivacyPolicy.css';

function CookiePolicy() {

    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
    script.id = 'CookieDeclaration';
    script.src = 'https://consent.cookiebot.com/a0f494f2-0c16-46e9-8561-9560fb9853b1/cd.js';
    script.type = 'text/javascript';
    script.async = true;

    if (containerRef.current) {
        containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);
     
  return (
    <main className="policy-page">
      <h1>Политика за бисквитки (Cookie Policy)</h1>
      <p>
        По-долу можете да се запознаете подробно с това какви бисквитки използваме на нашия сайт 
        (www.ledrollers.com), за какво служат те, както и да промените или оттеглите своето съгласие 
        по всяко време.
      </p>

      <div ref={containerRef} className="cookiebot-container"></div>
    </main>
  );
}

export default CookiePolicy;