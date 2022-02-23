import { Container, Form, FormControl, Button } from "react-bootstrap";

function Search() {

    return (
        <Container className="d-flex justify-content-center mt-3">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-secondary">Search</Button>
            </Form>
        </Container>
    )
}

export default Search;