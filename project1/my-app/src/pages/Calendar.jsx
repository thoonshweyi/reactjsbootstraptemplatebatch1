import React, { useEffect,useState } from "react";
import {FaBell, FaCalendar, FaCalendarAlt, FaCalendarCheck, FaCalendarDay, FaCheck, FaCheckCircle, FaClock, FaEdit, FaListUl,FaMapMarkerAlt,FaPlus, FaRegCheckCircle, FaSearch, FaTrashAlt, FaUsers} from "react-icons/fa"

const eventtypes = {
    Meeting:{
        color: "primary",
        icon: FaUsers,
    },
    Task:{
        color: "success",
        icon: FaCheckCircle,
    },
    Reminder:{
        color: "warning",
        icon: FaBell,
    },
    Personal:{
        color: "danger",
        icon: FaCalendar,
    },
}

const emptyForm = {
    title: "",
    date: "",
    type: "Meeting",
    startTime: "09:00",
    endTime: "10:00",
    location: "",
    description: ""
};

// Start Date Helper Function
    const dateFormat = (date)=>{
        if(!date) return "";

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2,"0");
        const day = String(date.getDate()).padStart(2,"0");

        return `${year}-${month}-${day}`;
    }

    const addDays = (date, amount)=>{
        const result = new Date(date);
        result.setDate(result.getDate() + amount);

        return result;
    }
// End Date Helper Function


// Sample Events
const initialEvents = ()=>{
    const today = new Date();
    return [
        {
            id: 1,
            title: "Weekly team meeting",
            date: dateFormat(today),
            type: "Meeting",
            startTime: "09:30",
            endTime: "10:30",
            location: "Meeting Room A",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 2,
            title: "Submit sales report",
            date: dateFormat(addDays(today,1)),
            type: "Task",
            startTime: "14:00",
            endTime: "15:00",
            location: "Admin Office",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 3,
            title: "Client Video call",
            date: dateFormat(addDays(today,3)),
            type: "Meeting",
            startTime: "11:00",
            endTime: "12:00",
            location: "Google Metet",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 4,
            title: "Renew hosting plan",
            date: dateFormat(addDays(today,5)),
            type: "Reminder",
            startTime: "08:30",
            endTime: "09:30",
            location: "Online",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 5,
            title: "Clean Desk",
            date: dateFormat(addDays(today,6)),
            type: "Task",
            startTime: "15:30",
            endTime: "16:30",
            location: "IT Room",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]
}

const Calendar = ()=>{

    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [formError, setFormError] = useState("");

    const getToday = dateFormat(new Date());

    const [formData,setFormData] = useState({
        ...emptyForm,
        date: getToday
    });

    // Start modal keyboard control
    useEffect(()=>{
        const escapseHandler = (event)=>{
            if(event.key == "Escape"){
                setEditingId(null);
                setFormError("");
                setShowModal(false);
            }
        }
        document.addEventListener("keydown",escapseHandler);
    },[])
    // End modal keyboard control

    const opencreateModal = ()=>{
        setEditingId(null);

        setFormData(emptyForm);
        
        setFormError("");
    
        setShowModal(true);
    };

    const openeditModal = (event)=>{

    };

    const submitHandler = ()=>{

    };

    const onHide = ()=>{
        setEditingId(null);
        setFormError("");
        setShowModal(false);
    };

    const changeHandler = ()=>{

    }
    
    return (
        <div>

            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h6>Calendar Management</h6>
                    <p className="text-muted mb-0">Plan meetings, tasks, reminders and personal events.</p>
                </div>

                <button className="btn btn-primary btn-sm" onClick={()=>opencreateModal()}><FaPlus className="me-2" />Add Event</button>
            </div>

            {/* Statistic Cards */}
            <div className="row g-4 mb-3">
                <div className="col-md-3 col-sm-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body d-flex align-items-center gap-3">
                            <span className="d-flex bg-primary bg-opacity-10 text-primary rounded-3 p-3 "><FaCalendarAlt/></span>
                            <div>
                                <small className="text-muted mb-1">This Month</small>
                                <h4 className="fw-bold mb-0">1</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body d-flex align-items-center gap-3">
                            <span className="d-flex bg-success bg-opacity-10 text-success rounded-3 p-3 "><FaCalendarCheck/></span>
                            <div>
                                <small className="text-muted mb-1">This Month</small>
                                <h4 className="fw-bold mb-0">2</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body d-flex align-items-center gap-3">
                            <span className="d-flex bg-warning bg-opacity-10 text-warning rounded-3 p-3 "><FaBell/></span>
                            <div>
                                <small className="text-muted mb-1">This Month</small>
                                <h4 className="fw-bold mb-0">3</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body d-flex align-items-center gap-3">
                            <span className="d-flex bg-info bg-opacity-10 text-info rounded-3 p-3 "><FaListUl/></span>
                            <div>
                                <small className="text-muted mb-1">This Month</small>
                                <h4 className="fw-bold mb-0">4</h4>
                            </div>
                        </div>
                    </div>
                </div>
         
            </div>

            {/* Search And Filter */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-7">
                            <div className="input-group">
                                <span className="input-group-text bg-white"><FaSearch className="text-muted" /></span>
                                <input type="search" className="form-control" placeholder="Search title, location or description..."/>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <select className="form-select">
                                <option value="All">All Event Types</option>
                                {
                                    Object.keys(eventtypes).map(type=>(
                                        <option key={type} value={type}>{type}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="col-md-5">

                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="row g-4">

                {/* Calendar */}
                <div className="col-md-9">
               
                </div>

                {/* Right Sidebar */}
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-header bg-white">
                            <h6 className="fw-bold mb-1">Selected Day</h6>
                            <small className="text-muted">Friday</small>
                        </div>

                        <div className="card-body">
                            <div className="text-center">
                                <FaCalendarDay size={30} className="text-secondary opacity-50 mb-3" />
                                <p className="text-muted small mb-2">No events for this day.</p>
                                <button type="button" className="btn btn-outline-primary btn-sm"><FaPlus className="me-1"/> Add Event</button>
                            </div>

                            <div className="border-bottom pb-3 mb-3">
                                <div className="d-flex gap-3">
                                    <span className="d-flex bg-success bg-opacity-10 text-success rounded-3 p-3 "><FaRegCheckCircle/></span>
                                    <div>
                                        <h4 className="fw-bold small mb-1">Submit sales report</h4>
                                        <p className="text-muted smal mb-1">
                                            <FaClock className="me-1"/>
                                            2:00 PM - 3:00 PM
                                        </p>

                                        <p className="text-muted smal mb-1">
                                            <FaMapMarkerAlt className="me-1"/>
                                            Admin Office
                                        </p>

                                        <div className="d-flex gap-2">
                                            {/* Accessible Rich Internet Application */}
                                            <button type="button" className="btn btn-light btn-sm text-primary" aria-label="Edit Have to go" title="Edit event">
                                                <FaEdit />
                                            </button>

                                            <button type="button" className="btn btn-light btn-sm text-danger" title="Delete event">
                                                <FaTrashAlt />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-header bg-white">
                            <h6 className="fw-bold mb-1">Upcoming Events</h6>
                        </div>

                        <div className="card-body">
                            <button type="button" className="btn border-0 rounded-0 w-100 px-0 py-3 text-start">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="text-center">
                                        <strong className="d-block text-primary">24</strong>
                                        <strong className="text-uppercase text-muted">Jan</strong>
                                    </div>
                                    <div>
                                        <p className="small fw-semibold mb-1">Have to shop.</p>
                                        <small className="text-muted">10:45 AM</small>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Create / Edit Modal */}
            {
                showModal && (
                    <div className="modal d-block bg-dark bg-opacity-50" onMouseDown={(event)=>{
                        if(event.target === event.currentTarget){
                            onHide();
                        }
                    }}>
                        <div className="modal-dialog modal-lg modal-dialog-center modal-dialog-scrollable">
                            <form className="modal-content" onSubmit={submitHandler}>
                                <div className="modal-header">
                                    <h6 className="modal-title">{editingId !== null ? "Edit Event": "Create New Event"}</h6>
                                    <button type="button" className="btn-close" onClick={onHide}></button>
                                </div>
                                <div className="modal-body">
                                    {/* show error */}
                                    {
                                        formError && (
                                            <div className="alert alert-danger py-2">{formError}</div>
                                        )
                                    }

                                        <div className="row g-3">

                                            <div className="col-md-12">
                                                <label htmlFor="title" className="form-label fw-semibold">Event Title <span className="text-danger">*</span></label>
                                                <input type="text" name="title" id="title" className="form-control" value={formData.title} onChange={changeHandler} placeholder="Enter event title" autoFocus />
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="title" className="form-label fw-semibold">Date <span className="text-danger">*</span></label>
                                                <input type="date" name="date" id="date" className="form-control" value={formData.date} onChange={changeHandler}/>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="type" className="form-label fw-semibold">Event Type</label>
                                                <select name="type" id="type"  className="form-select" value={formData.type} onChange={changeHandler}>
                                                    {
                                                        Object.keys(eventtypes).map(type=>(
                                                            <option key={type} value={type}>{type}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="startTime" className="form-label fw-semibold">Start Time <span className="text-danger">*</span></label>
                                                <input type="time" name="startTime" id="startTime" className="form-control" value={formData.startTime} onChange={changeHandler}/>
                                            </div>
                                                
                                            <div className="col-md-6">
                                                <label htmlFor="endTime" className="form-label fw-semibold">End Time <span className="text-danger">*</span></label>
                                                <input type="time" name="endTime" id="endTime" className="form-control" value={formData.endTime} onChange={changeHandler}/>
                                            </div>
                                                
                                            <div className="col-md-12">
                                                <label htmlFor="location" className="form-label fw-semibold">Location / Meeting Link</label>
                                                <input type="text" name="location" id="location" className="form-control" value={formData.location} onChange={changeHandler} placeholder="Meeting Room A or Google Meet"  />
                                            </div>
                                            
                                            <div className="col-md-12">
                                                <label htmlFor="description" className="form-label fw-semibold">Description</label>
                                                <textarea name="description" id="description" className="form-control" rows="3" value={formData.description} onChange={changeHandler} placeholder="Write a short note...." ></textarea>
                                            </div>

                                            

                                        </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" onClick={onHide}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">{editingId !== null ? 'Update Event' : 'Save Event'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
            {/* End Create / Edit Modal */}
        </div>
    )
};


export default Calendar;