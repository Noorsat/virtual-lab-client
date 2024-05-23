import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main'
import Lessons from './pages/Lessons/Lessons';
import Theory from './pages/Theory/Theory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulas from './pages/Formulas/Formulas';
import About from './pages/About/About';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/lessons' element={<Lessons />} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/formulas' element={<Formulas />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
