import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx'
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div>
      <BrowserRouter basename='EmployeeAppp'>
      
      
      <Routes>



        <Route exact path ="/" element = {<Home/>} />
        <Route exact path ="form" element = {<EmployeeForm/>} />
      </Routes>
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
