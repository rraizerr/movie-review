import { Container, Table } from "react-bootstrap";

import "./usersList.css";
function UsersList() {

    return (
        <Container className="mt-3 mb-2 users-list-display">
            <h6 className="fs-3 d-flex justify-content-center">Список пользователей</h6>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Имя пользователя</th>
                        <th>e-mail</th>
                        <th>Страница</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark Otto</td>
                        <td>otto@gmail.com</td>
                        <td>/users/markotto</td>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob Thornton</td>
                        <td>jac@gmail.com</td>
                        <td>/users/jacobthornton</td>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry Bird</td>
                        <td>bird@gmail.com</td>
                        <td>/users/larrybird</td>
                        <th>Delete</th>
                    </tr>

                </tbody>
            </Table>
        </Container>
    )
}

export default UsersList