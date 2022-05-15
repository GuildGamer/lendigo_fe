import propTypes from 'prop-types';

const Card=({item, detail}) =>{

    if ({detail} === true){
        return<>
        {
            item.map( (element) => 
            <div>
            <h3>{element}</h3>
            </div>
            )
        }
        </>
    }
    return(
    <div className="card">
            <h3>{item.title}</h3>
            <h5>this is a {item.type}</h5>
    </div>
    )
}


Card.defaultProps = {
    item: [],
    detail: false
}

Card.propTypes = {
    item: propTypes.array,
    detail: propTypes.bool
}

export default Card