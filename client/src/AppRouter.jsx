import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobsCalender from "./components/pages/calender/Calender";
import Graph from "./components/pages/graph/Graph";
import LoginRegister from "./components/pages/login-register/Login-register";
import Header from "./components/parts/header/header";
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
        <Route exact path="/" element={<LoginRegister />} />
        <Route exact path="/calender" element={<JobsCalender />} />
        <Route exact path="/graph" element={<Graph />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
