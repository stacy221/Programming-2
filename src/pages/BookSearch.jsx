import { useState } from "react";
import { MainContent } from "../components/MainContent";
import { SearchInput } from "../components/SearchInput"
import { getSearchedBooks } from "../api";
import { Header } from "../components/Header";
import { LoadingMsg } from "../components/LoadingMsg";

export function BookSearch() {
    // Declaring states
    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Search handler
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return // Prevents people from inputting blank fields
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await getSearchedBooks(searchQuery)
            setBooks(searchResults)
            setError(null)
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <Header />
            <main>
                <SearchInput
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearch={handleSearch}
                /> {/*Even more propwork!! Helps pass my states and functions between parent/child. Keeps things slightly tidier*/}
                {loading ? <LoadingMsg /> : <MainContent books={books} />}
            </main>
        </>
    )
}