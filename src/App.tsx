import { Routes,Route,BrowserRouter } from "react-router-dom"; 


// Components
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav";
import AllProducts from "./components/AllProdcuts";

 
const App = ()=>{
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Register/>} path="/register"/>
      <Route element={<Login/>} path="/login" />
      <Route element={<AllProducts/>} path="/products" />
    </Routes>
    </BrowserRouter>

  )
}
export default App;