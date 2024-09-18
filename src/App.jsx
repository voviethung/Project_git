//rafce
import React, { useState } from 'react'
// import Databinding from './databinding/Databinding'
// import DemoHandleEvent from './eventHandler/DemoHandleEvent'
// import DemoRenderCondition from './renderCondition/DemoRenderCondition'
// import ChangeNumber from './DemoState/ChangeNumber'
// import ChangeFontSize from './DemoState/ChangeFontSize'
// import TinkerApp from './DemoState/TinkerApp'
// import ChangeCarColor from './DemoState/ChangeCarColor'
// import DemoProps from './props/DemoProps'
// import RenderWithMap from './RenderWithMap/RenderWithMap'
// import BTProductList from './RenderWithMap/BTProductList/BTProductList'
// import DanhSachSanPham from './LiftingStateup/DanhSachSanPham'
// import EXCarStore from './LiftingStateup/EXCarStore/EXCarStore'
// import ShoesPage from './ApiDemo/ShoesPage'
// import DemoLoginForm from './FormDemo/DemoLoginForm'
// import DemoLoginForm_useFormik from './FormDemo/DemoLoginForm_useFormik'
import RegisterForm from './pages/RegisterForm'
//Cấu hình react router dom
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Search from './pages/Search'
// import About from './pages/About'
import Cart from './pages/Cart'
// import Contact from './pages/Contact'
import HeaderMenu from './components/HeaderMenu'
import HomePageMaster from './MasterPages/HomePageMaster'
// import UserPageMaster from './MasterPages/UserPageMaster'
import Register from './pages/Register'
// import AdminPageMaster from './MasterPages/AdminPageMaster'
// import ProductManagement from './pages/ProductManagement'
// import UserManagement from './pages/UserManagement'
// import DashBoard from './pages/DashBoard'
// import Page404 from './pages/Page404'
import Profile from './pages/Profile'
// import ForgotPass from './pages/ForgotPass'
import Detail from './pages/Detail'

//import css
import './assets/styles/index.css';
// import AddProduct from './pages/ProductManagement/AddProduct'
// import EditProduct from './pages/ProductManagement/EditProduct'
// import Product from './pages/ProductManagement/Product'
// import AntDesignDemo from './AntDesignDemo/AntDesignDemo'
// import AntDesignTable from './AntDesignDemo/AntDesignTable'
// import ProductManagementAntd from './AntDesignDemo/ProductManagementAntd'
//Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/store'
// import ChangeNumberRedux from './pages/reduxDemo/ChangeNumberRedux'
// import ChangeFontSizeRedux from './pages/reduxDemo/ChangeFontSizeRedux'


const App = () => {

  const [state, setState] = useState();

  return (

    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='' element={<HomePageMaster />}>
            <Route index element={<HomePage />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            {/* <Route path='contact' element={<Login />}></Route> */}
            {/* <Route path='about' element={<About />}></Route> */}
            <Route path='profile' element={<Profile />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='search' element={<Search />}></Route>
            {/* <Route path='antd-table' element={<AntDesignTable />}></Route> */}
            {/* <Route path='antd-table-product' element={<ProductManagementAntd />}></Route> */}
            <Route path='detail'>
              <Route path=':prodId' element={<Detail />}></Route>
            </Route>

            {/* <Route path='productmanagement' element={<ProductManagement/>}></Route> */}
            {/* <Route path='add' element={<AddProduct/>}></Route> */}
            {/* <Route path='edit' element={<EditProduct/>}></Route> */}
            {/* <Route path='product' element={<Product/>}></Route> */}
            {/* <Route path='form' element={<DemoLoginForm_useFormik/>}></Route> */}
            <Route path='registerform' element={<RegisterForm/>}></Route>
            {/* <Route path='shoespage' element={<ShoesPage/>}></Route> */}





          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App