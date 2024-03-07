import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EduDetails from './components/EduDetails';
function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/edudetails' element={<EduDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
