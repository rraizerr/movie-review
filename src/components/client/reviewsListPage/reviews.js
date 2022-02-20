import { Container, Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./reviews.css"

function Reviews({ reviewsData }) {

    return (
        <Container className="pt-3 pb-3">
            <Row xs={1} md={1} className="g-4 mb-3">
                {reviewsData.map((item) => (
                    <Card key={item.id}>
                        <Link to={item.src}><Card.Img variant="img-fluid rounded-start" src={item.img} /></Link>
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <Card.Title><Link to={item.src} className="nav-link link-secondary">{item.title}</Link></Card.Title>
                                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <Card.Text>{item.description}</Card.Text>
                            </div>
                            <Card.Footer className="d-flex justify-content-between">
                                <small className="text-muted">{item.postDate}</small>
                                <small className="text-muted">{item.author}</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg">
                    Показать ещё
                </Button>
            </div>
        </Container>
    )
}

export default Reviews;