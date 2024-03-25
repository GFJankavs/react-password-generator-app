import { FC } from "react";
import "./style.css";

const handleStrengthStyle = (value: number | null, index: number) => {
    if (value === 1 && index === 0) {
        return "strength-too-weak";
    } else if (value === 2 && index < 2) {
        return "strength-weak";
    } else if (value === 3 && index < 3) {
        return "strength-medium";
    } else if (value === 4) {
        return "strength-strong";
    } else if (value === null) {
        return "strength-empty";
    } else {
        return "";
    }
};

const handleStrengthText = (value: number | null) => {
    switch (value) {
        case 1:
            return "Too weak!";
        case 2:
            return "Weak";
        case 3:
            return "Medium";
        case 4:
            return "Strong";
        default:
            return "";
    }
};

const StrengthLevel: FC<{ value: number | null }> = ({ value = null }) => {
    return (
        <div className="strength-wrapper">
            <span>strength</span>
            <div className="strength-result">
                {value && <span>{handleStrengthText(value)}</span>}
                <div className="strength-flex">
                    {[0, 1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className={`strength ${handleStrengthStyle(
                                value,
                                index
                            )}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StrengthLevel;
