import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './layout/Pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUsers';
import ViewUser from './Users/ViewUser';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser />} />  
        <Route exact path="/edituser/:Id" element={<EditUser/>}/>
        <Route exact path="/viewuser/:Id" element={<ViewUser />} />

        </Routes>

      </Router>

    </div>
  );
}


export default App;
