import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faBriefcase, faCalendarDays, faCamera, faCircleCheck, faClock, faCog, faComments, faDesktop, faEnvelope, faGlobe, faHeadset, faLocationDot, faLock, faMobilePhone, faPaperPlane, faPhone, faShieldHalved, faTrash, faUserCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const AccountSettings = ()=>{
    
    const [showChat,setShowChat] = useState(false);

    const invoices = [
        {
            id: "INV-1001",
            date: "25 Jun 2026",
            amount: "45,000 MMK",
            status: "Paid"
        },
        {
            id: "INV-1000",
            date: "25 Jun 2026",
            amount: "45,000 MMK",
            status: "Paid"
        },
        {
            id: "INV-0999",
            date: "25 Jun 2026",
            amount: "45,000 MMK",
            status: "Paid"
        }
    ];

    const teammembers = [
        {
            name: "Aung Kyaw",
            role: "Owner",
            email: "aungkyaw@gmail.com"
        },
        {
            name: "Su Su",
            role: "Admin",
            email: "susu@gmail.com"
        },
        {
            name: "Mg Mg",
            role: "Editor",
            email: "maungmaung@gmail.com"
        }
    ]
   
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h6>Account Center</h6>
                    <p className="text-muted mb-0">Manage billing, subscription, usage, integrations and account data.</p>
                </div>

                <a href="/account" className="btn btn-outline-primary btn-sm rounded-3 px-4"><FontAwesomeIcon icon={faCog} className="me-2"/> Account Settings</a>
            </div>
           
        </div>
    )
};


export default AccountSettings;