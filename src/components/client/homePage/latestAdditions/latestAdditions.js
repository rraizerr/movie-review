import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function LatestAdditions({ sortedByDate }) {

    return (
        <Container>
            <h3 className="mt-4 mb-4">Latest Additions</h3>
            <Row xs={1} md={3} className="g-4 d-flex flex-wrap justify-content-evenly">
                {sortedByDate.slice(0, 6).map((item) => (
                    <Card key={item.id} className="d-flex flex-wrap" style={{ width: '24rem' }}>
                        <Link to={item.src} className="card-img-top"><Card.Img variant="top" src={item.img} /></Link>
                        <Card.Body className="d-flex flex-column">
                            <div>
                                <Card.Title><Link to={item.src} className="link-secondary text-decoration-none">{item.title}</Link></Card.Title>
                                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <Card.Text className="mb-2">{item.description}</Card.Text>
                            </div>
                            <Card.Footer className="d-flex justify-content-between">
                                <small className="text-muted">{item.postDate}</small>
                                <small className="text-muted">{item.author}</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    )
}

export default LatestAdditions;