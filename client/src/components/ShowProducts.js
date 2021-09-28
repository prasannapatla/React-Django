import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Button, Card } from 'react-bootstrap';

const ShowProducts = () => {
    const [searchTerm,setSearchTerm] = useState('')
    const changeHandler=(event)=>{
        setSearchTerm(event.target.value)
    }

    const[loaded,setloaded]=useState(true)
    // useEffect(()=>{
    //     setloaded(true);
        
    // })

    const [dataVisible,setDataVisible] =useState(false)
    const onClick = () => setDataVisible(true)
    
    const[products,setProducts] =useState([])
    
    const getProducts=async ()=>{
        const response =await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
        <div className="main">
            <h1 className="d-flex justify-content-center mt-5 mb-4">All products </h1>
            <div className="container filter-class">
            <input type="text" onChange={changeHandler} onClick={onClick} placeholder="Search product name" className="search-box" />
            
                {products.filter((item)=>{
                    if(searchTerm===''){
                    return null
                    }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        
                        return <p>{item}</p>
                    }
                }).map((item,key)=><div className="name"><p className="search-result text-capitalize">{dataVisible?item.name:null}</p></div>)}
            </div>
            <div className="product-info mb-5">
            
            {
                products.filter((product)=>{
                    if(searchTerm===''){
                        return (<div className="m-2 rounded shadow-lg">
                        <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                            <Card.Text>{product.category}</Card.Text>
                            <Button variant="primary" href={`/${product.id}/`}>Show Details</Button>
                        </Card.Body>
                        </Card>
                        
                        </div> )
                    }else if(product.name.toLowerCase()===searchTerm.toLowerCase()){
                        return (<div className="m-2 rounded shadow-lg">
                        <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                            <Card.Text>{product.category}</Card.Text>
                            <Button variant="primary" href={`/${product.id}/`}>Show Details</Button>
                        </Card.Body>
                        </Card>
                        
                        </div> )
                    }
                }).map((product,index)=>(
                    <div className="m-2 rounded shadow-lg">
                                    <Card style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.price}</Card.Text>
                                        <Card.Text>{product.category}</Card.Text>
                                        <Button variant="primary" href={`/${product.id}/`}>Show Details</Button>
                                    </Card.Body>
                                    </Card>
                                    
                    </div> 
                  
                )
                )
}
            {/* } */}
            
            </div>
        </div>
    );
};

export default ShowProducts;