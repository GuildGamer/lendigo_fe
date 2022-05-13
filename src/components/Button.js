import propTypes from 'prop-types';

const Button = ({text}) => {

    return (
    <button className="btn">
            {text}
        </button>
        )
}

Button.defaultProps = {
    text: "new",
}

Button.propTypes = {
    text: propTypes.string,
    onClick: propTypes.func,
}


export default Button