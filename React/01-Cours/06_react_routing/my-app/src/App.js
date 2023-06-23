import{Link, NavLink, Outlet} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Mes Projets</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>f
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
       
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
