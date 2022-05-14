import {useState} from 'react';
import Button from "./Button"
import { api } from "../api"
import List from './List';

const Body = () => {
    const [items, setItems] = useState([])

    async function submit(e){
        e.preventDefault()
        if(data.search !== "" || items.length !== 0){
            const response = await api.service().fetch("http://127.0.0.1:8000/api/items?type="+(data.search.toLowerCase()), true)
            console.log(response.data)
            const items = response.data

            const newItems = items
            setItems(newItems)
        } else
        {
            const newItems = ["empty"]
            setItems(newItems)
        }
        
    }

    const [data, setData] = useState({
        search:"",
    })

    // useEffect(
    //     submit,
    //     [submit]
    //     );
    
    // changes state of input fields onClick of join us button
    // function resetHandle(){
    //     const newdata = {...data}
    //     newdata["search"] = ""
    //     setData(newdata)
    //     // console.log(newdata)
    // }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    // const test = [{"item":"new", "type":"new", "title":"new"}]

    return (
    <div>
    <form className="add-form" onSubmit={(e)=> submit(e)}>
        <div >
            <input onChange={(e)=>handle(e)} value={data.search} id="search" type='text' placeholder="Search Items" className="form-field"/>
            <Button color = "#20c744" />
        </div>
    </form>
    <List items={items} />
    </div>
    )
}

export default Body