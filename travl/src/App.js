//import logo from './travlLogoAB.png';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Settings from './components/Settings';
import Profile from './components/Profile';
import AddPoint from './components/AddPoint';
import PointOfInterest from './components/PointOfInterest';
import Categories from './components/Categories';
import MapPage from './components/MapPage';

import {Routes, Route } from 'react-router';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginUser = () => setIsLoggedIn(!isLoggedIn)

  useEffect(() => {
    if(localStorage.getItem('id')) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <div className="Travl">
      <Routes>
        <Route path='*' element={isLoggedIn ? <Dashboard /> : <Login logFunction={loginUser}/>} />

        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<SignUp logFunction={loginUser} />}/>
        
        <Route path='settings' element={<Settings />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='addPoint' element={<AddPoint />}/>
        <Route path='pointOfInterest' element={<PointOfInterest />}/>
        <Route path='categories' element={<Categories />}/>
        <Route path='mapPage' element={<MapPage />}/>
      </Routes>
    
  
      {/* <img src={logo} className="Travl-logo" alt="logo" />
      <h1>Travl</h1> */}
    </div>
  );
}
      
      /* 

      <header className="Travl">
       
        <p>
          Edit <code></code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Travl
        </a>
//       </header> */
//}
//     </div>
//   );
// }
{
function AppSwitch (){

const [value, setValue] = useState(false);
  return (
    <div className="app">
      <Settings
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
    </div>
  );
}
}

export default App;
