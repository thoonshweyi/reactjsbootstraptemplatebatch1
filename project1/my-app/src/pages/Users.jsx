import React, { useEffect, useState } from "react";

const Users = ()=>{

    const [users, setUsers] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const initialUsers = [
        {
            id:1,
            name: 'Kyaw Kyaw',
            email: 'kyawkyaw@gmail.com',
            role: 'Admin',
            status: 'Active',
            joinDate: '2024-01-15',
            phone: '+95 9 9999 9999',
            address: 'No.12, Hnin Si street, Mandalay City, Myanmar',
            avatar: 'KK'
        },
        {
            id:2,
            name: 'Yin Yin',
            email: 'yinyin@gmail.com',
            role: 'User',
            status: 'Active',
            joinDate: '2024-02-20',
            phone: '+95 8 8888 8888',
            address: 'No.10, Chan Thar street, Yangon City, Myanmar',
            avatar: 'YY'
        },
        {
            id:3,
            name: 'Bo Bo',
            email: 'bobo@gmail.com',
            role: 'Moderator',
            status: 'Inactive',
            joinDate: '2024-03-10',
            phone: '+95 9 9999 9999',
            address: 'No.5, Bo Min Yaung street, Bago City, Myanmar',
            avatar: 'BB'
        },
        {
            id:4,
            name: 'Hnin Hnin',
            email: 'hninhnin@gmail.com',
            role: 'Admin',
            status: 'Active',
            joinDate: '2024-01-15',
            phone: '+95 4 4444 4444',
            address: 'No.12, Hnin Si street, Mandalay City, Myanmar',
            avatar: 'HH'
        },
        {
            id:5,
            name: 'Win Win',
            email: 'winwin@gmail.com',
            role: 'User',
            status: 'Active',
            joinDate: '2024-01-15',
            phone: '+95 5 5555 5555',
            address: 'No.12, Hnin Si street, Mandalay City, Myanmar',
            avatar: 'WW'
        }
    ];

    useEffect(()=>{
        setUsers(initialUsers);
    },[]);

    // Filter users based on seaerch term
    const filteredUsers = users.filter(user=>{
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
        || user.email.toLowerCase().includes(searchTerm.toLowerCase())
        || user.role.toLowerCase().includes(searchTerm.toLowerCase())
    });

    // Create/Update Handler
    const saveuserHandler = (userData)=>{
        if(editingUser){
            // Update user
        }else{
            // Create new user
        }

        setShowModal(false);
        setEditingUser(null);
    }

    // Edit action
    const editMode = (user)=>{
        setEditingUser(user);
        setShowModal(true);
    }

    // Delete Handler
    const deleteHandler = (id)=>{
        if(window.confirm('Are you sure you want to delete this user?')){

        }
    };

    // Status Toggle Handler
    const statustoggleHandler = (id)=>{

    }

    return (
        <div>
            {/* User Manage */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h6 className="mb-1">User Management</h6>
                    <p>Maage your users and their permissions</p>
                </div>
                <button className="btn btn-primary d-flex align-items-center" onClick={()=>{
                    setEditingUser(null);
                    setShowModal(true);
                }}><span className="me-2">+</span>Add New User</button>
            </div>

            {/* Status Summary */}
            <div className="row g-3 mb-4">
                <div className="col-md-3 col-sm-6">
                    <div className="card dashboard-card">
                        <div className="card-body p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Total Users</h6>
                                    <h3 className="mb-0">3</h3>
                                </div>

                                <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3">
                                    <i>icon</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card dashboard-card">
                        <div className="card-body p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Active Users</h6>
                                    <h3 className="mb-0">1</h3>
                                </div>
                                <span className="badge bg-success p-2">Active</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card dashboard-card">
                        <div className="card-body p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Admins</h6>
                                    <h3 className="mb-0">1</h3>
                                </div>
                                <span className="badge bg-warning p-2">Admin</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card dashboard-card">
                        <div className="card-body p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted mb-1">Inactive</h6>
                                    <h3 className="mb-0">2</h3>
                                </div>
                                <span className="badge bg-danger p-2">Inactive</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}

            {/* sers Table */}

            {/* User Modal */}
        </div>
    )
}

export default Users;