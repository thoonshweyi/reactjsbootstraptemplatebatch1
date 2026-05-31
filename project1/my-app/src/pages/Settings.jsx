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
                            <div>

                            </div>
                        )
                    }

                    {
                        activeTab == 'notification' && (
                            <div>
                                
                            </div>
                        )
                    }

                    {
                        activeTab == 'security' && (
                            <div>

                            </div>
                        )
                    }

                    {
                        activeTab == 'appearance' && (
                            <div>
                                
                            </div>
                        )
                    }
                </div>
            </div>
           
        </div>
    )
};


export default Settings;