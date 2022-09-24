import './App.css';
import { useEffect } from 'react';
import UserContext from './contexts/UserContext';
import NavBar from './components/NavBar';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import Withdraw from './components/Withdraw';
import TransactionHistory from './components/TransactionHistory';
import AllData from './components/AllData';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import { getTimeStamp, setHeaderHeight } from './utils/util';
import SignIn from './components/SignIn';

function App() {
  // const UserContext = createContext(null);
  let initialState = {
    currentUser: 0,
    users: [],
  };

  const testMode = true;
  if (testMode) {
    console.log('Starting test mode...');
    initialState.currentUser = 0;
    for (let i = 0; i < 10; i++) {
      const balance = Math.floor(Math.random() * 10000);
      const dateTime = getTimeStamp();
      initialState.users.push({
        id: i,
        name: 'John Smith',
        email: 'jsmith@abcd.com',
        password: 'AAbb!!11',
        balance,
        history: [{dateTime, balance}]
      });
    }
  }

  window.addEventListener('load', () => {
    setHeaderHeight();
  });

  window.addEventListener('resize', () => {
    setHeaderHeight();
  });

  return (
    <HashRouter>
      <NavBar />

      <div id="page-container">
        <div id="header-span" className="header-span">
          <div className="span-left"></div>
          <div className="span-right"></div>
        </div>
        <div id="outer-c">
          <Container className="">
            <UserContext.Provider value={initialState}>
              {/* <Container id="nav-bar-container" className="nav-bar"> */}

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CreateAccount" element={<CreateAccount />} />
                <Route path="/Withdraw/" element={<Withdraw />} />
                <Route path="/Deposit/" element={<Deposit />} />
                <Route path="/TransactionHistory/" element={<TransactionHistory />} />
                <Route path="/AllData/" element={<AllData />} />
                <Route path="/SignIn/" element={<SignIn />} />
              </Routes>
            </UserContext.Provider>
          </Container>
        </div>
      </div>
    </HashRouter>
  );
}
export default App;
