import propTypes from 'prop-types';
import Card from './Card';
import {useState} from 'react';
import ReactPaginate from "react-paginate";

const List = ({items}) => {

    // create global state named itemValue using redux 

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
        ).map( (item) => 

        // Add onlick event listener to change the state of itemValue
        // use List to route Detail page
        <Card item={item}
        />)
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
        />
  </>;
}

List.defaultProps = {
    items: [],
}

List.propTypes = {
    items: propTypes.array,
}

export default List