import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <React.Fragment>
            <h1>Navigation</h1>
            <ul className="nav-links">

                <NavLink to="/"><li><i className="home icon"></i>Home</li></NavLink>

                <NavLink to="/counter"><li><i className="graduation cap icon"></i>Counter</li></NavLink>

                <NavLink to="/fetchData"><li><i className="database icon"></i>Featch data</li></NavLink>

                <NavLink to="todo"><li><i className="tasks icon"></i>To Do</li></NavLink>

            </ul>
        </React.Fragment>
    );
};

export default Nav;