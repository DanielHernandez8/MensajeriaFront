import { useState } from "react";
import { login, register } from "../services/api";
import { useUserContext } from "../providers/UserProvider";

const Login = () => {
  const [u, setU] = useState({ username: "", password: "" });
  const { setUser } = useUserContext();


  const handleLogin = async () => {
   const user = await login(u.username, u.password) //user (id)
   setUser({id: user.id});
  }

  const handleRegister = async () => {
    //aqui va la comprobacion de si no esta vacio.
    const user = await register(u.username, u.password) //user (id)
    setUser({username: user.username,
      password: user.password
    });
  }


  return(
    <div>
    <input type="text" onChange={e=>setU({...u, username: e.target.value})}  placeholder='User' />
    <input type="password" onChange={e=>setU({...u, password: e.target.value})} placeholder='Password' />
    <button onClick={handleLogin}>Ingresar</button>
    <button onClick={handleRegister}>Registrarse</button>
  </div>
  )
};

export default Login;