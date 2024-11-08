import { useEffect, useState } from "react";
import { getMensajes } from "../services/api";

const VerMensaje = () => {
  const [mensajes, setMensajes] = useState();
  
  useEffect(() => {
    getMensajes().then(data => {
  console.log('11111111',data)
      setMensajes(data)
    });
  },[]);

  return (
    <div>
  
    </div>
  );
};

export default VerMensaje;