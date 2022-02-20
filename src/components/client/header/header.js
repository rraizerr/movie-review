import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginModal from "../loginModal/loginModal";

function Header() {
    const [modalShow, setModalShow] = useState(false);
    const logged = true;
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> {/* bg="light" variant="light" */}
                <Container>
                    <Navbar.Brand><Link className="navbar-brand nav-link" to="/">Movie review</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="reviews">Reviews</Link>
                        </Nav>
                        <Nav>
                            {!logged
                                ? (<Button variant="secondary" onClick={() => setModalShow(true)}>
                                    Sigh in
                                </Button>)
                                : (<Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
                                </Navbar.Text>)
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Header;