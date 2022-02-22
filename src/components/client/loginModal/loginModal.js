import { Modal, Container, Row, Col, Button, Form, Stack } from "react-bootstrap";
import GoogleLogin from 'react-google-login';

function LoginModal(props) {

    //884562966666-909ha1fm9ik1mifp9ujt0npb6k3b1kp3.apps.googleusercontent.com

    // function onSignIn(googleUser) {
    //     var profile = googleUser.getBasicProfile();
    //     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // }

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Вход на сайт <b className="colored-text">Movie review</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form>
                        <Row>
                            <Col xs={12} md={12}> {/*xs для мобилок md для компов - это длина блока*/}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={12}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                            <Stack gap={2} className="col-md-5 mx-auto">
                                <Button variant="primary" size="md" type="submit">
                                    Войти
                                </Button>
                            </Stack>
                        </Row>
                    </Form>
                    <Row className="mt-3 ">
                        <Col xs={6} md={4}>
                            {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
                            <GoogleLogin
                                clientId="884562966666-909ha1fm9ik1mifp9ujt0npb6k3b1kp3.apps.googleusercontent.com"
                                buttonText="Войти"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default LoginModal;