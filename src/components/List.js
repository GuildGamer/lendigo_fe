import propTypes from 'prop-types';
import Card from './Card';

const List = ({items}) => {
    if (items[0] === "empty"){
        return <div className='no-items'>No Items Found ...</div>
    }
    return <>
    {
      items.map( (item) => <Card title={item.title} id={item.id} type={item.type}/>)
    }
  </>;
}

List.defaultProps = {
    items: [],
}

List.propTypes = {
    items: propTypes.array,
}

export default List