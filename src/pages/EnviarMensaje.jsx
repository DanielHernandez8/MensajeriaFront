import {useEffect} from 'react';
import {getMensajes} from '../services/api';

const EnviarMensaje = () => {
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
                <input type="checkbox"/>
   </div>
  );
};

export default EnviarMensaje;