import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Pages/Home/Header/Header';
import Footer from './components/Pages/Home/Footer/Footer';
import Login from './components/Pages/LoginPage/Login/Login'
import Register from './components/Pages/LoginPage/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
