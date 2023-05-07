import React, { useEffect, useState } from 'react';

// const expressApiURL = 'https://project-express-api-mmopjfwcqq-lz.a.run.app'

const BookList = () => {
  const [bookList, setBookList] = useState([])
  // setLoading(true)
  useEffect(() => {
    fetch('https://project-express-api-mmopjfwcqq-lz.a.run.app/books/')
      .then((res) => res.json())
      .then((data) => setBookList(data.slice(6, 27)))
      .catch((error) => console.error(error))
      .finally(() => console.log(bookList))
  }, [bookList])

  return (
    <div className="books-container">
      <h1>Books from Express API</h1>
      <hr />
      {bookList.map((singleBook) => {
        return (
          <div className="single-book-div" key={singleBook.bookID}>
            <h2>&quot;{singleBook.title}&quot;</h2>
            <h3>Written by: {singleBook.authors}</h3>
            <p>Average rating: {singleBook.average_rating}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BookList