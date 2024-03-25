import { ButtonHTMLAttributes, FC, PropsWithChildren, useState } from "react";
import ArrowIcon from "../../icons/ArrowIcon";
import "./style.css";

const colors = {
    true: "var(--color-mint-green)",
    false: "var(--color-dark-gunmetal)",
};

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<Props> = ({ children, disabled, onClick }) => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <button
            type="button"
            className="button"
            disabled={disabled}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
        >
            <span className="text_body">{children}</span>
            {children && (
                <ArrowIcon color={hovered ? colors.true : colors.false} />
            )}
        </button>
    );
};

export default Button;
