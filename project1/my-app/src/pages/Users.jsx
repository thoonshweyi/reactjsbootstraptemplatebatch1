import React, { useEffect, useState } from "react";
import UserTable from "../components/user/UserTable";
import UserModal from "../components/user/UserModal";

import { ToastContainer, toast } from 'react-toastify';

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
            role: 'User',
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
    const filteredUsers = users.filter(user=>(
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
        || user.email.toLowerCase().includes(searchTerm.toLowerCase())
        || user.role.toLowerCase().includes(searchTerm.toLowerCase())
    ));

    // Create/Update Handler
    const saveuserHandler = (userData)=>{
        if(editingUser){
            // Update user


            setUsers(users.map(user=>
                user.id === editingUser.id ? {
                    ...userData,
                    id:editingUser.id,
                    joinDate: new Date(user.joinDate).toISOString().split('T')[0],
                    avatar: userData.name.split(' ').map(n=>n[0]).join('').toUpperCase()
                }  : user
            ))

            toast.success("User updated successfully");

        }else{
            // Create new user
            const newuser = {
                ...userData,
                id: users.length > 0 ? Math.max(...users.map(user=>user.id))+1 :1,
                joinDate: new Date().toISOString().split('T')[0],
                avatar: userData.name.split(' ').map(n=>n[0]).join('').toUpperCase()
            }

            setUsers([...users,newuser])

            toast.success("User created successfully");
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
            setUsers(users.filter(user=>user.id !== id));
            
            // toast 
            toast.success('User delete successfully!');

        }
    };

    // Status Toggle Handler
    const statustoggleHandler = (id)=>{
     

        setUsers(users.map(user=>
            user.id == id ? {...user,status: user.status === "Active" ? "Inactive" : "Active"} : user
        ));

        toast.success('User status updated!');
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
                                    <h3 className="mb-0">{users.length}</h3>
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
                                    <h3 className="mb-0">{users.filter(user=>user.status === "Active").length}</h3>
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
                                    <h3 className="mb-0">{users.filter(user=>user.role === "Admin").length}</h3>
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
                                    <h3 className="mb-0">{users.filter(user=>user.status === "Inactive").length}</h3>
                                </div>
                                <span className="badge bg-danger p-2">Inactive</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="card mb-3 dashboard-card">
                <div className="card-body">
                    <div className="row g-3 align-items-center">
                        <div className="col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-light border-0">icon</span>
                                <input type="text" className="form-control bg-light border-0" placeholder="Search users by name, email, or role...."  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="d-flex gap-2 justify-content-md-end">
                                <button className="btn btn-outline-secondary">Filter</button>
                                <button className="btn btn-outline-secondary">Export</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="card dashboard-card">
                <div className="card-body">
                    <UserTable users={filteredUsers} onEdit={editMode} onDelete={deleteHandler} onToggleStatus={statustoggleHandler} />
                </div>
            </div>

            {/* User Modal */}
            <UserModal user={editingUser} show={showModal} onHide={()=>{
                setShowModal(false);
                setEditingUser(null);
            }} onSave={saveuserHandler} />
        </div>
    )
}

export default Users;