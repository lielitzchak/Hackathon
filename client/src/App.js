
import UserContextProvider from './contexts/UserContext';
import AppRouter from './AppRouter';
import './index.css';


const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <AppRouter/>
      </UserContextProvider>
    </div>
  );
}

export default App;