import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobsCalender from "./components/pages/calender/Calender";
import Graph from "./components/pages/graph/Graph";
import LoginRegister from "./components/pages/login-register/Login-register";
import Header from "./components/parts/header/header";
import Home from "./components/pages/home/home";
import Footer from "./components/parts/footer/Footer";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const AppRouter = () => {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      {user.isLogin && 
        <>
          <Header />
          <Footer />
        </>
      }
      <Routes>
        <Route exact path="/" element={user?<Home/>:<LoginRegister />} />
        <Route exact path="/calender" element={user?<JobsCalender />:<LoginRegister />} />
        <Route exact path="/graph" element={user?<Graph/>:<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
