import { useState } from "react";
import { login } from "../services/api";
import { useUserContext } from "../providers/UserProvider";

const Login = () => {
  const [u, setU] = useState();
  const { setUser } = useUserContext();


  const handleLogin = async () => {
   const user = await login(u.username, u.password) //user (id)
   setUser({id: user.id});
  }


  return(
    <div>
    <input type="text" onChange={e=>setU({...u, username: e.target.value})}  placeholder='User' />
    <input type="password" onChange={e=>setU({...u, password: e.target.value})} placeholder='Password' />
    <button onClick={handleLogin}>Ingresar</button>
  </div>
  )
};

export default Login;