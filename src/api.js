const API_URL = "https://openlibrary.org"

export const getTrendingBooks = async () => { // Using an async/await for fetch to ensure code doesn't step on itself by trying to execute before receiving a response
    const response = await fetch(`${API_URL}/trending/now.json?&limit=20`);
    const data = await response.json();
    const {works} = data;
    console.log(works)
    return (works)
};

export const getSearchedBooks = async (query) => {
    const response = await fetch(`${API_URL}/search.json?q=${encodeURIComponent(query)}&limit=20`); // encodeURIComponent basically turns the input from the search form into a string compatible with URLs
    const data = await response.json();
    const {docs} = data;
    console.log(docs)
    return (docs)
};