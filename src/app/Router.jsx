import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import EnviarMensaje from '../pages/EnviarMensaje';
import VerMensaje from '../pages/VerMensaje';
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/ver-mensaje/" element={<VerMensaje/>} />
      <Route path="/enviar-mensaje/" element={<EnviarMensaje/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
);

export default Router;