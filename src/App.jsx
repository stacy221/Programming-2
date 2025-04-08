import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { BookSearch } from './pages/BookSearch'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<BookSearch />} />
      </Routes>
    </main>
  )
}

export default App


/* 
PSEUDOCODE:
Book website
- Home page (shows random books)
- About page (description about my project)
- Search page & function that returns user's queries
*/