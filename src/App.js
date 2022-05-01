import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Pages/Home/Header/Header';
import Footer from './components/Pages/Home/Footer/Footer';
import Login from './components/Pages/LoginPage/Login/Login'
import Register from './components/Pages/LoginPage/Register/Register';
import StockUpdate from './components/Pages/StockUpdate/StockUpdate';
import RequireAuth from './components/Pages/LoginPage/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import AllInventory from './components/Pages/AllInventory/AllInventory';
import AddInventory from './components/Pages/AddInventory/AddInventory';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Delivery from './components/Pages/Delivery/Delivery';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/stockUpdate/:stockUpdateId' element={
          <RequireAuth>
            <StockUpdate></StockUpdate>
          </RequireAuth>
        }></Route>
        <Route path='/delivery/:stockUpdateId' element={
          <RequireAuth>
            <Delivery></Delivery>
          </RequireAuth>
        }></Route>
        <Route path='/allInventory' element={
          <RequireAuth>
            <AllInventory></AllInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addInventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
