import { Routes, Route} from "react-router-dom";
import Authorization from "./../AuthPage/Authorization";
import Registration from "./../AuthPage/Registration";
import MainPage from "../MainPage/MainPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Authorization/>}/>
            <Route path="/registration" element={<Registration/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
