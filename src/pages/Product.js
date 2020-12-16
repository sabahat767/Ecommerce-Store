import React,{useEffect} from 'react'
import ShowProduct from '../components/ShowProducts'
function Product() {
    const [products,setproducts]=React.useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(prod=>{
               // console.log(prod)
                setproducts(prod)
            })
            }, []);
            console.log(products)
    return (
        <div>
            {products.map((product)=>(
                <ShowProduct product={product}/>
            ))}
        </div>
    )
}

export default Product
