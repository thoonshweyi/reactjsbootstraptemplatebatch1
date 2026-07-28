import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faBriefcase, faCalendarDays, faCamera, faCircleCheck, faClock, faCog, faComments, faDesktop, faEnvelope, faGlobe, faHeadset, faLocationDot, faLock, faMobilePhone, faPaperPlane, faPhone, faShieldHalved, faTrash, faUserCheck, faXmark} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const ProfileSettings = ()=>{
    const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/300")

    const [user, setUser] = useState({
        fullname: "Aung Kaw",
        role: "Senior Full Stack Developer",
        email: "aungkyaw@gmail.com",
        phone: "+95 9123456789",
        address: "Yangon, Myanmr",
        bio: "I build modern web application using React, Laravel, Node.js and MongoDB.",
        website: "https://dltmyanmar.com",
        github: "https://github.com/datalandtechnology"
    });

    const [showChat,setShowChat] = useState(false);
    const [chatInput,setChatInput] = useState("");
    const [messages,setMessages] = useState([
        {
            id:1,
            sender: "support",
            text: "Hi Aung Kyaw 👋 How can we help you today?"
        },
        {
            id:2,
            sender: "user",
            text: "I need help with my account settings."
        },
    ]);
    const sendMessageHandler = ()=>{
        if(!chatInput.trim()) return;

        const newmessage = {
            id: Date.now(),
            sender: "user",
            text: chatInput
        };

        setMessages([...messages,newmessage]);
        setChatInput("");
    };

    const [activeTab,setActiveTab] = useState('overview');

    const imageChangeHandler = (e)=>{
        const file = e.target.files[0];
        if(file){
            setProfileImage(URL.createObjectURL(file));
        }
    }
    
    const menuitems = [
        {key: "overview", label: "Overview", icon: faUserCheck},
        {key: "profile", label: "Edit Profile", icon: faBriefcase},
        {key: "security", label: "Security", icon: faShieldHalved},
        {key: "notifications", label: "Notifications", icon: faBell},
        {key: "activity", label: "Activity", icon: faClock},
    ];

    const devicesessions = [
        {
            device: "Desktop",
            browser: "Chrome",
            location: "Yangon, Myanmar",
            time: "Active now",
            icon: faDesktop
        },
        {
            device: "Mobile Phone",
            browser: "Firefox",
            location: "Bangkok, Thailand",
            time: "2 hours ago",
            icon: faMobilePhone
        },
    ];
    
    const [notifys,setNotifys] = useState({
        email:true,
        sms: false,
        loginAlert:true,
        productUpdate:true
    });

    const notifyChangeHandler = (e)=>{
        setNotifys({
            ...notifys,
            [e.target.name]: e.target.checked
        });
    }

    const closeAccHandler = ()=>{
        if(confirm("Are you sure you want to close this account?")){
            alert("Acount close request submitted.")
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h6>Profile Settings</h6>
                    <p className="text-muted mb-0">Manage your account, security, notification and activity settings.</p>
                </div>

                <a href="/account" className="btn btn-outline-primary btn-sm rounded-3 px-4"><FontAwesomeIcon icon={faCog} className="me-2"/> Account Settings</a>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-3">
                        <div className="bg-primary" style={{height:"120px"}}></div>

                        <div className="card-body text-center p-4" style={{marginTop: "-80px"}}>
                            <div className="position-relative d-inline-block">
                                <img src={profileImage} className="rounded-circle border border-4 border-white shadow" width="140" height="140" alt="profile" />
                                <input type="file" name="profileImage" id="profileImage" className="d-none" accept="image/*" onChange={imageChangeHandler} />
                                <label htmlFor="profileImage" className="btn btn-primary rounded-circle position-absolute bottom-0 end-0 shadow" style={{width:"42px", height: "42px", cursor: "pointer"}}><FontAwesomeIcon icon={faCamera} /></label>
                            </div>
                            <h6 className="fw-bold mt-3 mb-1">{user.fullname}</h6>
                            <p className="text-muted mb-2">{user.role}</p>
                            <span className="badge bg-success rounded-pill px-3 py-2"><FontAwesomeIcon icon={faUserCheck} className="me-2"/> Active Account</span>
                            <hr />

                            <div className="text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3" />
                                    <span>{user.email}</span>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <FontAwesomeIcon icon={faPhone} className="text-primary me-3" />
                                    <span>{user.phone}</span>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-primary me-3" />
                                    <span>{user.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-border-0 shadow-sm rounded-3 mb-3">
                        <div className="card-body p-3">
                            <h6 className="fw-bold px-2 mb-3">Profile Menu</h6>

                            <div className="nav flex-column nav-pills gap-2">
                                {
                                    menuitems.map(menuitem=>(
                                        <button type="button" key={menuitem.key} className={`nav-link text-start rounded-3 ${
                                            activeTab == menuitem.key ? "active" : "text-dark"
                                        }`} onClick={()=>setActiveTab(menuitem.key)}><FontAwesomeIcon icon={menuitem.icon} /> {menuitem.label}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="card-border-0 shadow-sm rounded-3">
                        <div className="card-body p-3">
                            <h6 className="fw-bold px-2 mb-3">Need Help?</h6>
                            <p className="text-muted">Contact support team for account or profile issues.</p>

                            <button className="w-100 btn btn-outline-primary rounded-3" onClick={()=>setShowChat(true)}><FontAwesomeIcon icon={faComments} className="me-2" />Chat Support</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    {
                        activeTab == 'overview' && (
                            <div>
                                <div className="row g-4 mb-3">
                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm rounded-4">
                                            <div className="card-body py-4">
                                                <FontAwesomeIcon icon={faBriefcase} className="text-primary fs-4 mb-3"/>
                                                <p>Projects</p>
                                                <h5 className="fw-bold mb-0">24</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm rounded-4">
                                            <div className="card-body py-4">
                                                <FontAwesomeIcon icon={faCalendarDays} className="text-success fs-4 mb-3"/>
                                                <p>Member Since</p>
                                                <h5 className="fw-bold mb-0">Jan 2024</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm rounded-4">
                                            <div className="card-body py-4">
                                                <FontAwesomeIcon icon={faShieldHalved} className="text-warning fs-4 mb-3"/>
                                                <p>Securitiy</p>
                                                <h5 className="fw-bold mb-0">Verified</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0 shadow-sm rounded-4">
                                    <div className="card-header bg-white border-0 p-4">
                                        <h6 className="fw-bold mb-1">Profile Preview</h6>
                                        <p className="text-muted mb-0">Basic account information.</p>
                                    </div>
                                    <div className="card-body">
                                        <p>{user.bio}</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <small className="text-muted">Website</small>
                                                <p className="fw-semibold mb-0">{user.website}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <small className="text-muted">Github</small>
                                                <p className="fw-semibold mb-0">{user.github}</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )
                    }

                    {
                        activeTab == 'profile' && (
                            <form action="">
                                <div className="card border-0 shadow-sm rounded-4 mb-3">
                                    <div className="card-header bg-white border-0 p-4">
                                        <h6>Personal Information</h6>
                                        <p className="text-muted mb-0">Update your name, role and contact information.</p>
                                    </div>
                                    <div className="card-body p-4 pt-0">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="" className="form-label fw-semibold">Full Name</label>
                                                <input type="text" name="fullname" id="fullname" className="form-control form-control-sm" defaultValue={user.fullname} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="" className="form-label">Job Role</label>
                                                <input type="text" name="role" id="role" className="form-control form-control-sm" defaultValue={user.role}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="" className="form-label">Email</label>

                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-text bg-white"><FontAwesomeIcon icon={faEnvelope} /></span>
                                                    <input type="email" name="email" id="email" className="form-control form-control-sm" defaultValue={user.email}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="" className="form-label">Phone</label>

                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-text bg-white"><FontAwesomeIcon icon={faPhone} /></span>
                                                    <input type="text" name="phone" id="phone" className="form-control form-control-sm" defaultValue={user.phone}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="" className="form-label">Address</label>

                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-text bg-white"><FontAwesomeIcon icon={faLocationDot} /></span>
                                                    <input type="text" name="address" id="address" className="form-control form-control-sm" defaultValue={user.address}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <label htmlFor="" className="form-label">Bio</label>
                                                <textarea name="bio" id="bio" className="form-control form-control-sm" rows={4} defaultValue={user.bio}></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-4">Save General Settings</button>
                                    </div>
                                </div>
                                <div className="card border-0 shadow-sm rounded-4">
                                    <div className="card-header bg-white border-0 p-4">
                                        <h6>Social Links</h6>
                                        <p className="text-muted mb-0">Add your website and developer profile links.</p>
                                    </div>
                                    <div className="card-body p-4 pt-0">
                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <label htmlFor="" className="form-label">Website</label>
                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-text bg-white"><FontAwesomeIcon icon={faGlobe} /></span>
                                                    <input type="text" name="website" id="website" className="form-control form-control-sm" defaultValue={user.website}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="" className="form-label">Github</label>
                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-text bg-white"><FontAwesomeIcon icon={faGithub} /></span>
                                                    <input type="text" name="github" id="github" className="form-control form-control-sm" defaultValue={user.github}/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary btn-sm px-4 mt-4"><FontAwesomeIcon icon={faPaperPlane} className="me-2"/> Save Profile</button>
                                </div>
                            </form>
                        )
                    }

                    {
                        activeTab == 'security' && (
                            <div className="card border-0 shadow-sm rounded-4">
                                <div className="card-header bg-white border-0 p-4">
                                    <h6>Security Settings</h6>
                                    <p className="text-muted mb-0">Change your password and manage login sessions.</p>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <input type="password" name="password" id="password" className="form-control form-control-sm" placeholder="Current Password"/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="password" name="newpassword" id="newpassword" className="form-control form-control-sm" placeholder="New Password"/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="password" name="cfnpassword" id="cfnpassword" className="form-control form-control-sm" placeholder="Confirm Password"/>
                                        </div>
                                    </div>

                                    <button type="button" className="btn btn-outline-danger btn-sm mt-4"><FontAwesomeIcon icon={faLock} className="me-2"/> Change Password</button>

                                    <hr />

                                    <div className="col-md-12 mb-3">
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

                                    <h6 className="fw-bold mb-3">Active Sessions</h6>

                                    {
                                        devicesessions.map((devicesession,idx)=>(
                                         <div key={idx} className="d-flex justify-content-between align-items-center border rounded-4 p-3 mb-3">
                                                <div className="d-flex align-items-center">
                                                    <FontAwesomeIcon icon={devicesession.icon} className="text-primary fs-4 me-3" />
                                                    <div>
                                                        <h6 className="fw-bold mb-1">{devicesession.device} . {devicesession.browser}</h6>
                                                        <p className="text-muted mb-0">{devicesession.location} - {devicesession.time}</p>
                                                    </div>
                                                </div>


                                                <button className="btn btn-light btn-sm">Revoke
                                                </button>
                                            </div>
                                        ))
                                    }

                                    
                                       
                                </div>
                            </div>
                        )
                    }

                    {
                        activeTab == 'notifications' && (
                            <div className="card border-0 shadow-sm rounded-4">
                                <div className="card-header bg-white border-0 p-4">
                                    <h6>Notifcations</h6>
                                    <p className="text-muted mb-0">Choose how you want to receive updates.</p>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    {
                                        [
                                            ["email","Email Notifications","Receive account and system emails."],
                                            ["sms","SMS Notifications","Receive important SMS alerts"],
                                            ["loginAlert","Login Alerts","Notify me for new device login."],
                                            ["productUpdate","Product Updates","Receive product and order updates."]
                                        ].map(([name,title,description])=>(
                                            <div key={name} className="d-flex justify-content-between align-items-center border rounded-4 p-3 mb-3">
                                                <div>
                                                    <h6 className="fw-bold mb-1">{title}</h6>
                                                    <p className="text-muted mb-0">{description}.</p>
                                                </div>

                                                <div className="form-check form-switch">
                                                    <input type="checkbox" name={name} className="form-check-input" defaultChecked={notifys[name]} onChange={notifyChangeHandler} />
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
                        activeTab == 'activity' && (

                            <div>
                                <div className="card border-0 shadow-sm rounded-4 mb-3">
                                    <div className="card-header bg-white border-0 p-4">
                                        <h6>Recent Activity</h6>
                                        <p className="text-muted mb-0">Your latest account activities.</p>
                                    </div>
                                    <div className="card-body p-4 pt-0">
                                        {
                                            ["Updated profile information","Changed account pass","Logged in from Chrome browser","Enabled email notifications"].map((item,idx)=>(
                                                <div key={idx} className="d-flex align-items-center border rounded-4 p-3 mb-3">
                                                    <FontAwesomeIcon icon={faCircleCheck} className="text-success me-3 mt-1" />
                                                    <div>
                                                        <h6 className="fw-bold mb-1">{item}</h6>
                                                        <p className="text-muted mb-0">{idx + 1} day ago.</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                
                                <div className="card border-0 shadow-sm rounded-4">
                                    <div className="card-header bg-white border-0 p-4">
                                        <h6>Danger Zone</h6>
                                        <p className="text-muted mb-0">Sensitive account-level actions.</p>
                                    </div>
                                    <div className="card-body p-4 pt-0">
                                        <div className="d-flex justify-content-between align-items-center border rounded-4 p-3">
                                            <div>
                                                <h6 className="fw-bold mb-1">Close Account</h6>
                                                <p className="text-muted mb-0 small">Permanently close this account and remove all data.</p>
                                            </div>
                                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={closeAccHandler}><FontAwesomeIcon icon={faTrash} className="me-2" /> Close Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                 
                </div>
            </div>

            {
                showChat && (
                    <div className="position-fixed bottom-0 end-0 m-4" style={{width:"350px",zIndex:9999}}>
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center p-3">
                                <div className="d-flex align-items-center">
                                    <div className="bg-white bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center me-2" style={{width:"35px", height: "35px"}}>
                                        <FontAwesomeIcon icon={faHeadset} />
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Support Chat</h6>
                                        <small>Usually replies in a few minutes</small>
                                    </div>
                                </div>
                                <button className="btn btn-sm text-white" onClick={()=>setShowChat(false)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                            <div className="card-body bg-light" style={{height:"340px", overflowY:"auto"}}>
                                {
                                    messages.map(message=>(
                                        <div key={message.id} className={`d-flex ${message.sender === "user" ? "justify-content-end" : "justify-content-start"} mb-3`}>
                                            <div className={`${message.sender === "user" ? "bg-primary text-white" : "bg-white text-dark"} rounded-4 shadow p-3`} style={{maxWidth: "75%"}}>{message.text}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="card-footer bg-white border-0 p-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Type a message...." value={chatInput} onChange={(e)=>setChatInput(e.target.value)} 
                                    onKeyDown={(e)=>{
                                        if(e.key === "Enter"){
                                            sendMessageHandler()
                                        }
                                    }}
                                    />
                                    <button className="btn btn-primary" onClick={sendMessageHandler}><FontAwesomeIcon icon={faPaperPlane} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
           
        </div>
    )
};


export default ProfileSettings;