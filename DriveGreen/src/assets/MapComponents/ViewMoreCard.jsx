import { MapFooter } from "../Layout/MapFooter";
import { MapHeader } from "../Layout/MapHeader";
import arrowBack from "../Images/ArrowBack.png"
import { Link } from "react-router-dom";
import ChargerLarge from "../Images/ChargerLarge.png"
import HeartIcon from "../Images/HeartIcon.png"
import StationRating from "../Images/StationRating.png"
import ArrivalDepartureArrow from "../Images/ArrivalDepartureArrow.png"
import { useTranslation } from "react-i18next";


export function ViewMoreCard() {

    const {t, i18n} = useTranslation();

    return (
        <div id="container">
            <MapHeader />
            <div className="view-more-header">
                <img src={arrowBack} alt='arrow-back' />
                <Link
                    to="/mapStart"
                    className='link-to-welcome'
                >
                    {t('back')}
                </Link>
            </div>

            <div className="station-image">
                <img src={ChargerLarge} alt="charger" />
            </div>

            <div className="station-info">
                <div className="station-header">
                    <h3>Robert Bocsh Charging</h3>
                    <img src={HeartIcon} alt="heart icon" />
                </div>

                <div className="station-meta">
                    <p>Omladinskih brigada 90E,<br /> Beograd 11070</p>
                    <div className="station-rating">
                        <img src={StationRating} alt="rating stars" />
                        <span>2.5 Km</span>
                    </div>
                </div>
            </div>

            <div className="station-options">
                <div className="option-box">
                    <span className="option-title-one">Tip 3</span>
                    <span className="option-sub"> 150KW</span>
                </div>
                <div className="option-box">
                    <span className="option-title">{t('free')}</span>
                    <span className="option-sub">minut</span>
                </div>
                <div className="option-box">
                    <span className="option-title">{t('free')}</span>
                    <span className="option-sub">Parking</span>
                </div>
            </div>

            <div className="station-time">
                <div className="time-box">
                    <p className="arrival">{t('arrival')}</p>
                    <div className="arrival-departure">
                        <span>Danas 9:45</span>
                        <img src={ArrivalDepartureArrow} alt="arrow down" />
                    </div>
                </div>
                <div className="time-box">
                    <p>{t('duration')}</p>
                    <span className="time">1h 30m</span>
                </div>
                <div className="time-box">
                    <p>{t('departure')}</p>
                    <div className="arrival-departure">
                        <span>Danas 11:30</span>
                        <img src={ArrivalDepartureArrow} alt="arrow down" />
                    </div>
                </div>
            </div>


            <Link
                className="reserve-button"
                to="/reservedCharger"
            >{t('reserveCharger')}</Link>


            <MapFooter />
        </div>
    )
}