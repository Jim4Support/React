import React, { useState, useEffect } from "react";
import './Sidebar.css';
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

    const [lists, setLists] = useState([]);
    

    async function getLists() {
        const listElement = await axios.get("http://localhost:4000/api/lists")
        setLists(listElement.data)
    }

    useEffect(() => {
        getLists()
    }, [])

    return (
        <header className="sidebar">
            {
                lists.map(list => {
                    return (
                        <div key={list.id}>
                            <div>
                                <NavLink to={`/todo-list/${list.id}`}>
                                    {list.name}
                                </NavLink>
                            </div>    
                        </div>
                    )
                })
            }
            <br />
            <NavLink to="/today">Tasks on today</NavLink>
        </header>
    )
}
