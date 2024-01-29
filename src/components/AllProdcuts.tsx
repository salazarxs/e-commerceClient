import { useEffect, useState } from "react";
import { GetProducts } from "../helpers/GetProducts";

const AllProducts = ()=>{

const [product, setProducts] = useState()



useEffect(()=>{
GetProducts(20,setProducts);
},[])


    return(
    <></>
)
}

export default AllProducts;