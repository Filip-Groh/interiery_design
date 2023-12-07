import React from 'react'

const Article = ({params: {id}}) => {
  console.log(id)
  return (
    <div>{id}</div>
  )
}

export default Article