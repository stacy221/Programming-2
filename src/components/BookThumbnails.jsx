import no_image from "../assets/no_image.png"
import Card from 'react-bootstrap/Card';

export function BookThumbnails({ book }) {
    // IMG Url, Author variable
    const bookCover = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : no_image;
    const bookAuthor = book.author_name ? book.author_name.join(", ") : book.author_name;

    return (
        <>
            <Card className="mb-3 pb-3" style={{ width: "16rem" }}>
                <Card.Img
                    variant="top"
                    className="object-fit-cover"
                    style={{ height: "270px"}}
                    src={bookCover}
                    alt={book.title} />
                <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Title as="h3" className="fs-4">{book.title}</Card.Title>
                    <Card.Text>{bookAuthor}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
