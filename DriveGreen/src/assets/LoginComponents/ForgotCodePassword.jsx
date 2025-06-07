import { useRef } from "react";
import { Link } from "react-router-dom";

export function ForgotCodePassword() {
    const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            if (index < inputsRef.length - 1) {
                inputsRef[index + 1].current.focus();
            }
        } else {
            e.target.value = ""; // obriši slovo ako nije cifra
        }

    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputsRef[index - 1].current.focus();
        }
    };

    return (
        <div id="otp-container">
            <div className="four-digit-container">
                <h1>Unesite četvorocifreni kod</h1>
                <p>Četvorocifreni kod koji ste primili na<br /> prethodno navedenu email adresu.</p>
                <div className="inputs">
                    {inputsRef.map((ref, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="otp-input"
                            ref={ref}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                </div>

                <Link
                    className="resend-code"
                >
                    Pošalji kod ponovo
                </Link>

                <div className="otp-buttons">
                    <Link
                        className="confirm"
                        to="/mapStart"
                    >
                        Potvrdi
                    </Link>
                    <Link
                        className="cancel"
                        to="/forgot"
                    >
                        Otkaži
                    </Link>
                </div>
            </div>
        </div>
    );
}
