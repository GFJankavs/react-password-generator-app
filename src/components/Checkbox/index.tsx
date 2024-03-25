import { FC, ReactNode, useState } from "react";
import "./style.css";

type Props = {
    children?: ReactNode;
    value: boolean;
    onCheck: (value: boolean) => void;
};

const Checkbox: FC<Props> = ({ children, onCheck, value }) => {
    const [checked, setChecked] = useState<boolean>(value);

    const handleCheckbox = (value: React.MouseEvent<HTMLInputElement>) => {
        const target = value.target as HTMLInputElement;
        setChecked(target.checked);
        onCheck(target.checked);
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
