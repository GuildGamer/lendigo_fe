import propTypes from 'prop-types';

const Card=({item, detail}) =>{

    var arrayObj = Object.values(item);

    if (detail === true){
        
        return<>
        {
            <div className="card">
                {arrayObj.map((value) =>
                    <ul className="detail-list">
                        <li>
                            {value} 
                        </li>
                    </ul>
                )}
            </div>
        }</>
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