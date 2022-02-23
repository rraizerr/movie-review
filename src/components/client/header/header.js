import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginModal from "../loginModal/loginModal";

function Header({ responseGoogle }) {
    const [modalShow, setModalShow] = useState(false);
    const logged = false;

    const userData = {
        givenName: "",
        email: "",
        imageUrl: ""
    };

    // const responseGoogle = (response) => {
    //     console.log(response);
    //     console.log(response.profileObj.givenName);
    //     console.log(response.profileObj.email);
    //     console.log(response.profileObj.imageUrl);
    // }

    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> {/* bg="light" variant="light" */}
                <Container>
                    <Navbar.Brand><Link className="navbar-brand nav-link" to="/">Movie review</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="reviews">Обзоры</Link>
                        </Nav>
                        <Nav>
                            {!logged
                                ? (<Button variant="secondary" onClick={() => setModalShow(true)}>
                                    Войти
                                </Button>)
                                : (<Navbar.Text>
                                    Вы вошли как: <Link to="/users/:name">Mark Otto</Link>
                                </Navbar.Text>)
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                responseGoogle={responseGoogle} />
        </>
    )
}

export default Header;