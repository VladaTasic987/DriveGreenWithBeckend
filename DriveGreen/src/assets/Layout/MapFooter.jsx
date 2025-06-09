import blackThunder from "../Images/BlackThunder.png"
import arrowRight from "../Images/ArrowRight.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export function MapFooter() {

    const footerElements = {
        thunderIcon: blackThunder,
        arrowRight: arrowRight,
    }

    const {t, i18n} = useTranslation();


    return (
        <div id="map-footer">

            <div className="footer-left">
                <img
                    className="thunder-img"
                    src={footerElements.thunderIcon}
                    alt="thunder" />

                <div className="pin-legend">
                    <p className="pin-paragraph"> {t('pinLegend')} </p>
                    <div className="footer-text">
                        <Link
                            className="click-more"
                            to="/pinsLegend"
                        >{t('clickForMore')}</Link>
                        
                    </div>
                </div>
            </div>

            <div className="footer-right">
                <h4 className="condition-text">{t('termsOfBusiness')}</h4>
                <div className="right-content">
                    <Link
                        className="paragraph-left"
                        to="/businessConditions"
                    >{t('clickForMore')}</Link>
                </div>
            </div>

        </div>
    )

}