import {useEffect, useState} from 'react';
import Button from "./Button"
import { api } from "../api"
import Card from './Card';

const Body = () => {
    async function submit(e){
        e.preventDefault()
        const response = await api.service().fetch("http://127.0.0.1:8000/api/items?type="+data.search, true)
        console.log(response.data)
        return response.data
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

    return (
    <form className="add-form" onSubmit={(e)=> submit(e)}>
        <div >
            <input onChange={(e)=>handle(e)} value={data.search} id="search" type='text' placeholder="Search Items" className="form-field"/>
            <Button color = "#20c744" text="Search" />
            {/* < Card /> */}
        </div>
    </form>
    )
}

export default Body