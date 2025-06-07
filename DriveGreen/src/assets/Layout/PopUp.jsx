import chargerSmall from "../Images/ChargerSmall.png"
import wifiLogo from "../Images/WifiLogo.png"
import heartIcon from "../Images/HeartIcon.png";
import { Link } from "react-router-dom";
import {useUser} from "../Context.jsx";

export function PopUp() {

    const {partners} = useUser()
   

    return <div id="PopUp">
        <img className={'charger-img'} src={chargerSmall} alt="" />
        <div className="popUp-content">
            <h2 className="popUp-title">{partners.length ? partners[0].name : 'Robert Bosch'}</h2>
            <p className="popUp-address">Omladinskih brigada 90E,<br />Beograd 11070</p>
            <img className={'popUp-heart'} src={heartIcon} alt="heartIcon"/>
            <div className="popUp-info">

                <span className="distance">2.5 Km</span>
                <div className="stars">★ ★ ★ ★ ☆</div>
            </div>
            <div className="popUp-bottom">
                <div className="power">
                    <span className="wifi-icon"><img src={wifiLogo} alt="wifilogo" /></span>
                    <span className={'power-kw'}>{partners.length ? partners[0].selectedOptions.Kw+" KW" : '150 KW'}</span>
                </div>
                <button className="popUp-btn">
                    <Link
                        className="popUp-btn-link"
                        to="/viewMore"
                    >
                        Prikaži više
                    </Link>
                </button>
            </div>
        </div>
    </div>

}