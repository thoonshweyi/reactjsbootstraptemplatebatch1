import React from "react";

const UserModal = ({})=>{

    return (
        <div className="modal">
            <div className="modal-dialog modal-lg modal-dialog-center">
                <div className="modal-content modal-custom">
                    <div className="modal-header">
                        <h6 className="modal-title">{user ? "Edit User": "Create New User"}</h6>
                        <button type="button" className="btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row g-3">

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name" className="form-label">Full Name <span className="text-danger">*</span></label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter full name"  />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email Address <span className="text-danger">*</span></label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter email address"  />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="role" className="form-label">Role <span className="text-danger">*</span></label>
                                    <select name="role" id="role" className="form-select">
                                        <option value="User">User</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Modereator">Modereator</option>
                                        <option value="Editor">Editor</option>
                                        <option value="Viewer">Viewer</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="status" className="form-label">Status <span className="text-danger">*</span></label>
                                    <select name="status" id="status" className="form-select">
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Suspended">Suspended</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Enter phone number"  />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="address" className="form-label">Address <span className="text-danger">*</span></label>
                                    <input type="text" name="address" id="address" className="form-control" placeholder="Enter address"  />
                                </div>

                                <div className="col-12 mb-3">
                                    <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Enter password"  />
                                    <small className="form-text">Mininum 8 characters with letters and numbers</small>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">Cancel</button>
                        <button type="button" className="btn btn-primary">{user ? 'Update User' : 'Create User' }</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserModal;