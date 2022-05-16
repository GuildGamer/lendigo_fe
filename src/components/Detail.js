import propTypes from 'prop-types';
import Card from "./Card"
import { useContext } from 'react';
import { ItemContext } from '../Contexts/Context';

const Detail = () => {

    const { itemValue } = useContext(ItemContext)

    return (
        <div className="add-form">
            <Card item = {itemValue} detail={true}/>
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