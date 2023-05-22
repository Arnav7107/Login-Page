import Header from './Components/header.js'
import Login from './Components/login.js'
import Signup from './Components/signup.js'
import Welcome from './Components/welcome.js';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from 'react-router-dom'
import { render } from 'react-dom';

function App() {
  return (
    <div className= 'ui container' >
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/"  element={<Header />} /> */}
        <Route path="/"  element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
{/* <Header />
        <Login /> */}