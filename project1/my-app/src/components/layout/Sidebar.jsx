import React from "react";
import {NavLink,Link} from "react-router"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faGear, faHouse, faBox, faChartLine, faCalendar, faFile, faFileLines, faRightFromBracket, faGrip, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({toggleSidebar,isOpen=true})=>{
    const menuItems = [
        {path: "/dashboard",icon: faHouse,label:"Dashboard"},
        {path: "/users",icon: faUser,label:"Users"},
        {path: "/products",icon: faBox,label:"Products"},
        {path: "/analytics",icon: faChartLine,label:"Analytics"},
        {path: "/calendar",icon: faCalendar,label:"Calendar"},
        {path: "/reports",icon: faFileLines,label:"Reports"},
        {path: "/settings",icon: faGear,label:"Settings"}
    ];

    return (
        <aside className={`sidebar ${isOpen ? "" : "collapsed"}`}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center p-4">

                {
                    isOpen && (
                        <div className="logo">
                            <h4 className="text-white mb-0"><FontAwesomeIcon icon={faGrip} className="me-2"/> AdminPro</h4>
                            <small className="text-white opacity-75">Premium Dashboard</small>
                        </div>
                    )
                }
               

                <button type="button" className="btn btn-link text-white border-0 p-0" onClick={toggleSidebar}><FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} className="me-2"/></button>
            </div>

            {/* Menu */}
            <div className="sidebar-menus px-3">
                <ul className="nav flex-column">
                    {
                        menuItems.map((menuItem,idx)=>(
                            <li className="nav-item" key={idx}>
                                <NavLink to={menuItem.path} className={({isActive})=> `nav-links d-flex align-items-center ${isActive ? 'active' : ''}`}>
                                    <FontAwesomeIcon icon={menuItem.icon} className="icon"/>
                                    {isOpen && <span className="labels ms-3">{menuItem.label}</span>}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                    
                {/* User Profile */}
                {
                    isOpen && (
                    <Link to={"/profile"} className="text-decoration-none">
                        <div className="bg-dark bg-opacity-25 mt-5 p-3">
                            <div className="d-flex align-items-center">

                                <div className="me-3">
                                    <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width:"40px", height:"40px"}}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                </div>
                                <div>
                                    <h6 className="text-white mb-0">Kyaw Kyaw</h6>
                                    <small className="text-white opacity-75">Administrator</small>
                                </div>
                            </div>
                        </div>
                    </Link>
                    )
                }

            </div>


            {/* Footer */}
            <div className="p-3">
                <NavLink to="/logout" className="nav-link text-white d-flex align-items-center">
                    <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
                    {isOpen && <span className="ms-3">Logout</span>}
                </NavLink>
            </div>

        </aside>
    )
}

export default Sidebar;

// 🧠 What actually happens

// Normally:

// <a className="my-class" />

// But NavLink does this internally:

// const finalClassName =
//   typeof className === "function"
//     ? className({ isActive: true/false })
//     : className;

// So when you pass:

// className={({ isActive }) => 
//   isActive ? "active" : ""
// }

// 👉 NavLink calls your function and uses the result.