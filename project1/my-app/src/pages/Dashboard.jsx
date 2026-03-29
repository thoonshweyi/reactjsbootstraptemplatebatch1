import React from "react";

const Dashboard = ()=>{
    return (
        <div className="dashboard">
            <h6 className="mb-4">Dashboard Overview</h6>

            {/* Stats Cards */}
            <div className="row g-4 mb-3">

            </div>

            {/* Chars and Activitys */}
            <div className="row g-4 mb-3">
                <div className="col-md-8">
                    <div className="card dashboard-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6>Revenue Analytics</h6>
                                <div>
                                    <button className="btn btn-outline-primary btn-sm me-2">Monthly</button>
                                    <button className="btn btn-outline-secondary btn-sm me-2">Yearly</button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card dashboard-card">
                        <div className="card-body">
                            <h6>Recent Activity</h6>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Metrics */}
            <div className="row g-4 mb-3">

            </div>
        </div>
    )
}

export default Dashboard;