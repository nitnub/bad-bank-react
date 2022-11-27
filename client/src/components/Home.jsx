import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { setActiveNavLink } from '../utils/util';
function Home() {
  const logoPath = process.env.PUBLIC_URL + '/img/bank.png';

  useEffect(() => {
    setActiveNavLink('nav-home')
  },[])

  return (
    <div className="main-content">
       <h1 className="content-header">Home</h1>
      <Card>
        <Card.Body>
        <Card.Title>Welcome to the Bad Bank</Card.Title>
        <Card.Text>For all your banking needs</Card.Text>
          <Card.Img className="img-home" src={logoPath} alt="piggy bank with coins"/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
