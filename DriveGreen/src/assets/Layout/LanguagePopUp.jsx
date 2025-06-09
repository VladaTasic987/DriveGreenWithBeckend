import i18n from "../Utils/i18n"
import { useState, useTransition } from "react"

export function LanguagePopup() {

    const [language, setLanguage] = useState("en");

    function setSerbianLang() {
        setLanguage("sr");
        i18n.changeLanguage("sr")
    }

    function setEnglishLang() {
        setLanguage("en")
        i18n.changeLanguage("en")
    }


    return (


        <div id="lang-container">

            <button
            onClick={setEnglishLang}
            className="eng-lang-btn"
            >ENG</button>

            <button
            onClick={setSerbianLang}
            className="sr-lang-btn"
            >SR</button>

        </div>

    )

}