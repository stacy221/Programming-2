import { useState, useEffect } from "react";
import { getTrendingBooks } from "../api";
import { SearchInput } from "../components/SearchInput";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { LoadingMsg } from "../components/LoadingMsg";

export function Home() {
    // State declaration
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTrendingBooks = async () => {
            try {  // "Try" executes code. "Catch" runs when an error occurs. "Finally" executes regardless of whatever error happens. Cleaner vs ifs/thens in this case
                const trendingBooks = await getTrendingBooks();
                setBooks(trendingBooks);
            } catch (err) {
                setError("Something went wrong!");
            } finally {
                setLoading(false);
            }
        };

        loadTrendingBooks();
    }, []); // Prevents re-rendering/re-fetching if trending books did not change

    return (
        <>
            <Header />
            <main>

                <h1 className="text-center mt-5">Trending Books</h1>
                {loading ? <LoadingMsg /> : <MainContent books={books} />}
            </main>
        </>
    )
}