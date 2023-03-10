import {BrowserRouter , Route, Switch} from "react-router-dom"
import './App.css';
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Perfil from "./components/perfil/Perfil";

function App() {
  return (
    <BrowserRouter>
        <Route path="/home" component={Navbar} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home/perfil" component={Perfil} />
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
