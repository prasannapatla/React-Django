import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory,useParams } from 'react-router';

const ProductDetails = () => {

    const [product, setProduct] = useState("")
    const { id } =useParams();
    const history =useHistory()

    const getSingleProduct=async()=>{
        const { data } =await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        getSingleProduct();
    }, [])

    const deleteProduct=async()=>{
        await axios.delete(`http://localhost:8000/api/${id}/`)
        history.push('/')
        
    }


    return (
        <div className="container">
            <h1 className="d-flex justify-content-center text-capitalize mt-4">product details</h1>
            <div className="single-product-info mb-5 mt-5">
                
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.category}</Card.Text>
                            <Button className="m-2" variant="primary" href={`/${product.id}/update`}>Update</Button>
                            <Button className="m-2" variant="danger" onClick={()=>deleteProduct(product.id)}>Delete</Button>      
                        </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ProductDetails;