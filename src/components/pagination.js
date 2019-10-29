// import tw from "tailwind.macro"
// import { css } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"

export default function Pagination(props) {
  const {
    context: { currentPage, numPages, pathPrefix },
  } = props

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? `/${pathPrefix}`
      : `/${pathPrefix}/${(currentPage - 1).toString()}`
  const nextPage = `/${pathPrefix}/${(currentPage + 1).toString()}`
  return (
    <div {...props}>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isFirst &&
        !isLast &&
        Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`/${pathPrefix}/${i === 0 ? "" : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </div>
  )
}
