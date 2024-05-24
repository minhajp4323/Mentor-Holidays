import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import MentorMain from "./../../assets/Menort Main Logo.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand="lg" className="navbarMain">
      <Container>
        <Navbar.Brand onClick={()=>navigate("/")} href="#home" className="">
          {" "}
          <img src={MentorMain} style={{ width: "90px" }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto   ">
            {/* <NavDropdown
              title="Book Now"
              id="collapsible-nav-dropdown"
              className=""
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link onClick={()=>navigate("/properties")} >Book Now</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#features">List your property</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#deets">Trips</Nav.Link>
            <Nav.Link onDoubleClick={()=>navigate("/Admin/Login")} onClick={()=>navigate("/signin")} eventKey={2} >
              SignIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
