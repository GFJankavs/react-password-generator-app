import { useMemo } from "react";
import CharacterSlider from "../CharacterSlider";
import "./style.css";
import Checkbox from "../Checkbox";
import PasswordField from "../PasswordField";
import StrengthLevel from "../StrengthLevel";
import Button from "../Button";
import { usePasswordContext } from "../../providers/passwordContext";
import generatePassword from "../../utils/generatePassword";
import evaluatePasswordStrength from "../../utils/evaluatePasswordStrength";

const optionTexts = {
    uppercase: "Include Uppercase Letters",
    lowercase: "Include Lowercase Letters",
    numbers: "Include Numbers",
    symbols: "Include Symbols",
};

const PasswordGenerator = () => {
    const { passwordData, setPasswordData } = usePasswordContext();

    const allOptionsEmpty = useMemo(() => Object.values(passwordData.options).every((option) => !option), [passwordData.options]);

    const handlePasswordGeneration = () => {
        const generatedPassword = generatePassword(passwordData.options, passwordData.characterLength);

        setPasswordData({ ...passwordData, password: generatedPassword });
    }

    const passwordStrength = useMemo(() => {
        if (passwordData.password === "") return null;
        return evaluatePasswordStrength(passwordData.password);
    }, [passwordData.password]);

    return (
        <div className="password-generator">
            <PasswordField value={passwordData.password} setValue={(value) => setPasswordData({ ...passwordData, password: value })} />
            <div className="content-password">
                <CharacterSlider value={passwordData.characterLength} setValue={(value) => setPasswordData({ ...passwordData, characterLength: value })} />
                <div className="password-options">
                    {Object.entries(passwordData.options).map(([key, option]) => {
                        return (
                            <Checkbox
                                key={key}
                                value={option}
                                onCheck={(value) => {
                                    const newOptions = { ...passwordData.options, [key]: value };
                                    const newPasswordData = { ...passwordData, options: newOptions };
                                    setPasswordData(newPasswordData);
                                }}>
                                {
                                    optionTexts[
                                    key as keyof typeof optionTexts
                                    ]
                                }
                            </Checkbox>
                        );
                    })}
                </div>
                <StrengthLevel value={passwordStrength} />
                <Button disabled={allOptionsEmpty || passwordData.characterLength === 0} onClick={() => handlePasswordGeneration()}>Generate</Button>
            </div>
        </div>
    );
};

export default PasswordGenerator;
