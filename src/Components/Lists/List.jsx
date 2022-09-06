import React, { useState, useEffect } from "react";
import axios from "axios";

export default function List() {
   
    const [lists, setLists] = useState([]);

    async function getListOfTasks() {
        const listElement = await axios.get("http://localhost:4000/api/lists")
        setLists(listElement.data)
    }

    useEffect(() => {
      getListOfTasks()
  }, [])

    // return (
    //     <div className='list'>
    //         {
    //         lists.map(l => {
    //         return <div key={lists.id} >
    //             {
    //            <div> { l.name }</div>
    //             }
    //            </div>
    //         })
    //     }
    //         <h1>Lists: {lists}</h1>
    //     </div>
    // )
}