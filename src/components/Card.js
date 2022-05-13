import propTypes from 'prop-types';

const Card=({item}) =>{
    return(
    <div className="card">
        if( {item.title} != null){
            <h3>{item.title}</h3>
        }
        if( {item.id} != null){
            <h5>ID: {item.id}</h5>
        }
        if( {item.type} != null){
            <h5>Item Type: {item.type}</h5>
        }
    </div>
    )

}

Card.defaultProps = {
    item: null,
}

Card.propTypes = {
    item: propTypes.array,
    // onClick: propTypes.func,
}

export default Card