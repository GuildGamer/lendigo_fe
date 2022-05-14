import propTypes from 'prop-types';
import Card from './Card';
import {useState} from 'react';
import ReactPaginate from "react-paginate";

const List = ({items}) => {
    const [page, setPage] = useState(0);

    const itemsPerPage = 5;

    const numberOfItemsVistited = page * itemsPerPage;
    
    if (items[0] === "empty"){
        return <div className='no-items'>No Items Found ...</div>
    }

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPage(selected);
      };
      
        

    return <>
    {
      items.slice(
        numberOfItemsVistited, 
        numberOfItemsVistited + itemsPerPage
        ).map( (item) => <Card title={item.title} id={item.id} type={item.type}/>)
    }
    <ReactPaginate 
            previousLabel = {"Previous"} 
            nextLabel={"Next"} 
            pageCount={totalPages} 
            onPageChange={changePage}
            containerClassName={"navigationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"navigationDisabled"}
            activeClassName={"navigationActive"}
        />;
  </>;
}

List.defaultProps = {
    items: [],
}

List.propTypes = {
    items: propTypes.array,
}

export default List