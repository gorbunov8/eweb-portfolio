import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/NavbarComponent";
import Profile from "./components/Profile";

function App() {
  return <div className="App">
    <NavbarComponent />
    <Profile />
  </div>;
}

export default App;
