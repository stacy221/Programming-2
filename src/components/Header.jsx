import { NaviBar } from "./NaviBar";
import Container from 'react-bootstrap/Container';

export function Header() {
    return (
        <header>
            <NaviBar />
            <Container className="text-center mt-2 mb-3 fs-5">
                <p>Programming 2 Project 3</p>
            </Container>
        </header>
    )
}