import { BookThumbnails } from "./BookThumbnails";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function MainContent({ books }) {
    return (
        <>
            <Container fluid="md" className="mt-4">
                <Row xs={1} s={2} md={3} lg={4} xl={5} className="g-4 text-center" as="section" aria-label="Book Array">
                    {books.map((book) => (
                        <Col className="d-flex justify-content-center">
                            <BookThumbnails key={book.key} book={book} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}