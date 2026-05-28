import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBox, faDollarSign, faEdit, faLayerGroup, faMagnifyingGlass, faTrash, faUser} from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';

const Products = ()=>{

    const [products, setProducts] = useState( [
        {
            id: 1,
            name: 'Laptop',
            category: 'Electronics',
            price: 1200,
            stock: 10,
            status: 'Active'
        },
        {
            id: 2,
            name: 'Phone',
            category: 'Electronics',
            price: 920,
            stock: 10,
            status: 'Active'
        },
        {
            id: 3,
            name: 'Office Chair',
            category: 'Furniture',
            price: 250,
            stock: 5,
            status: 'Inactive'
        },
        {
            id: 4,
            name: 'Speaker',
            category: 'Electronics',
            price: 300,
            stock: 50,
            status: 'Active'
        },
        {
            id: 5,
            name: 'Office Table',
            category: 'Furniture',
            price: 700,
            stock: 30,
            status: 'Inactive'
        }
    ]);

    const [formData,setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: '',
        status: 'Active'
    });

    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');


    // Filter users based on seaerch term
    const filteredProduts = products.filter(user=>(
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
        || user.category.toLowerCase().includes(searchTerm.toLowerCase())
    ));

    // Create/Update Handler
    const saveHandler = (userData)=>{
        if(editingUser){
            // Update user


            setUsers(products.map(user=>
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
                id: products.length > 0 ? Math.max(...products.map(user=>user.id))+1 :1,
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
            setUsers(products.filter(user=>user.id !== id));
            
            // toast 
            toast.warn('User delete successfully!');

        }
    };

    // Status Toggle Handler
    const statustoggleHandler = (id)=>{
     

        setUsers(products.map(user=>
            user.id == id ? {...user,status: user.status === "Active" ? "Inactive" : "Active"} : user
        ));

        toast.info('User status updated!');
    };

    return (
        <div>
            {/* User Manage */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h6 className="mb-1">Product Management</h6>
                    <p>Manage product inventory, stock, price and status.</p>
                </div>
            </div>

            {/* Starts Summary */}
            <div className="row g-3 mb-4">
                <div className="col-md-4 col-sm-6">
                    <div className="card dashboard-card rounded-4 border-0 shadow-sm">
                        <div className="card-body p-3">
                            <div className="d-flex  align-items-center gap-3">
                                
                                <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3">
                                    <FontAwesomeIcon icon={faBox}/>
                                </div>
                                <div>
                                    <h6 className="text-muted mb-1">Total Product</h6>
                                    <h3 className="fw-bold mb-0">{products.length}</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="card dashboard-card rounded-4 border-0 shadow-sm">
                        <div className="card-body p-3">
                            <div className="d-flex  align-items-center gap-3">
                                
                                <div className="bg-success bg-opacity-10 text-success rounded-circle p-3">
                                    <FontAwesomeIcon icon={faLayerGroup}/>
                                </div>
                                <div>
                                    <h6 className="text-muted mb-1">Active Products</h6>
                                    <h3 className="fw-bold mb-0">{products.length}</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                 <div className="col-md-4 col-sm-6">
                    <div className="card dashboard-card rounded-4 border-0 shadow-sm">
                        <div className="card-body p-3">
                            <div className="d-flex  align-items-center gap-3">
                                
                                <div className="bg-warning bg-opacity-10 text-warning rounded-circle p-3">
                                    <FontAwesomeIcon icon={faDollarSign}/>
                                </div>
                                <div>
                                    <h6 className="text-warning mb-1">Stock Value</h6>
                                    <h3 className="fw-bold mb-0">{products.length}</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

           
            </div>

            {/* Create or Update Card */}
            <div className="card border-0 shadow-sm rounded-4 mb-3">
                <div className="card-header bg-white border-0 p-4">
                    <h6 className="fw-bold mb-1">
                        { editingId ? "Edit Product" : "Create Product"}
                    </h6>
                    <p className="text-muted mb-0">Fill product information below.</p>
                </div>
                <div className="card-body p-4 pt-0">
                    <form action="">
                        <div className="row g-3">
                            <div className="col-lg-3 col-md-6">
                                <label htmlFor="form-label">Product Name</label>
                                <input type="text" name="name" className="form-control" value={formData.name} onChange={saveHandler} placeholder="Laptop"/>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <label htmlFor="form-label">Category</label>
                                <input type="text" name="category" className="form-control" value={formData.category} onChange={saveHandler} placeholder="Electronicss" />
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <label htmlFor="form-label">Price</label>
                                <input type="text" name="price" className="form-control" value={formData.price} onChange={saveHandler} placeholder="0" />
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <label htmlFor="form-label">Stock</label>
                                <input type="text" name="stock" className="form-control" value={formData.stock} onChange={saveHandler} placeholder="0" />
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <label htmlFor="form-label">Status</label>
                                <select name="status" className="form-control" value={formData.status} onChange={saveHandler}>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>   
                            </div>
                        </div>

                        <div className="mt-3">
                            <button type="submit" className="btn btn-primary px-4 me-2">
                                {editingId ? "Update Product": "Create Product"}
                            </button>

                            {
                                editingId && (
                                    <button type="button" className="btn btn-light px-4"> Cancel</button>
                                )
                            }
                           
                        </div>
                           
                    </form>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="card mb-3 dashboard-card">
                <div className="card-header bg-white border-0 p-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <div>
                            <h6 className="fw-bold mb-1">Produt List</h6>
                            <p className="text-muted mb-0">Search, edit and manage your products.</p>
                        </div>
                        <div className="input-group" style={{maxWidth: "300px"}}>
                            <span className="input-group-text bg-light border-0"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <input type="text" className="form-control bg-light border-0" placeholder="Search product by name or category...."  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                        </div>
                    </div>
                    
                       
                </div>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-sm table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>No</th>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Status</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredProduts.length > 0 ? (
                                        filteredProduts.map((filteredProdut,idx)=>(
                                            <tr key={filteredProdut.id}>
                                                <td>{idx+1}</td>
                                                <td>
                                                    <div className="fw-semibold">{filteredProdut.name}</div>
                                                    <small>ID: {filteredProdut.id}</small>
                                                </td>
                                                <td>{filteredProdut.category}</td>
                                                <td className="fw-semibold">{filteredProdut.price}</td>
                                                <td ><span className="badge bg-light text-dark border">{filteredProdut.stock} pcs</span></td>
                                                <td ><span className={`badge rounded-pill ${filteredProdut.status == 'Active' ? 'bg-success': 'bg-danger'}`}>{filteredProdut.status}</span></td>
                                                <td className="text-end">
                                                    <button type="button" className="btn btn-sm btn-outline-warning me-2"><FontAwesomeIcon icon={faEdit}/></button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                                </td>
                                            </tr>
                                        ))
                                ) : (
                                    <tr colSpan="7" className="text-center text-muted py-5">No products found.</tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

         
        </div>
    )
}

export default Products;