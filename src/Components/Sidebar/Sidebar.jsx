import React, { useState, useEffect } from "react";
import './Sidebar.css';
import { getLists } from "../../Connection/listsConnect";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

    const [lists, setLists] = useState([]);
    
    useEffect(() => {
        getLists().then(setLists)
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
