// import logo from './logo.svg';
import './App.css';
import UserContext from './contexts/UserContext';
import NavBar from './components/NavBar';
// import BankForm from './components/BankForm';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Home from './components/Home';
function App() {
  // const UserContext = createContext(null);
  let initialState = {
    currentUser: 0,
    users: [],
  };

  const testMode = true;
  // let initialState = { users: [] };
  if (testMode) {
  
  
    console.log('Starting test mode...');
    initialState.currentUser = 4;
    for (let i = 0; i < 10; i++) {
      initialState.users.push({
        id: i,
        name: 'John Smith',
        email: 'jsmith@abcd.com',
        password: 'myPass123',
        balance: 1000,
      });
    }
  }







  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={initialState}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Withdraw/" element={<Withdraw />} />
          <Route path="/Deposit/" element={<Deposit />} />
          <Route path="/AllData/" element={<AllData />} />
        </Routes>
      </UserContext.Provider>
     
    </HashRouter>
  );
}
export default App;
