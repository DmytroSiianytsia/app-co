import React, { useState } from 'react'
import './pagination.css'

export default function Pagination({ users, usersPerPage, paginate }) {
  const [listOfPage, setListOfPage] = useState(1)
  const [pagePerList] = useState(5)
  const indexLastPageInList = listOfPage * pagePerList
  const indexFirstPageInList = indexLastPageInList - pagePerList

  const pageNumbers = []
  const countAllPages = Math.ceil(users.length / usersPerPage)

  for (let i = 1; i <= countAllPages; i++) {
    pageNumbers.push(
      <li
        className="pagination__list-item"
        key={i}
        onClick={() => paginate(i)}        
      >
        {i}
      </li>
    )
  }

  const currentPages = pageNumbers
    .slice(indexFirstPageInList, indexLastPageInList)

  const toPrevPages = () => {
    listOfPage > 1 && setListOfPage(listOfPage - 1)
  }
  const toNextPages = () => {
    listOfPage < countAllPages / pagePerList && setListOfPage(listOfPage + 1)
  }

  return (
    <nav className="pagination">
      <div className="pagination__prev" onClick={() => toPrevPages()}>
        {
          listOfPage === 1
            ?
            <img
              className="pagination__arrow-prev"
              src={require("./img/disable-arrow.svg")}
              alt="Prev page"
            />
            :
            <img
              className="pagination__arrow-prev-act"
              src={require("./img/active-arrow.svg")}
              alt="Prev page"
            />
        }
      </div>
      <ul className="pagination__list">
        {currentPages}
      </ul>
      <div className="pagination__next" onClick={() => toNextPages()}>
        {
          listOfPage < countAllPages / pagePerList
            ?
            <img
              className="pagination__arrow-next"
              src={require("./img/active-arrow.svg")}
              alt="Next page"
            />
            :
            <img
              className="pagination__arrow-next-dis"
              src={require("./img/disable-arrow.svg")}
              alt="Next page"
            />
        }
      </div>
    </nav>
  )
}
