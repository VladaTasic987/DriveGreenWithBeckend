import { MapFooter } from "../Layout/MapFooter"
import { MapHeader } from "../Layout/MapHeader"
import batteryOne from "../Images/BatteryOne.png"
import batteryTwo from "../Images/BatteryTwo.png"
import batteryThree from "../Images/BatteryThree.png"
import batteryFour from "../Images/BatteryFour.png"
import batteryFive from "../Images/BatteryFive.png"
import mapBlur from "../Images/MapBlur.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { CongradulationsCharging } from "./CongradulationsCharging"


export function ChargingProgress() {

    const batteryImages = [
    batteryOne,
    batteryTwo,
    batteryThree,
    batteryFour,
    batteryFive
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [changePage, setChangePage] = useState(false);

  useEffect(() => {
    setChangePage(false)
    setTimeout(() => {
        setChangePage(true)
    }, 7000)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % batteryImages.length);
    }, 1000); // change image every 1 second

    return () => clearInterval(interval); // cleanup
  }, []);


    return (
        !changePage ? (<div id="charging-container">

            <img 
            className="map-blur"
            src={mapBlur} 
            alt="map-blur" />

            <MapHeader/>

            <div className="charging-card">

                <h4>Punjenje u toku</h4>
                <p>Vas auto ce uskoro biti spreman</p>

                <img src={batteryImages[currentImageIndex]} alt="battone" />

                <Link
                to="/mapStart"
                className="cancel-charging"
                >OTKAZI PUNJENJE</Link>

            </div>

            <MapFooter/>

        </div>) : (<CongradulationsCharging/>)
    
    )
}