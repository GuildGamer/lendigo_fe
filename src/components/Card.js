import propTypes from 'prop-types';

const Card=({title, id, type}) =>{
    return(
    <div className="card">
            <h3>{title}</h3>
            <h5>this is a {type}</h5>
        </div>
    
    )
}


Card.defaultProps = {
    id: 0,
    title: "Default Title",
    type: "Defaule Type"
}

Card.propTypes = {
    id: propTypes.number,
    type: propTypes.string,
    title: propTypes.string
    // onClick: propTypes.func,
}

export default Card