import axios from "axios";
import { Product } from "./interfaces/ProductInterface";
import products from "../helpers/FakeProduct.json";

export const GetProduct = async (state: any, productID: string) => {
  //   await axios.get(`/api/v1/products/${productID}`).then((data) => {
  //     const product: Product = data.data;
  //     state(product).catch((err) => {
  //       console.log(err);
  //     });
  //   });

  state(products.find((product) => product.id == parseInt(productID)));
};
