import { forwardRef } from 'react';
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
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
    delay: { show: 250, hide: 300 },
    overlay: renderTooltip,
  };
  // className="tooltip-container"
  // placement="bottom"
  // delay={{ show: 250, hide: 300 }}
  // overlay={renderTooltip}

  return (
    <Navbar className="nav-bar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Bad Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('Create a new account')}
            >
              <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
            </OverlayTrigger>


            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('Withdraw money from my account')}
            >
            <Nav.Link href="#/Withdraw/">Withdraw</Nav.Link>
            </OverlayTrigger>



            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('Add money to my account')}
            >
            <Nav.Link href="#/Deposit/">Deposit</Nav.Link>
            </OverlayTrigger>




            <OverlayTrigger
              {...tooltipProps}
              overlay={renderTooltip('View all customer data')}
            >
            <Nav.Link href="#/AllData/">All Data</Nav.Link>
            </OverlayTrigger>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
