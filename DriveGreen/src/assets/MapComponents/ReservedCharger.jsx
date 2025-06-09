import { MapHeader } from "../Layout/MapHeader";
import { MapFooter } from "../Layout/MapFooter";
import CoungratulationBackground from "../Images/CongratulationBackground.png"
import ReservedIcon from "../Images/ReservedIcon.png"
import DottedLine from "../Images/DottedLine.png"
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import MapBackground from "../Layout/MapBackground";
import { SuccessfulDestination } from "./SuccessfulDestination";
import {useUser} from "../Context.jsx";
import { useTranslation } from "react-i18next";


export function ReservedCharger() {
    const [visible, setVisible] = useState(true);

    const [showCard, setShowCard] = useState(false);

    const {partners} = useUser()

    function showCardAfterSeconds() {
        setShowCard(false);
        setTimeout(() => {
            setShowCard(true);
        }, 4000)
    }
 
    const mapRef = useRef();

    function handleDrawRoute() {
        if (mapRef.current) {
            mapRef.current.drawRandomRoute();
        } else {
            console.warn("MapBackground nije učitan ili mapRef nije postavljen.");
        }
        setVisible(newVisible => !newVisible)
    }

    function countPrice() {
        const free = 'Besplatno';
        const finalePrice = 90 *  partners[0].selectedOptions.Naplata;
         if(finalePrice === 0){
           return free;
        }else
         {
             return finalePrice;
         }

    }

    const {t, i18n} = useTranslation();


    return (
        !showCard ? (
            <div id="reserved-container">
                <MapHeader />

                <div style={{ display: visible ? 'block' : 'none' }}>
                    <img src={ReservedIcon} alt="icon reserved" className="icon" />
                    <img src={CoungratulationBackground} alt="background image" className="background" />
                    <div className="top-div">
                        <h1>{t('congradulations')}</h1>
                        <p>{t('reservedCharger')}</p>
                    </div>

                    <img src={DottedLine} alt="dotted line" className="dotted-line" />

                    <div className="middle-div">
                        <div className="middle-first">
                            <h1>{t('station')}</h1>
                            <p>{partners.length ? partners[0].name : "Robert Bosch Charging"}</p>
                        </div>

                        <div className="middle-second">
                            <h1>{t('arrival')}</h1>
                            <p>31. Maj, 2025, 09:45 am</p>
                        </div>

                        <div className="middle-third">
                            <h1>{t('duration')}</h1>
                            <p>1hr 30min</p>
                        </div>

                        <div className="middle-fourth">
                            <h1>{t('total')}</h1>
                            <p>{t('free')}</p>
                        </div>
                    </div>

                    <div className="buttons-div">
                        <button
                            onClick={() => {
                                handleDrawRoute();
                                showCardAfterSeconds();
                            }}
                            className="button-one"
                        >
                            {t('showRoute')}
                        </button>

                        <Link className="button-two-link" to="/viewMore">
                            {t('cancelReservation')}
                        </Link>
                    </div>
                </div>

                <MapBackground ref={mapRef} style={{ display: visible ? 'none' : 'block' }} />
                <MapFooter />
            </div>
        ) : (
            <SuccessfulDestination />
        )
    );
}