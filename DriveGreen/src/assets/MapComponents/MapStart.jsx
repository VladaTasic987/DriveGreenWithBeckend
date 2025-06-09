
import { MapFooter } from "../Layout/MapFooter"
import { MapHeader } from "../Layout/MapHeader"
import { PopUp } from "../Layout/PopUp.jsx"
import locationSmall from "../Images/LocationSmall.png"
import {useState} from "react";
import { MapBackground } from "../Layout/MapBackground.jsx"


export function MapStart() {

    const [showPopup, setShowPopup] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    function OnShowPopUp(e) {
        e.preventDefault();
        setShowPopup( newPopup => !newPopup);
    }
    function OnShowDetails(e) {
        e.preventDefault();
        setShowDetails( newDetails => !newDetails);
    }

    return (
        <div id="map-start-container">

            <MapHeader />

            <div className="map-middle">
            <MapBackground className="map-background"/>
            
            { showDetails ?
                <button className={'popup-button'} onClick={OnShowPopUp}>
                <span className={'charger-location-text'}>

                    <div className={'first'}> Robert Bosch</div>
                    <div> <img src={locationSmall} alt="location" /> 2,5 km / 5 min</div>

                </span>
                </button>
                : null}
            
            <MapFooter/>
            {showPopup ? <PopUp showPopup={showPopup}/> : null}
            
            </div>
        </div>

    )
}