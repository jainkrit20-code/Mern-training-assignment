import React from 'react'

const Contact = (value) => {
  let dt = value.getData;
  return (
    <div>
    Contact
    <button
      onClick={()=> {
        dt("hello child data from this side");
      }}
      >
Click here
    </button>
    </div>
  )
}

export default Contact
