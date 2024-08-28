import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import List from './pages/List/List.js';
import Hotel from './pages/Hotel/Hotel.js';
import Signin from './pages/Signin/Signin.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/hotels' element={<List/>}/>
          <Route path='/hotels/:id' element={<Hotel/>}/>
          <Route path='/login' element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
