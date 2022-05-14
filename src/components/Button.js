import propTypes from 'prop-types';
import { FcSearch } from "react-icons/fc"

const Button = ({text}) => {
    return (
    <button className="btn">
            {/* {text} */}
            <FcSearch />
        </button>
        )
}

Button.defaultProps = {
    // text: "new",
}

Button.propTypes = {
    // text: propTypes.string,
    onClick: propTypes.func,
}


export default Button