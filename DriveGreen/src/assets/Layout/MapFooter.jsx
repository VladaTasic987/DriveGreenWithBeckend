import blackThunder from "../Images/BlackThunder.png"
import arrowRight from "../Images/ArrowRight.png"
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

export function MapFooter() {

    const footerElements = {
        pinText: "Legenda pinova",
        conditionText: "Uslovi Poslovanja",
        clickForMore: "Klikni za vise >",
        thunderIcon: blackThunder,
        arrowRight: arrowRight,
        clickRight: "Klikni za vise",
        clickLeft: "Klikni za vise >",
        malfunction: "Prijavi kvar punjaca",
        manual: "Uputstvo za koriscenje",
    }

    const location = useLocation();


    return (
        <div id="map-footer">

            <div className="footer-left">
                <img
                    className="thunder-img"
                    src={footerElements.thunderIcon}
                    alt="thunder" />

                <div className="pin-legend">
                    <p className="pin-paragraph">{location.pathname === '/mapStart' ? footerElements.pinText : footerElements.malfunction}</p>
                    <div className="footer-text">
                        <Link
                            className="click-more"
                            to="/pinsLegend"
                        >{footerElements.clickForMore}</Link>
                        {/*<img */}
                        {/*className="arrow-img"*/}
                        {/*src={footerElements.arrowRight} */}
                        {/*alt="arrow-right" />*/}
                    </div>
                </div>
            </div>

            <div className="footer-right">
                <h4 className="condition-text">{location.pathname === '/mapStart' ? footerElements.conditionText : footerElements.manual}</h4>
                <div className="right-content">
                    <Link
                        className="paragraph-left"
                        to="/businessConditions"
                    >{footerElements.clickLeft}</Link>
                    {/*<img */}
                    {/*className="arrow-img"*/}
                    {/*src={footerElements.arrowRight} */}
                    {/*alt="arrow-img" />*/}
                </div>
            </div>

        </div>
    )

}