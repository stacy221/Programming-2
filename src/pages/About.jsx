import { Header } from "../components/Header"
import Container from 'react-bootstrap/Container';

export function About() {
    return (
        <>
            <Header />
            <main>
                <Container aria-label="Main About Content" className="text-center" style={{ maxWidth: "800px" }}>
                    <h1 className="text-center mt-5">About</h1>
                    <p>This is my (Stacy's) third project for Programming 2. I decided to do something on the simpler side and create a book-based website, where you can look up different novels. It's my first time using the Open Library API, so things felt a little tricky at first.</p>
                    <p>I used Vite React JS as my framework, and for CSS, Bootstrap and React Bootstrap. As mentioned before, the API used is Open Library.</p>
                    <p>This project contains: useState, useEffect, React Routing, 3 pages, and a whopping 6 components that are reusable across the board.</p>
                </Container>
            </main>
        </>
    )

}