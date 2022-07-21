import React from "react";
import "../../App.css"
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const { i18n } = useTranslation();

    function changeLanguage(language) {
        i18n.changeLanguage(language);
      }

    return (
        <nav>
            <div className='selection'>
                <a href="/home" className='animation'> Home </a>
                <a className='animation' onClick={() => changeLanguage("en")}> Inglés </a>
                <a className='animation' onClick={() => changeLanguage("es")}> Español </a>
            </div>
        </nav>
    );

};

export default Nav;