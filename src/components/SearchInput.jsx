import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export function SearchInput({ searchQuery, setSearchQuery, handleSearch }) {
    // Change handler
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <Container>
            <Form onSubmit={handleSearch} className="d-flex gap-2 mx-auto" style={{ maxWidth: "700px" }}>
                <Form.Control
                    aria-label="Search"
                    type="text"
                    placeholder="Search for a book..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <Button type="submit" variant="outline-dark">Search</Button>
            </Form>
        </Container>
    )
}
