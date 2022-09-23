import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { setActiveNavLink } from '../utils/util';
function Home() {


  useEffect(() => {
    setActiveNavLink('nav-home')
  },[])

  const logoPath = process.env.PUBLIC_URL + '/img/bank.png';
  console.log('accessing Home...');
  return (
    <div className="main-content">
       <h1 role= "heading" className="content-header">Home</h1>
      <Card>
        
        <Card.Body>
        <Card.Title>Welcome to the bank</Card.Title>
        <Card.Text>For all your banking needs</Card.Text>
          <Card.Img className="img-home" src={logoPath} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
