import { MapFooter } from "../Layout/MapFooter"
import { MapHeader } from "../Layout/MapHeader"
import arrowBack from "../Images/ArrowBack.png"
import { Link } from "react-router-dom"
import blackThunder from "../Images/BlackThunder.png"
import greenPin from "../Images/GreenPin.png"
import orangePin from "../Images/OrangePin.png"
import yellowPin from "../Images/YellowPin.png"

export function MapPinsLegend() {
    return (
        <div id="container">
            <MapFooter />
            <div className="pins-header">
                <img src={arrowBack} alt='arrow-back' />
                <Link
                    to="/mapStart"
                    className='link-to-welcome'
                >
                    Nazad
                </Link>
            </div>

            <h1 className="pins-title">Legenda Pinova</h1>

            <div className="pins-legend">
                <div>
                    <img src={blackThunder} alt="black pin" className="black-pin" />
                    <span>150 KW</span>
                </div>

                <div>
                    <img src={yellowPin} alt="yellow pin" />
                    <span>250 KW</span>
                </div>

                <div>
                    <img src={orangePin} alt="orange pin" />
                    <span>22 KW</span>
                </div>

                <div>
                    <img src={greenPin} alt="green pin" />
                    <span>11 KW</span>
                </div>
            </div>
            <MapHeader />
        </div>
    )
}