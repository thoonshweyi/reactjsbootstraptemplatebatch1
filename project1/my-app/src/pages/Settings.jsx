import React, { useState } from "react";

const Settings = ()=>{
    const [activeTab,setActiveTab] = useState('general');
    
    const menuitems = [
        {key: "general", label: "General Settings"},
        {key: "notifications", label: "Notifications"},
        {key: "security", label: "Security"},
        {key: "appearance", label: "Appearance"},
    ];

    return (
        <div>
            <div className="mb-3">
                <h6>Settings</h6>
                <p className="text-uted mb-0">Manage your dashboard settings and preferences.</p>
            </div>

            <div className="row g-4">
                <div className="col-md-3">
                    <div className="card-border-0 shadow-sm rounded-3">
                        <div className="card-body p-3">
                            <h6 className="fw-bold px-2 mb-3">Settings Menu</h6>

                            <div className="nav flex-column nav-pills gap-2">
                                {
                                    menuitems.map(menuitem=>(
                                        <button type="button" key={menuitem.key} className={`nav-link text-start rounded-3 ${
                                            activeTab == menuitem.key ? "active" : "text-dark"
                                        }`} onClick={()=>setActiveTab(menuitem.key)}>{menuitem.label}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    {
                        activeTab == 'general' && (
                            <div className="card border-0 shadow-sm rounded-4">
                                <div className="card-header bg-white border-0 p-4">
                                    <h6>General Settings</h6>
                                    <p className="text-muted mb-0">Update basic website information</p>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="" className="form-label">Site Name</label>
                                            <input type="text" name="sitename" id="sitename" className="form-control" defaultValue='Admin Dashboard'/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="" className="form-label">Admin Email</label>
                                            <input type="email" name="email" id="email" className="form-control" defaultValue='admin@example.com'/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="" className="form-label">Phone</label>
                                            <input type="text" name="phone" id="phone" className="form-control" defaultValue='09123456789'/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="" className="form-label">Timezone</label>
                                            <select name="timezone" id="timezone"  className="form-select" defaultValue='Asia/Yanngon'>
                                                <option value="Asia/Yangon">Asia/Yangon</option>
                                                <option value="Asia/Bangkok">Asia/Bangkok</option>
                                                <option value="Asia/Singapore">Asia/Singapore</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-4">Save General Settings</button>
                                </div>
                            </div>
                        )
                    }

                    {
                        activeTab == 'notifications' && (
                            <div className="card border-0 shadow-sm rounded-4">
                                <div className="card-header bg-white border-0 p-4">
                                    <h6>Notifcations</h6>
                                    <p className="text-muted mb-0">Control email, SMS and system alerts.</p>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    {
                                        ["Email Notifications","SMS Notifications","Order Alerts"].map((item,idx)=>(
                                            <div key={idx} className="d-flex justify-content-between align-items-center border rounded-4 p-3 mb-3">
                                                <div>
                                                    <h6 className="fw-bold mb-1">{item}</h6>
                                                    <p className="text-muted mb-0">Enable or disable {item.toLowerCase()}.</p>
                                                </div>

                                                <div className="form-check form-switch">
                                                    <input type="checkbox" className="form-check-input" defaultChecked={true} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <button type="submit" className="btn btn-primary mt-4">Save Notification Settings</button>
                                </div>
                            </div>
                        )
                    }

                    {
                        activeTab == 'security' && (
                            <div className="card border-0 shadow-sm rounded-4">
                                <div className="card-header bg-white border-0 p-4">
                                    <h6>Security</h6>
                                    <p className="text-muted mb-0">Manage password and security options.</p>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <label htmlFor="" className="form-label">Current Password</label>
                                            <input type="password" name="password" id="password" className="form-control"/>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="" className="form-label">New Password</label>
                                            <input type="password" name="newpassword" id="newpassword" className="form-control"/>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="" className="form-label">Confirm Password</label>
                                            <input type="password" name="cfnpassword" id="cfnpassword" className="form-control"/>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="d-flex justify-content-between align-items-center border rounded-4 p-3 mb-3">
                                                <div>
                                                    <h6 className="fw-bold mb-1">Two-Factor Authentication</h6>
                                                    <p className="text-muted mb-0">Ad extra security to your account.</p>
                                                </div>

                                                <div className="form-check form-switch">
                                                    <input type="checkbox" className="form-check-input" defaultChecked={false} />
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-4">Update Security</button>
                                </div>
                            </div>
                        )
                    }

                    {
                        activeTab == 'appearance' && (
                            <div className="card border-0 shadow-sm rounded-4">
                                <div className="card-header bg-white border-0 p-4">
                                    <h6>Appearance</h6>
                                    <p className="text-muted mb-0">Customize dashboard look and feel.</p>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <div className="row">
                                    {
                                        ["Light Mode","Dark Mode","System Default"].map((theme,index)=>(
                                            <div key={index} className="col-md-4">
                                                <div className="border rounded-4 p-4 h-100">
                                                    <div className="form-check">
                                                        <input type="radio" name="theme" id="theme" className="form-check-input" defaultChecked={index === 0 }/>
                                                        <label htmlFor="" className="form-check-label fw-bold">{theme}</label>
                                                    </div>
                                                    <p className="text-muted mb-0">Use {theme.toLowerCase()} for dashboard UI. </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                    <hr />

                                    <div className="">
                                        <label htmlFor="" className="form-label">Sidebar style</label>
                                        <select name="timezone" id="timezone"  className="form-select" defaultValue='Default Sidebar'>
                                            <option value="Default Sidebar">Default Sidebar</option>
                                            <option value="Compact Sidebar">Compact Sidebar</option>
                                            <option value="Icon Sidebar">Icon Sidebar</option>
                                        </select>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary mt-4">Save Appearance</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
           
        </div>
    )
};


export default Settings;