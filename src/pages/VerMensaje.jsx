import { useEffect, useState } from "react";
import { getMensajes } from "../services/api";
import {useUserContext} from '../providers/UserProvider';

const VerMensaje = () => {  
  const { user } = useUserContext();
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    console.log('Usuario logueado:', user);
    if (user) {
      getMensajes(user.id)
      .then(data => {
        console.log('Datos recibidos:', data);
        setMensajes(data);
      })
    
    }
  }, [user]);

  return (
    <div> 
        {mensajes?.map((msg) => (
  <div key={msg.id}> 
    <p>{msg.mensaje}</p>
  </div>
))}
    </div>
  );
};

export default VerMensaje;