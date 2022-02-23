import { Container, Navbar, Button } from "react-bootstrap";
// import { useLocalStorage } from "use-local-storage";

import "./footer.css"

function Footer() {
    // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const [theme, setTheme] = useLocalStorage('theme');

    // const switchTheme = () => {
    //     const newTheme = theme === "light" ? "dark" : "light";
    //     setTheme(newTheme)
    // }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> {/* bg="light" variant="light" */}
            <Container className="d-flex justify-space-between">
                <Navbar.Text>
                    Designed by Viacheslav Cherkov in 2022
                </Navbar.Text>
                <Button variant="secondary">
                    {/* onClick={(switchTheme)}>
                    {theme === "light" ? "dark" : "light"} theme */}
                    Theme color
                </Button>
            </Container>
        </Navbar>
    )
}

export default Footer;