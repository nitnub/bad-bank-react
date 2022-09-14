
import './App.css';
import { useEffect } from 'react';
import UserContext from './contexts/UserContext';
import NavBar from './components/NavBar';
// import BankForm from './components/BankForm';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
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

  let targetHeight =
    document.querySelectorAll('.content-header')?.clientHeight;
    console.log('th', targetHeight)
  useEffect(() => {
     targetHeight =
    // document.getElementById('nav-bar-container').clientWidth;
    document.getElementsByClassName('content-header')?.clientHeight;

  },[])


  window.addEventListener('load', () => {
    targetHeight =
    // // document.getElementById('nav-bar-container').clientWidth;
    // document.getElementsByClassName('content-header')?.clientHeight;
    document.getElementsByClassName('content-header')[0].clientHeight;
    // console.log(`target height: `, targetHeight)
    console.log(`target height: ${targetHeight}`)
    // const pageContainer = document.getElementsByClassName('page-container');
    // const pageContainer = document.getElementById('main-content');
    const headerSpan = document.getElementById('header-span');
    // pageContainer.style.width =  `${targetWidth}px`;
    headerSpan.style.height =  `${targetHeight}px`;

  } )

  window.addEventListener('resize', () => {
    // targetWidth =
    targetHeight =
      // document.getElementById('nav-bar-container').clientWidth;
      document.getElementsByClassName('content-header')[0].clientHeight;
    // console.log(`target height: `, targetHeight)
    console.log(`target height: ${targetHeight}`)
    // const pageContainer = document.getElementsByClassName('page-container');
    // const pageContainer = document.getElementById('main-content');
    const headerSpan = document.getElementById('header-span');
    // pageContainer.style.width =  `${targetWidth}px`;
    headerSpan.style.height =  `${targetHeight}px`;
  });

  return (
    <HashRouter>
      <NavBar />
 
      <div id="page-container">
      <div id="header-span" className="header-span">
        <div className="span-left"></div>
        <div className="span-right"></div>
      </div>
      <div id="outer-c" > 
      <Container className="">
        <UserContext.Provider value={initialState}>
        {/* <Container id="nav-bar-container" className="nav-bar"> */}
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Withdraw/" element={<Withdraw />} />
            <Route path="/Deposit/" element={<Deposit />} />
            <Route path="/AllData/" element={<AllData />} />
          </Routes>
         
        </UserContext.Provider>
        </Container>
        </div>
      </div>
    </HashRouter>
  );
}
export default App;
