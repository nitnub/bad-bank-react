import SignInButton from './Form/SignInButton';
import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

function NavBar() {
  const renderTooltip = (message) => (
    <Tooltip className="tool-tip">{message}</Tooltip>
  );

  const tooltipProps = {
    className: 'tooltip-container',
    placement: 'bottom',
    delay: { show: 250, hide: 250 },
    overlay: renderTooltip,
  };

  return (
    <Navbar className="nav-bar" variant="dark" expand="lg">
      <Container id="nav-bar-container" className="nav-bar">
        <OverlayTrigger
          {...tooltipProps}
          overlay={renderTooltip('Return to home screen')}
        >
          <Navbar.Brand id="nav-home" href="#">
            Bad Bank
          </Navbar.Brand>
        </OverlayTrigger>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('Create a new account')}
            >
              <Nav.Link id="nav-create-account" href="#/CreateAccount/">
                Create Account
              </Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('Withdraw money from my account')}
            >
              <Nav.Link id="nav-withdraw" href="#/Withdraw/">
                Withdraw
              </Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('Add money to my account')}
            >
              <Nav.Link id="nav-deposit" href="#/Deposit/">
                Deposit
              </Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('Check my transaction history')}
            >
              <Nav.Link
                id="nav-transaction-history"
                href="#/TransactionHistory/"
              >
                Transaction History
              </Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('View all customer data')}
            >
              <Nav.Link id="nav-all-data" href="#/AllData/">
                All Data
              </Nav.Link>
            </OverlayTrigger>
          </Nav>

          <SignInButton title={'Change User'} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
