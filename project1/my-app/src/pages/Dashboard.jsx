import React from "react";

const Dashboard = ()=>{
    const statsData = [
        {
            title: "Total Users",
            value: "2,350",
            change: '+12.5%',
            isPositive: true,
            icon: '',
            color: 'primary'
        },
        {
            title: "Revenue",
            value: "$24,580",
            change: '+8.2%',
            isPositive: true,
            icon: '',
            color: 'success'
        },
        {
            title: "Orders",
            value: "1,254",
            change: '-3.4%',
            isPositive: false,
            icon: '',
            color: 'warning'
        },
        {
            title: "Conversion Rate",
            value: "4.7%",
            change: '+2.1%',
            isPositive: true,
            icon: '',
            color: 'info'
        },
    ];

    return (
        <div className="dashboard">
            <h6 className="mb-4">Dashboard Overview</h6>

            {/* Stats Cards */}
            <div className="row g-4 mb-3">
                <div className="col-md-3 col-sm-6">

                </div>
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
                <div className="col-md-4">
                    <div className="card dashboard-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Avg. Session</h6>
                                    <h5 className="mb-0">4m 32s</h5>
                                </div>
                                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3">
                                    <i>icon</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card dashboard-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Bounce Rate</h6>
                                    <h5 className="mb-0">42.5%</h5>
                                </div>
                                <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-3">
                                    <i>icon</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card dashboard-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Growth</h6>
                                    <h5 className="mb-0">4m 32s</h5>
                                </div>
                                <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3">
                                    <i>icon</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;