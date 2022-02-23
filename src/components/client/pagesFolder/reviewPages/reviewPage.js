import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

import CreateRating from "../../componentsFolder/createRating/createRating";

function ReviewPage({ reviewsData }) {
    const { id } = useParams();

    const reviewPost = reviewsData.map(item => {
        return (
            +id === item.id
                ? (
                    <div key={item.id} className="mt-4 mb-4">
                        <div className="d-flex flex-column">
                            <h1 className="fs-2 d-flex">{item.title}</h1>
                            <div className="d-flex align-items-center">
                                <CreateRating size={24} value={item.rating} />
                                <small className="text-muted ms-1">{item.rating}</small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <small className="text-muted">{item.postDate}</small>
                            <div className="d-flex align-items-center">
                                <small className="text-muted me-3">{item.author}</small>
                                <CreateRating size={18} value={item.authorRating} />
                                <small className="text-muted ms-1">{item.authorRating}</small>
                            </div>
                        </div>
                        <Card.Img variant="top" src={item.img} />
                        {item.description.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Card.Text className="pt-3 pb-2 fs-5">{item.p}</Card.Text>
                                    <Card.Img variant="top" src={item.img} />
                                </div>
                            )
                        })}
                        <div className="text-muted">{item.group}</div>
                    </div>
                )
                : null
        )
    })

    return (
        <Container>
            {reviewPost}
        </Container>
    )
}

export default ReviewPage;