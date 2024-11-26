
import{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';
const Product = () => {
    const dispatch = useDispatch();
    // const [products, getProducts] = useState([]);
    const {data: products,status}= useSelector((state) => state.products);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        // .then(data=>data.json()) 
        // .then(result=>getProducts(result))

        // dispatch an action for fetchProducts
        dispatch(getProducts());

    }, []);
    if(status === StatusCode.LOADING){
        return <p className='text-center'>Loading...</p>
    }
    if(status === StatusCode.ERROR){
        return <Alert key="danger" variant ="danger" className='text-center'>Something Went Wrong!!! Please try again later</Alert>
    }

    const addToCart = (product) =>{
        // dispatch an add action
        dispatch(add(product));
    }

    const cards = products.map(product=>(
        <div className='col-md-3 text-center' style={{marginBottom :'10px'}}>
            <Card key={product.id} className='h-100'>
                <div>
                <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR:{product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{background:'white'}}>
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button> 
                </Card.Footer>
            </Card>
        </div>

    ))



  return (
    
    <div>
        <h1 style={{textAlign:'center'}}>Product Dashboard</h1>
        <div className="row">
            {cards}
        </div>
      
    </div>
  )
}

export default Product
