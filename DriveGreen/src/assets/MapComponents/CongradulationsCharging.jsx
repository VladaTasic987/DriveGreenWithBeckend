import { MapHeader } from "../Layout/MapHeader"
import { MapFooter } from "../Layout/MapFooter"
import congradulationBackground from "../Images/CongratulationBackground.png"
import dottedLine from "../Images/DottedLine.png"
import chargerInCar from "../Images/ChargerInCar.png"
import mapBlur from "../Images/MapBlur.png"
import { Link } from "react-router-dom"
import {useUser} from "../Context.jsx";
import { useTranslation } from "react-i18next"


export function CongradulationsCharging() {

    const {partners} = useUser()
    const {t, i18n} = useTranslation();

    return (

        
        <div id="congrads-container">

            <img 
            className="map-blur"
            src={mapBlur} 
            alt="map-blur" />

            <MapHeader/>

            <div className="middle-content">
                
                <img 
                className="background-image"
                src={congradulationBackground} alt="background" />

                <div className="text-container">
                <h2 className="sucess-text">{t('congradulations')}</h2>
                </div>

                <p className="ready-text">{t('chargingSucessful')}</p>

                <img 
                className="dotted-line"
                src={dottedLine} 
                alt="line" />

                <h3 className="station-text">{t("station")}</h3>

                <h1 className="robert-bosch">{partners.length ? partners[0].name : "Robert Bosch Charging"}</h1>

                <img 
                className="charger-img"
                src={chargerInCar} 
                alt="charger" />

                <Link
                 
                 className="first-button">{t('rateTheStation')}</Link>
                <Link 
                to="/mapStart"
                className="second-button">{t('exit')}</Link>

            </div>

            <MapFooter/>
        </div>
    )

}