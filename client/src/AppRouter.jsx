import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobsCalender from "./components/pages/calender/Calender";
import Graph from "./components/pages/graph/Graph";
import LoginRegister from "./components/pages/login-register/Login-register";
import Header from "./components/parts/header/header";
import Footer from "./components/parts/footer/Footer";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import Profile from "./components/pages/profile/Profile";
import Board from "./components/pages/board/Board";

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
        <Route path="/board" element={<Board />} />
        <Route exact path="/calender" element={<JobsCalender />} />
        <Route exact path="/graph" element={<Graph />} />
        <Route exact path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
