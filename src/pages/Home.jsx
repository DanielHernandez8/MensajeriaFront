import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3><Link to={"/ver-mensaje/"}>Ver Mensajes</Link></h3>
      <h3><Link to={"/enviar-mensaje/"}>Enviar Mensaje</Link></h3>
    </div>
  );
};

export default Home;