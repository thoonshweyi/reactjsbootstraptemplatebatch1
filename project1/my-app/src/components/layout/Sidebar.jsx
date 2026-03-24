import React from "react";
import {NavLink} from "react-router"
const Sidebar = ()=>{
    const menuItems = [
        {path: "/dashboard",icon:"",label:"Dashboard"},
        {path: "/users",icon:"",label:"Users"},
        {path: "/products",icon:"",label:"Products"},
        {path: "/analytics",icon:"",label:"Analytics"},
        {path: "/calendar",icon:"",label:"Calendar"},
        {path: "/reports",icon:"",label:"Reports"},
        {path: "/settings",icon:"",label:"Settings"}
    ];

    return (
        <aside>
            {/* Header */}
            <div>
                <div className="logo">
                    <h4 className="text-white mb-0">AdminPro</h4>
                    <small className="text-white opacity-75">Premium Dashboard</small>
                </div>

                <button type="button" className="btn btn-link text-white border-0 p-0">right arrow</button>
            </div>

            {/* Menu */}
            <div className="sidebar-menu px-3">
                <ul className="nav flex-column">
                    {
                        menuItems.map((menuItem,idx)=>(
                            <li className="nav-item" key={idx}>
                                <NavLink to={menuItem.path}>
                                    <span>{menuItem.label}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* User */}
            <div className="bg-dark bg-opacity-25 mt-5 p-3">
                <div className="d-flex align-items-center">

                    <div className="me-3">
                        <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width:"40px", height:"40px"}}>
                            icon
                        </div>
                    </div>
                    <div>
                        <h6 className="text-white mb-0">Kyaw Kyaw</h6>
                        <small className="text-white opacity-75">Administrator</small>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="p-3">
                <NavLink to="/logout" className="nav-link text-white d-flex align-items-center">
                    <span className="ms-3">Logout</span>
                </NavLink>
            </div>

        </aside>
    )
}

export default Sidebar;