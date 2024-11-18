import { useState, useEffect } from 'react';
import { getUsers, sendMessage } from '../services/api';

const EnviarMensaje = () => {
  const [selectedUsers, setSelectedUsers] = useState([]); // Usuarios seleccionados
  const [message, setMessage] = useState(''); // Mensaje a enviar
  const [users, setUsers] = useState([]); // Lista de usuarios que vamos a obtener del backend

  // UseEffect para obtener los usuarios del backend
  useEffect(() => {
    getUsers().then(setUsers)
  }, []); // El array vacío asegura que solo se ejecute una vez

  
  const handleCheckboxChange2 = (checked, userId) => {
const selectedUsersAux = checked ? [...selectedUsers,userId]: selectedUsers.filter(u => u != userId);
setSelectedUsers(selectedUsersAux);
  }

  // Función para manejar el envío del mensaje
  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendMessage({
      message: message, // El mensaje que se va a enviar
      usuarios: selectedUsers, // La lista de usuarios seleccionados (IDs)
    })
    setMessage(""); 
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enviar Mensaje</h3>

      {/* Mostrar los usuarios obtenidos desde la base de datos */}
{
        users?.map((user) => (
          <div key={user.id}>
            <label>
              {user.username}
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxChange2(e.target.checked, user.id)} // Llamamos a la función cuando se cambia
              />
            </label>
          </div>
        )) 
}



      {/* Campo de texto para escribir el mensaje */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu mensaje aquí..."

      />

      <button type="submit">Enviar mensaje</button>
    </form>
  );
};

export default EnviarMensaje;
