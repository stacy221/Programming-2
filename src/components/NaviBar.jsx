import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';


export function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" data-bs-theme="dark" bg="dark" style={{ minHeight: "5.5rem" }}>
                <Col>
                    <Navbar.Brand className="fs-3 text-light mx-5 fw-semibold">Book Life</Navbar.Brand>
                </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-4"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
                    <Col lg={7}>
                        <Nav className="fs-4 gap-0 gap-lg-5">
                            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
                            <Nav.Link as={Link} to="/search" className="text-light">⌕ Search</Nav.Link>
                        </Nav>
                    </Col>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}