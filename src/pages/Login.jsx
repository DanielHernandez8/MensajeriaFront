import { useState } from "react";
import { login } from "../services/api";
import { useTokenContext } from "../providers/TokenProvider";

const Login = () => {
  const [user, setUser] = useState();
  const { setToken } = useTokenContext();


  const handleLogin = async () => {
   const token = await login(user.username, user.password)
   setToken(token);
  }


  return(
    <div>
    <input type="text" onChange={e=>setUser({...user, username: e.target.value})}  placeholder='User' />
    <input type="password" onChange={e=>setUser({...user, password: e.target.value})} placeholder='Password' />
    <button onClick={handleLogin}>Ingresar</button>
  </div>
  )
};

export default Login;