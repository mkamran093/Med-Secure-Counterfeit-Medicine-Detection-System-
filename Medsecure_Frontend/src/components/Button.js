import '../css/Button.css';

const BUTTON_STYLES = ['btn--primary', 'btn--outline', 'btn--long'];
const BUTTON_SIZES = ['btn--medium', 'btn--large'];

export const CustomButton = ({
    children,
    type,
    onClick,
    style,
    size
}) => {
    const buttonStyle = BUTTON_STYLES.includes(style)
        ? style
        : BUTTON_STYLES[0];

    const buttonSize = BUTTON_SIZES.includes(size)
        ? size
        : BUTTON_SIZES[0];

    return (
        <button
            className={`btn ${buttonStyle} ${buttonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}

