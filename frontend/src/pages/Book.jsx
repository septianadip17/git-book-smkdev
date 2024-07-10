import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Book = () => {
const [books, setBooks] = useState([])

useEffect(() => {
  const fetchAllBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8800/books")
      console.log(res)
      setBooks()
    }catch (err) {
      console.log(err)
    }
  }
  fetchAllBooks()
}, [])

  return (
    <div>
      <h1>Gits Book Store</h1>
      <div className='books'>
        {books.map(book =>(
          <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt="images" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <p>{book.price}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Book