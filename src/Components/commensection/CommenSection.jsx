import React from 'react'

const CommenSection = (props) => {


    document.title= 'smart-coders - '+props.title
    return (
      <div className="w-100">{props.children}</div>
    )
}

export default CommenSection