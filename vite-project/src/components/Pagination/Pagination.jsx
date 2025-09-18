import React from 'react'
import MyButton from '../../UI/button/MyButton'
import classes from './Pagination.module.css'

const Pagination = ({ pages, currentPage, onPageChange }) => {
  if (!pages || pages.length === 0) {
    return null
  }

  return (
    <div className={classes.pagination}>
      {pages.map(pageNumber => 
        <MyButton 
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          style={{
            backgroundColor: currentPage === pageNumber ? 'teal' : 'white',
            color: currentPage === pageNumber ? 'white' : 'teal',
            margin: '0 5px'
          }}
        >
          {pageNumber}
        </MyButton>
      )}
    </div>
  )
}

export default Pagination