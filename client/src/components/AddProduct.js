import React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router';

const AddProduct = () => {

    const [image,setImage] =useState(null)
    const [name,setName] =useState("")
    const [price,setPrice] =useState("")
    const [description,setDesc] =useState("")
    const [category,setCategory] =useState("")

    const history =useHistory()


    const AddProductinfo=async()=>{
        let formField = new FormData()

        formField.append('name',name)
        formField.append('price',price)
        formField.append('description',description)
        formField.append('category',category)
        if(image!==null){
            formField.append('image',image)
        }
        
        await axios({
            method:'post',
            url :'http://localhost:8000/api/',
            data: formField
        }).then((response)=>{
            console.log(response.data)
            history.push('/')
        })
        // .catch(error => {
        //     console.log(error.response)
        // });

    }


    return (
        <div className="container">
            <h1 className="d-flex justify-content-center mt-5 text-capitalize">Add products</h1>
            <div>
           
            <div className="form-groups mb-5 rounded shadow-lg">
                <div className="form-group">
                    <label className="fw-bold fs-5 lh-lg mt-3 labels">Product</label>
                    <input type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label className="fw-bold fs-5 lh-lg mt-3">Description</label>
                    <textarea type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter desc"
                    name="description"
                    value={description}
                    onChange={(e)=>setDesc(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label className="fw-bold fs-5 lh-lg mt-3">Price</label>
                    <input type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter price"
                    name="price"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label className="fw-bold fs-5 lh-lg mt-3">Category</label>
                    <input type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter category"
                    name="category"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label className="fw-bold fs-5 lh-lg mt-3">Product image</label>
                    <input type="file"
                    className="form-control form-control-lg"
                    name="image"
                    
                    onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>
                <div className="form-group">
                <button className="btn btn-success mt-5 mb-4" onClick={AddProductinfo}>add product</button>
                </div>
            </div>
            </div>
            
        </div>
        
    );
};

export default AddProduct;