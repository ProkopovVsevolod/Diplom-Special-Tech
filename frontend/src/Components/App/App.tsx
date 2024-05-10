import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainPage from "../MainPage/MainPage";
import Product from '../ProductPage/ProductPage';
import Registration from '../AuthPage/Registration';
import Authorization from '../AuthPage/Authorization';
import CatalogPage from '../СatalogPage/CatalogPage';
import Cart from '../Cart/Cart';
import "./reset.scss";
import "./base.scss";
import "./button.scss";
import PrivateRoute from '../../PrivateRoute';
import AdminPanel from '../Admin/AdminPanel';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/catalog/:id/tech/:id" element={<Product/>}/>
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Authorization/>}/>
          <Route path="/catalog/:id" element={<CatalogPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route 
            path="/admin" 
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }/>
        </Routes>
      </main>
      <Footer />
    </>
    
  );
}

export default App;
