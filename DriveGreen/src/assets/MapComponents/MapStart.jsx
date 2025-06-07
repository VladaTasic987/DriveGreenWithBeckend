
import { MapFooter } from "../Layout/MapFooter"
import { MapHeader } from "../Layout/MapHeader"
import { PopUp } from "../Layout/PopUp.jsx"
import mapBackground from "../Images/MapBackground.png"
import carLocation from "../Images/CarLocation.png"
import blackThunder from "../Images/BlackThunder.png"
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
            {/* <img
                className="map-background"
                src={mapBackground}
                alt="background"
                onClick={onClosePopUp} /> */}
            { showDetails ?
                <button className={'popup-button'} onClick={OnShowPopUp}>
                <span className={'charger-location-text'}>

                    <div className={'first'}> Robert Bosch</div>
                    <div> <img src={locationSmall} alt="location" /> 2,5 km / 5 min</div>

                </span>
                </button>
                : null}
            {/*<button className={'popup-button'} onClick={OnShowDetails}>*/}
            {/*<img*/}
            {/*    className="charger-location pulse"*/}
            {/*    src={blackThunder}*/}
            {/*    alt="charger" />*/}
            {/*</button>*/}

            {/*<img*/}
            {/*    className={'car-location'}*/}
            {/*    src={carLocation}*/}
            {/*    alt="car" />*/}
            
            <MapFooter/>
            {showPopup ? <PopUp showPopup={showPopup}/> : null}
            
            </div>
        </div>

    )
}