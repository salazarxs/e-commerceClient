import axios from "axios";
import { useState } from "react";
import { GenerateJWT } from "../helpers/JWT";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  type dataLogin = {
    username: string;
    password: string;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const data: dataLogin = { username, password };
    const jwt = await GenerateJWT(username);
    if (jwt) {
      await axios
        .post("", data)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input type="text"
         placeholder="username"
          name="username"
          onChange={(e)=>setUsername(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password"
         name="password"
          placeholder="*****" 
          onChange={(e)=>setPassword(e.target.value)}/>

          <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
