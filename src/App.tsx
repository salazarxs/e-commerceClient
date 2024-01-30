import { Routes,Route,BrowserRouter } from "react-router-dom"; 


// Components
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav";
import AllProducts from "./components/AllProdcuts";
import Product from "./components/Product";

 
const App = ()=>{
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Register/>} path="/register"/>
      <Route element={<Login/>} path="/login" />
      <Route element={<AllProducts/>} path="/products" />
      <Route element={<Product/>} path="/product/:id" />
    </Routes>
    </BrowserRouter>

  )
}
export default App;