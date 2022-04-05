import LoginRegister from './components/pages/login-register/Login-register';
import UserContextProvider from './contexts/UserContext';
import './index.css';


const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <LoginRegister />
      </UserContextProvider>
    </div>
  );
}

export default App;