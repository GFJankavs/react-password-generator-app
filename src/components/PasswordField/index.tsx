import { FC, useCallback, useEffect, useMemo, useState } from "react";
import CopyIcon from "../../icons/CopyIcon";
import "./style.css";
import debounce from "../../utils/debounce";

type Props = {
    value: string;
    setValue: (value: string) => void;
};

const PasswordField: FC<Props> = ({ value, setValue }) => {
    const [copyHover, setCopyHover] = useState(false);
    const [showCopy, setShowCopy] = useState<boolean>(false);

    const isDisabled = useMemo(() => value === "", [value]);

    const handlePasswordCopy = () => {
        navigator.clipboard.writeText(value);
        setShowCopy(true);
    }

    const debouncedSetShowCopy = useCallback(debounce((value) => setShowCopy(value), 1000), []);

    useEffect(() => {
        if (showCopy) {
            debouncedSetShowCopy(false);
        }
    }, [showCopy, debouncedSetShowCopy]);

    return (
        <div className="password">
            <input
                className="password-input heading--l"
                placeholder="P4$5W0rD!"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="button"
                className="password-copy"
                onMouseEnter={() => setCopyHover(true)}
                onMouseLeave={() => setCopyHover(false)}
                onClick={handlePasswordCopy}
                disabled={isDisabled}
            >
                {showCopy && <span className="text_body">copied</span>}
                <CopyIcon color={copyHover && !isDisabled ? "#E6E5EA" : "#A4FFAF"} />
            </button>
        </div>
    );
};

export default PasswordField;
