import propTypes from 'prop-types';
import Card from './Card';
import {useState, useContext} from 'react';
import { ItemContext } from '../Contexts/Context';
import ReactPaginate from "react-paginate";
import "../index.css"

import { Link } from 'react-router-dom';

const List = ({items}) => {

  const {setItemValue} = useContext(ItemContext)


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
        <Link to="/item-details" className="remove-text-deco">
          <div onClick={()=>{setItemValue(item)} }>
          <Card item={item}/>
          </div>
        </Link>
        )
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