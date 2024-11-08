import Router from "./app/Router";
import Login from "./pages/Login";
import { useTokenContext } from "./providers/TokenProvider";

const App = () => {
  const { token } = useTokenContext();
  return (
    <div>
      {token ? <Router /> : <Login/>}
    </div>
  )
};

export default App;