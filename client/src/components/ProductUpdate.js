import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory,useParams } from 'react-router';
import axios from 'axios'
const ProductUpdate = () => {

    const [image,setImage] =useState(null)
    const [name,setName] =useState("")
    const [price,setPrice] =useState("")
    const [description,setDesc] =useState("")
    const [category,setCategory] =useState("")

    const history =useHistory()
    const {id} = useParams()

    const loadProducts= async()=>{
        const {data} =await axios.get(`http://localhost:8000/api/${id}/`);
        console.log(data)
        setImage(data.image)
        setName(data.name)
        setPrice(data.price)
        setDesc(data.description)
        setCategory(data.category)
    }
    useEffect(() => {
        
        loadProducts()
    }, [])

    
    const UpdateProductinfo=async()=>{
        let formField = new FormData()

        formField.append('name',name)
        formField.append('price',price)
        formField.append('description',description)
        formField.append('category',category)
        if(image!==null){
            formField.append('image',image)
        }
        
        await axios({
            method:'PUT',
            url :`http://localhost:8000/api/${id}/`,
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
            <h1 className="d-flex justify-content-center mt-5 text-capitalize">Update products</h1>
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
                <img src={image} height="100px" width="100px"/>
                    <input type="file"
                    className="form-control form-control-lg"
                    name="image"
                    
                    onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>
                
                <div className="form-group">
                <button className="btn btn-success mt-5 mb-4" onClick={UpdateProductinfo}>Update Product</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ProductUpdate;