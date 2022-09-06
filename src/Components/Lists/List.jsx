import React, { useState, useEffect } from "react";
import { getListOfTasks } from "../../Connection/listConnect";

export default function List() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        getListOfTasks.then(lists => setLists(lists.data))
    }, [lists.length])

    return (
        <div>
            Lists:
        </div>
    )
}