import logo from './travlLogoAB.png';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

import {Routes, Route } from 'react-router';
import {useState} from 'react'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const loginUser = () => 
  return (
    <div className="Travl">
      <Routes>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<SignUp />}/>
        {/* <Route path='profile' element={<Profile />}/> */}
      </Routes>
    
  
      <img src={logo} className="Travl-logo" alt="logo" />
      <h1>Travl</h1>
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

export default App;
