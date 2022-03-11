import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from './components/Contacts';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App min-vh-100">
        {/* <Signup /> */}
        <Routes>
          <Route path="/" element={<Signup />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/contacts" element={<Contacts />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
