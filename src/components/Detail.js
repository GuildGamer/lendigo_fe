import propTypes from 'prop-types';
import Card from "./Card"

const Detail = ({item}) => {
    return (
        <div className="add-form">
            <Card item = {item} detail={true}/>
        </div>
    )
}

Detail.defaultProps = {
    item: [],
}

Detail.propTypes = {
    item: propTypes.array,
}

export default Detail