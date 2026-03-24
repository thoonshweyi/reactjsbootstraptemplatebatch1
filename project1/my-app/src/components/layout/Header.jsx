import React from "react";

const Header = ()=>{
    return (
        <header className="headers">
            <div className="d-flex align-items-center justify-content-between">
               {/* left */}
                <div className="d-flex align-items-center">
                    {/* sidebar toggler */}
                    <button className="btn btn-light me-3" style={{width: "40px",height: "40px",borderRadius:"50%"}}>
                        btn
                    </button>

                    {/* search */}
                    <div className="input-group" style={{maxWidth: "400px"}}>
                        <span className="input-group-text">Search btn</span>
                        <input type="text" className="form-control" placeholder="Search...."/>
                    </div>

                </div>

               {/* right */}
               <div className="d-flex align-items-center">
                    {/* notification */}
                    <div className="dropdown me-3">
                        <button type="button" className="btn btn-light" data-bs-toggle="dropdown">
                            bell
                            <span className="badge bg-danger rounded">3</span>
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
                        <button type="button" className="btn btn-light" data-bs-toggle="dropdown">
                            <span className="">Admin</span>
                        </button>
                        <ul className="dropdown-menu shadow-lg">
                            <li><a href="/profile" className="dropdown-item">Profile Settings</a></li>
                            <li><a href="/account" className="dropdown-item">Account Settings</a></li>
                            
                            <li><hr className="dropdown-divider"/></li>
                            <li><a href="/logout" className="dropdown-item">Logout</a></li>
                        </ul>
                        
                    </div>
               </div>
            </div>
        </header>
    )
}

export default Header;