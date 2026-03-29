import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faBars, faBell, faUser, faGear, faUserGear, faRightFromBracket, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Header = ()=>{
    return (
        <header className="headers">
            <div className="d-flex align-items-center justify-content-between">
               {/* left */}
                <div className="d-flex align-items-center">
                    {/* sidebar toggler */}
                    <button className="btn btn-light me-3" style={{width: "40px",height: "40px",borderRadius:"50%"}}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {/* search */}
                    <div className="input-group" style={{maxWidth: "400px"}}>
                        <span className="input-group-text"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <input type="text" className="form-control" placeholder="Search...."/>
                    </div>

                </div>

               {/* right */}
               <div className="d-flex align-items-center">
                    {/* notification */}
                    <div className="dropdown me-3">
                        <button type="button" className="btn btn-light position-relative" data-bs-toggle="dropdown" style={{width: "40px", height: "40px" ,borderRadius: "50%", padding: "0px"}}>
                            <FontAwesomeIcon icon={faBell} />
                            <span className="badge bg-danger rounded position-absolute start-100 top-0" style={{fontSize: "7px", padding: "3px 5px"}}>3</span>
                        </button>
                        <ul className="dropdown-menu shadow-lg">
                            <li><h6 className="dropdown-header">Notification</h6></li>
                            <li><a href="#" className="dropdown-item">New user registered</a></li>
                            <li><a href="#" className="dropdown-item">Order completed</a></li>
                            <li><a href="#" className="dropdown-item">System update</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a href="#" className="dropdown-item">View all notifications</a></li>
                        </ul>
                        
                    </div>

                    {/* user menu */}
                    <div className="dropdown">
                        <button type="button" className="btn btn-light d-flex align-items-center" data-bs-toggle="dropdown" style={{borderRadius:"25px"}}>
                            <div className="d-flex justify-content-center align-items-center me-2" style={{width:"25px",height:"25px"}}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <span className="">Admin</span>
                        </button>
                        <ul className="dropdown-menu shadow-lg">
                            <li><a href="/profile" className="dropdown-item"><FontAwesomeIcon icon={faGear} className="me-2" /> Profile Settings</a></li>
                            <li><a href="/account" className="dropdown-item"><FontAwesomeIcon icon={faUserGear} className="me-2" /> Account Settings</a></li>
                            
                            <li><hr className="dropdown-divider"/></li>
                            <li><a href="/logout" className="dropdown-item text-danger"><FontAwesomeIcon icon={faRightFromBracket} className="me-2" /> Logout</a></li>
                        </ul>
                        
                    </div>
               </div>
            </div>
        </header>
    )
}

export default Header;