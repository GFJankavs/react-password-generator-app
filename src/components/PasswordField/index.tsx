import { useState } from "react";
import CopyIcon from "../../icons/CopyIcon";
import "./style.css";

const PasswordField = () => {
    const [password, setPassword] = useState<string>("");
    const [copyHover, setCopyHover] = useState(false);
    const [showCopy, setShowCopy] = useState<boolean>(false);

    return (
        <div className="password">
            <input
                className="password-input heading--l"
                placeholder="P4$5W0rD!"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="button"
                className="password-copy"
                onMouseEnter={() => setCopyHover(true)}
                onMouseLeave={() => setCopyHover(false)}
            >
                {showCopy && <span className="text_body">copied</span>}
                <CopyIcon color={copyHover ? "#E6E5EA" : "#A4FFAF"} />
            </button>
        </div>
    );
};

export default PasswordField;
