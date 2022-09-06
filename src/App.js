import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import NavBar from './components/NavBar';
import BankForm from './components/BankForm';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import Withdraw from './components/Withdraw';
function App() {
  const UserContext = createContext(null);
  let startingState = {
    currentUser: 0,
    users: [],
  };
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={startingState}>
        <Routes>
          <Route path="/withdraw/" element={<Withdraw />} />
        </Routes>
      </UserContext.Provider>
      <BankForm />
    </HashRouter>
  );
}
export default App;
