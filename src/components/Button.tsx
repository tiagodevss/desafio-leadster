'use client';

type ButtonProps = {
    text: string;
    onClick: (event: React.MouseEvent<any>) => void;
    isActive: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
    const { text, onClick, isActive } = props;

    return (
        <a
            className={isActive ? "button-active" : "button-not-active"}
            onClick={(e) => onClick(e)}
        >
            {text}
        </a>
    )
}

export default Button;