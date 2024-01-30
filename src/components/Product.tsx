import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProduct } from "../helpers/GetProduct";

const Product = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      GetProduct(setProduct, id);
    }
  }, []);

  return (
    <div className="container-product">
      {product != undefined ? (
        <div className="container-title">
          <h1>{product.productName}</h1>
        </div>
      ) : (
        "Loading product..."
      )}
    </div>
  );
};

export default Product;
