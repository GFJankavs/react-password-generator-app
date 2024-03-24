import { useState } from "react";
import "./style.css";

const CharacterSlider = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="wrapper">
            <label htmlFor="character_length" className="top">
                <span>Character Length</span>
                <span className="value">{value}</span>
            </label>
            <input
                type="range"
                name="character_length"
                min="0"
                max="20"
                value={value}
                onChange={(e) => {
                    setValue(parseInt(e.target.value));
                }}
                id="character_length"
            />
        </div>
    );
};

export default CharacterSlider;
