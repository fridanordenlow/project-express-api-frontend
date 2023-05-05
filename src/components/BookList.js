import React, { useEffect, useState } from 'react';

// const expressApiURL = 'https://project-express-api-mmopjfwcqq-lz.a.run.app'

const BookList = () => {
  const [bookList, setBookList] = useState([])
  // setLoading(true)
  useEffect(() => {
    fetch('https://project-express-api-mmopjfwcqq-lz.a.run.app/books/')
      .then((res) => res.json())
      .then((data) => setBookList(data))
      .catch((error) => console.error(error))
      .finally(() => console.log(bookList))
  }, [bookList])

  return (
    <div>
      {bookList.map((singleBook) => {
        return (
          <div key={singleBook.bookID}>
            {singleBook.title}
          </div>
        )
      })}
    </div>
  )
}

export default BookList