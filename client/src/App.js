import './App.css';
import UserContext from './contexts/UserContext';
import NavBar from './components/NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Withdraw from './components/Withdraw';
import TransactionHistory from './components/TransactionHistory';
import AllData from './components/AllData';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import { setHeaderHeight, testModeState } from './utils/util';
import SignIn from './components/SignIn';

function App() {
  let initialState = {
    currentUser: 0,
    users: [],
  };

  // Set testMode to true to pre-populate 5 dummy customers with random balances
  const testMode = true;
  if (testMode) {
    initialState = testModeState();
  }

  // Resize header on page load and page resize
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
        <div id="outer-container">
          <Container className="">
            <UserContext.Provider value={initialState}>
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
