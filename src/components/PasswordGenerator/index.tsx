import { useState } from "react";
import CharacterSlider from "../CharacterSlider";
import "./style.css";
import Checkbox from "../Checkbox";
import PasswordField from "../PasswordField";
import StrengthLevel from "../StrengthLevel";
import Button from "../Button";

const optionTexts = {
    uppercase: "Include Uppercase Letters",
    lowercase: "Include Lowercase Letters",
    numbers: "Include Numbers",
    symbols: "Include Symbols",
};

type PasswordOptions = {
    [key in keyof typeof optionTexts]: boolean;
};

const PasswordGenerator = () => {
    const [selectedOptions, setSelectedOptions] = useState<PasswordOptions>({
        lowercase: false,
        uppercase: false,
        numbers: false,
        symbols: false,
    });

    return (
        <div className="password-generator">
            <PasswordField />
            <div className="content-password">
                <CharacterSlider />
                <div className="password-options">
                    {Object.keys(selectedOptions).map((option) => {
                        return (
                            <Checkbox key={option}>
                                {
                                    optionTexts[
                                        option as keyof typeof optionTexts
                                    ]
                                }
                            </Checkbox>
                        );
                    })}
                </div>
                <StrengthLevel value={null} />
                <Button>Generate</Button>
            </div>
        </div>
    );
};

export default PasswordGenerator;
