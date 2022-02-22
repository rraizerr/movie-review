import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./errorPage.css";

function ErrorPage() {

    return (
        <Container className="d-flex flex-column align-items-center mt-4 mb-4 error-page-display">
            <p className="fs-2">Ошибка</p>
            <b className="fs-1 mb-3">404</b>
            <p className="fs-4">Страница не найдена или еще не создана</p>
            <p className="fs-4">Вернуться на <Link className="error-page-link" to="/">главную</Link></p>
        </Container>
    )
}

export default ErrorPage;