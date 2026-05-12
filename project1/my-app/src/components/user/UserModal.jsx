import React,{useState,useEffet} from "react";

const UserModal = ({show,onHide,user,onSave})=>{
    const [formData,setFormData] = useState({
        name: '',
        email: '',
        role: 'User',
        status: 'Active',
        phone: '',
        address: '',
        password: ''
    });

    const [errors,setErrors] = useState({});

    const validateForm = ()=>{
        const newErrors = {};

        if(!formData.name.trim()){
            newErrors.name = 'Name is required';
        }

        if(!formData.email.trim()){
            newErrors.email = 'Email is required';
        }else if(!/\S+@\S\.\S/.test(formData.email)){
            // \S+ mean one or more non-space characters
            newErrors.email = 'Email is invalid';
        }

        if(!formData.role.trim()){
            newErrors.role = 'Role is required';
        }

        if(!formData.status.trim()){
            newErrors.status = 'Status is required';
        }

        setErrors(newErrors);

        console.log(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const submitHandler = ()=>{
        if(validateForm()){
            onSave(formData);
        }
    }

    const changeHandler = (e)=>{
        const {name,value} = e.target;

        setFormData(prev=>({
            ...prev,
            [name]: value,
        }));
    }


    if(!show) return null;

    return (
        <div className="modal d-block" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
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
                                    <input type="text" name="name" id="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} value={formData.name} onChange={changeHandler} placeholder="Enter full name"  />
                                    {
                                        errors.name && (
                                            <div className="invalid-feedback">{errors.name}</div>
                                        )
                                    }
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email Address <span className="text-danger">*</span></label>
                                    <input type="email" name="email" id="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={formData.email} onChange={changeHandler}  placeholder="Enter email address"  />
                                    {
                                        errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="role" className="form-label">Role <span className="text-danger">*</span></label>
                                    <select name="role" id="role" className={`form-select ${errors.role ? 'is-invalid' : ''}`} value={formData.role} onChange={changeHandler}>
                                        <option value="User">User</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Modereator">Modereator</option>
                                        <option value="Editor">Editor</option>
                                        <option value="Viewer">Viewer</option>
                                    </select>
                                    {
                                        errors.role && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="status" className="form-label">Status <span className="text-danger">*</span></label>
                                    <select name="status" id="status" className={`form-select ${errors.status ? 'is-invalid' : ''}`} value={formData.status} onChange={changeHandler}>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Suspended">Suspended</option>
                                    </select>
                                    {
                                        errors.status && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                                    <input type="text" name="phone" id="phone" className="form-control" value={formData.phone} onChange={changeHandler} placeholder="Enter phone number"  />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="address" className="form-label">Address <span className="text-danger">*</span></label>
                                    <input type="text" name="address" id="address" className="form-control" value={formData.address} onChange={changeHandler} placeholder="Enter address"  />
                                </div>

                                {
                                    !user && (
                                        <div className="col-12 mb-3">
                                            <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type="password" name="password" id="password" className="form-control" value={formData.password} onChange={changeHandler} placeholder="Enter password"  />
                                            <small className="form-text">Mininum 8 characters with letters and numbers</small>
                                        </div>
                                    )
                                }

                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onHide}>Cancel</button>
                        <button type="button" className="btn btn-primary">{user ? 'Update User' : 'Create User' }</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserModal;