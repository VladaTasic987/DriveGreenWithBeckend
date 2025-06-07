import headerLogo from "../Images/HeaderLogo.png"
import location from "../Images/Location.png"
import mapUser from "../Images/MapUser.png"
import arrowDown from "../Images/ArrowDown.png"
import { UserPopup } from "./UserPopup"
import { useState } from "react"


export function MapHeader({focusOnCarLocation, locationOn}) {

    const [visible, setVisible] = useState(false);

    function SeeUserInfo() {
        setVisible(prevVisible => !prevVisible)
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
                >SR</p>
                <img
                className="header-down-img-again" 
                src={arrowDown} 
                alt="map-down" />

                </div>

                 

                {visible ? <UserPopup/> : null}
            </div>

    )

}