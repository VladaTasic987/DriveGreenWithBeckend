import headerLogo from "../Images/HeaderLogo.png"
import location from "../Images/Location.png"
import mapUser from "../Images/MapUser.png"
import arrowDown from "../Images/ArrowDown.png"
import { UserPopup } from "./UserPopup"
import { useState } from "react"
import { LanguagePopup } from "./LanguagePopUp"


export function MapHeader({focusOnCarLocation, locationOn}) {

    const [visible, setVisible] = useState(false);
    const [langVisible, setLangVisible] = useState(false);

    function SeeUserInfo() {
        setVisible(prevVisible => !prevVisible)
    }

    function ToggleLang() {
        setLangVisible( prevLang => !prevLang)
    }


    return (

            <div id="map-header">
                

                <div className="header-left">
                <img src={headerLogo} alt="map-logo" />
                </div>
                
                <div className="header-right">
                <button onClick={focusOnCarLocation}>
                <img 
                className="header-location-img"
                src={location} 
                alt="map-location" 
                />
                    <span className={"header-location-on"}>
                        {locationOn ? 'ON' : 'OFF'}
                    </span>
                </button>
                <img 
                className="header-user-img"
                src={mapUser} 
                onClick={SeeUserInfo}
                alt="map-user" 
                />
                <img 
                className="header-user-down-img"
                src={arrowDown} 
                alt="map-down" 
                />
                <p
                className="language-text"
                onClick={ToggleLang}
                >SR</p>
                <img
                className="header-down-img-again" 
                src={arrowDown} 
                alt="map-down" />
                {langVisible ? <LanguagePopup/> : null}

                </div>

                 

                {visible ? <UserPopup/> : null}
            </div>

    )

}