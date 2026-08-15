import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faCloudDownload, faCreditCard, faDatabase, faEarth, faEllipsisVertical, faLock, faPlus, faReceipt, faRocket, faServer, faUsers } from "@fortawesome/free-solid-svg-icons";

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
   
    const [connectedApps, setConnectedApps] = useState([
        {
            id:1,
            name: "Google",
            email: "susu@gmail.com",
            connected: true,
            icon:""
        },
        {
            id:1,
            name: "Github",
            email: "susu@gmail.com",
            connected: true,
            icon:""
        },
        {
            id:1,
            name: "Facebook",
            email: "susu@gmail.com",
            connected: false,
            icon:""
        },
    ]);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h6>Account Center</h6>
                    <p className="text-muted mb-0">Manage billing, scbscription, usage, integration and account data.</p>
                </div>

                <button className="btn btn-primary ">Save Changes</button>
            </div>

            <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
                <div className="card-body bg-primary text-white p-4">
                    <div className="row align-items-center">
                        <div className="col-md-8 mb-3">
                            <span className="badge bg-white text-primary rounded-pill mb-3">Current Subscription</span>
                            <h3 className="fw-bold mb-2">Business Pro</h3>
                            <p>Advanced dashboard features, team access, API usage and priority support.</p>
                            <div className="d-flex flex-wrap gap-3">
                                <button className="btn btn-light text-primary fw-semibold">
                                    <FontAwesomeIcon icon={faRocket} className="me-2"/> Upgrade Plan
                                </button>

                                <button className="btn btn-outline-light">
                                    <FontAwesomeIcon icon={faReceipt} className="me-2"/> View Invoices
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white bg-opacity-10 rounded-4 p-4">
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Billing Cycle</span>
                                    <strong>Monthly</strong>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Next Payment</span>
                                    <strong>25 JUl 2026</strong>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Amount</span>
                                    <strong>45,000 MMK</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4 mb-3">
                <div className="col-md-3">
                    <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">
                            <FontAwesomeIcon icon={faDatabase} className="text-primary fs-3 mb-3" />
                            <p className="text-muted mb-1">Storage</p>
                            <h5 className="fw-bold">7.2GB / 10GB</h5>
                            <div className="progress mt-3" style={{height: "8px"}}>
                                <div className="progress-bar" style={{width:"72%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">
                            <FontAwesomeIcon icon={faServer} className="text-success fs-3 mb-3" />
                            <p className="text-muted mb-1">API Requests</p>
                            <h5 className="fw-bold">4,800 / 10,000</h5>
                            <div className="progress mt-3" style={{height: "8px"}}>
                                <div className="progress-bar bg-success" style={{width:"48%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">
                            <FontAwesomeIcon icon={faUsers} className="text-warning fs-3 mb-3" />
                            <p className="text-muted mb-1">Tram Seats</p>
                            <h5 className="fw-bold">3 / 5 Users</h5>
                            <div className="progress mt-3" style={{height: "8px"}}>
                                <div className="progress-bar bg-warning" style={{width:"60%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-3">
                    <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">
                            <FontAwesomeIcon icon={faLock} className="text-danger fs-3 mb-3" />
                            <p className="text-muted mb-1">Security Score</p>
                            <h5 className="fw-bold">92%</h5>
                            <div className="progress mt-3" style={{height: "8px"}}>
                                <div className="progress-bar bg-danger" style={{width:"92%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row g-4">
                <div className="col-md-8">
                    <div className="card border-0 shadow-sm rounded-4 mb-3">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center p-4">
                            <div>
                                <h6 className="fw-bold mb-0">Billing & Payment</h6>
                                <p className="text-muted mb-0">Manage you payment method and invoice history</p>
                            </div>
                            <button className="btn btn-light border btn-sm">
                                <FontAwesomeIcon icon={faCreditCard} className="me-2"/> Change Card
                            </button>
                        </div>

                        <div className="card-body p-4 pt-0">
                            <div className="border rounded-4 p-4 mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-primary bg-opacity-10 text-primary rounded-4 d-flex justify-content-center align-items-center me-3" style={{width:"55px",height: "55px"}}>
                                            <FontAwesomeIcon icon={faCreditCard} />
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Visa ending in 4242</h6>
                                            <p className="text-muted mb-0 small">Expires 12/2028 . Default Payment method</p>
                                        </div>
                                    </div>

                                    <div className="badge bg-success">
                                        <FontAwesomeIcon icon={faCheckCircle} className="me-1" />Active
                                    </div>
                                </div>
                            </div>

                            <h6 className="fw-bold mb-3">Recent Invoices</h6>
                            <div className="table-responsive">
                                <table className="table align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Invoice</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th className="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            invoices.map(invoice=>(
                                                <tr key={invoice.id}>
                                                    <td className="fw-semibold">{invoice.id}</td>
                                                    <td>{invoice.date}</td>
                                                    <td>{invoice.amount}</td>
                                                    <td><span className="badge bg-success">{invoice.status}</span></td>
                                                    <td className="text-end"><button className="btn btn-light btn-sm border">Download</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm rounded-4 mb-3">
                        <div className="card-header bg-white border-0 p-4">
                            <div>
                                <h6 className="fw-bold mb-0">Regional Preferences</h6>
                                <p className="text-muted mb-0">Set language, timezone and currency.</p>
                            </div>
                        </div>

                        <div className="card-body p-4 pt-0">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <label htmlFor="" className="form-label fw-semibold">Lauguage</label>
                                    <select name="language" className="form-select">
                                        <option value="">English</option>
                                        <option value="">Myanmar</option>
                                        <option value="">Thai</option>
                                        <option value="">Japanese</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="" className="form-label fw-semibold">Timezone</label>
                                    <select name="timezone" className="form-select">
                                        <option value="">US/UK</option>
                                        <option value="">Asia/Yangon</option>
                                        <option value="">Asia/Bangkok</option>
                                        <option value="">Asia/Tokyo</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="" className="form-label fw-semibold">Currency</label>
                                    <select name="currency" className="form-select">
                                        <option value="">USD</option>
                                        <option value="">MMD</option>
                                        <option value="">THB</option>
                                        <option value="">SGD</option>
                                    </select>
                                </div>
                            </div>
                                        
                            <div className="alert alert-light border mt-4 mb-0">
                                <FontAwesomeIcon icon={faEarth} className="text-primary me-2"/>
                                These settings affect reports, billing and dashboard format.
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm rounded-4 mb-3">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center p-4">
                            <div>
                                <h6 className="fw-bold mb-0">Team Seats</h6>
                                <p className="text-muted mb-0">Manage members connected to this account.</p>
                            </div>
                            <button className="btn btn-dark border btn-sm">
                                <FontAwesomeIcon icon={faPlus} className="me-2"/> Invoice
                            </button>
                        </div>

                        <div className="card-body p-4 pt-0">
                            {
                                teammembers.map((member,idx)=>(
                                    <div key={idx} className="d-flex justify-content-between align-items-center border rounded-4 p-3 mb-3">
                                        <div>
                                            <h6 className="fw-bold mb-1">{member.name}</h6>
                                            <p className="text-muted mb-0">{member.email}</p>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <span>{member.role}</span>
                                            <button className="btn btn-light btn-sm border"><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm rounded-4 mb-3">
                        <div className="card-header bg-white border-0 p-4">
                            <div>
                                <h6 className="fw-bold mb-0">Data Management</h6>
                                <p className="text-muted mb-0">Export backup or remove your account data.</p>
                            </div>
                        </div>

                        <div className="card-body p-4 pt-0">
                            <div className="row g-3">
                                <div className="col-md-6">
                                   <div className="h-100 border rounde-4 p-4">
                                        <FontAwesomeIcon icon={faCloudDownload} className="text-primary fs-3 mb-3"/>
                                        <h6 className="fw-bold">Export Data</h6>
                                        <p className="text-muted small">Download account settings, billing logs and system usage.</p>
                                        <button type="button" className="btn btn-outline-primary btn-sm">Export Data</button>
                                   </div>
                                </div>

                                <div className="col-md-6">
                                   <div className="h-100 border rounde-4 p-4">
                                        <FontAwesomeIcon icon={faDatabase} className="text-success fs-3 mb-3"/>
                                        <h6 className="fw-bold">Backup status</h6>
                                        <p className="text-muted small">Latest backup completed successfully.</p>
                                        <span className="badge bg-success"><FontAwesomeIcon icon={faCheckCircle} className="me-1" />Backup Active</span>
                                   </div>
                                </div>
                             
                            </div>
                                        
                            <div className="alert alert-light border mt-4 mb-0">
                                <FontAwesomeIcon icon={faEarth} className="text-primary me-2"/>
                                These settings affect reports, billing and dashboard format.
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">

                </div>
            </div>
            
        </div>
    )
};


export default AccountSettings;