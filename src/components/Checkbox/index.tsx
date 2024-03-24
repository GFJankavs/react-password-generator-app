import { FC, useState } from "react";
import "./style.css";

type Props = {
    children?: React.ReactNode;
};

const Checkbox: FC<Props> = ({ children }) => {
    const [checked, setChecked] = useState<boolean>(false);

    const handleCheckbox = (value: React.MouseEvent<HTMLInputElement>) => {
        const target = value.target as HTMLInputElement;
        setChecked(target.checked);
    };

    return (
        <label className="checkbox_container">
            <div className="text_body">{children}</div>
            <input type="checkbox" checked={checked} onClick={handleCheckbox} />
            <span className="checkmark"></span>
        </label>
    );
};

export default Checkbox;
