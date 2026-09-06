import React, { useState } from "react";
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

const Calendar = ()=>{
    
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h6>Calendar Management</h6>
                    <p className="text-muted mb-0">Plan meetings, tasks, reminders and personal events.</p>
                </div>

                <button className="btn btn-primary btn-sm"><FaPlus className="me-2" />Save Changes</button>
            </div>

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


            <div className="row g-4">
                <div className="col-md-9">
               
                </div>
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
            
        </div>
    )
};


export default Calendar;