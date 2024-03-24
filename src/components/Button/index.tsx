import { FC, ReactNode, useState } from "react";
import ArrowIcon from "../../icons/ArrowIcon";
import "./style.css";

const colors = {
    true: "var(--color-mint-green)",
    false: "var(--color-dark-gunmetal)",
};

type Props = {
    children?: ReactNode;
};

const Button: FC<Props> = ({ children }) => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <button
            type="button"
            className="button"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className="text_body">{children}</span>
            {children && (
                <ArrowIcon color={hovered ? colors.true : colors.false} />
            )}
        </button>
    );
};

export default Button;
