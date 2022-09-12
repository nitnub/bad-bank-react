import { Card } from 'react-bootstrap';
function Home() {
  const logoPath = process.env.PUBLIC_URL + '/img/bank.png';
  console.log('accessing Home...');
  return (
    <div className="main-content main">
      <h1 className="">Home</h1>
      <Card>
        
        <Card.Body>
        <Card.Title>Welcome to the bank</Card.Title>
        <Card.Text>For all your banking needs</Card.Text>
          <Card.Img className="img-home" src={logoPath} />
          {/* <img src="bank.png" />   */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
