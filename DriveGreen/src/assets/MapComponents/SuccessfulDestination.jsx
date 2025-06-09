import { MapHeader } from "../Layout/MapHeader"
import { MapFooter } from "../Layout/MapFooter"
import congradulationBackground from "../Images/CongratulationBackground.png"
import dottedLine from "../Images/DottedLine.png"
import chargerLarge from "../Images/ChargerLarge.png"
import mapBlur from "../Images/MapBlur.png"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"



export function SuccessfulDestination() {

    
    const {t, i18n} = useTranslation();

    return (

        
        <div id="success-container">

            <img 
            src={mapBlur} 
            alt="map-blur" 
            className="map-blur"
            />
            <MapHeader/>

            <div className="middle-content">
                
                <img 
                className="background-image"
                src={congradulationBackground} alt="background" />

                <div className="text-container">
                <h2 className="sucess-text">{t('successDestination')}</h2>
                </div>

                <p className="ready-text">{t('chargerReady')}</p>

                <img 
                className="dotted-line"
                src={dottedLine} 
                alt="line" />

                <h3 className="station-text">{t('station')}</h3>

                <h1 className="robert-bosch">Robert Bosch Charging</h1>

                <img 
                className="charger-img"
                src={chargerLarge} 
                alt="charger" />

                <Link
                to="/chargingProgress" className="first-button">{t('startCharging')}</Link>
                <Link 
                to="/mapStart"
                className="second-button">{t('cancelReservation')}</Link>

            </div>

            <MapFooter/>
        </div>
    )

}