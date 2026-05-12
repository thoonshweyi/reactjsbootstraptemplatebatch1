import React from "react";

const UserTable = ({users,onEdit,onDelete,onToggleStatus})=>{
    console.log(users);
    const getStatusBadge = (status)=>{
        switch(status){
            case 'Active':
                return <span className="badge bg-success">Active</span>;
            case 'Inactive':
                return <span className="badge bg-danger">Inactive</span>;
            case 'Pending':
                return <span className="badge bg-warning">Pending</span>;
            default: 
                return <span className="badge bg-secondary">{status}</span>;
        }
    };

    const getRoleBadge = (role)=>{
        switch(role){
            case 'Admin':
                return <span className="badge bg-primary">Admin</span>;
            case 'Moderator':
                return <span className="badge bg-info">Moderator</span>;
            default: 
                return <span className="badge bg-secondary">{role}</span>;
        }
    };

    return (
        <div className="table table-responsive">
            <table className="table table-sm table-hover align-middle">
                <thead>
                    <tr>
                        <th>USER</th>
                        <th>ROLE</th>
                        <th>STATUS</th>
                        <th>JOIN DATE</th>
                        <th className="text-end">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>

                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="text-ceter py-4">
                                <div className="text-muted">No users found</div>
                            </td>
                        </tr>
                    ):(
                        users.map(user=>(
                           <tr key={user.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3 avatar">{user.avatar || user.name.charAt(0)}</div>
                                        <div>
                                            <div className="fw-semibold">{user.name}</div>
                                            <small className="text-muted">{user.email}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>{ getRoleBadge(user.role)}</td>
                                <td>{ getStatusBadge(user.status) }</td>
                                <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                                <td className="text-end">
                                    <div className="d-flex justify-content-end gap-2">
                                        <button className="btn btn-outline-primary btn-sm d-flex align-items-center" onClick={()=>onEdit(user)}>Edit</button>
                                        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center" onClick={()=>onToggleStatus(user.id)}>{user.status === "Active" ? "Deactivate" : "Activate"}</button>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-outline-light btn-sm text-dark dropdown-toggle" data-bs-toggle="dropdown"></button>
                                            <ul className="dropdown-menu dropdown-menu-endd">
                                                <li><button className="dropdown-item" onClick={()=>onEdit(user)}>View Details</button></li>
                                                <li><button className="dropdown-item" >Send Message</button></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><button className="dropdown-item text-danger" onClick={()=>onDelete(user.id)}>Delete</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                           </tr> 
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default UserTable;