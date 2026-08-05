import React from 'react'
import "./Krit.css"
const Krit = () => {

  return (
    <div className='page' >
        <div className='loginpage'>
            <h1> Student Notes App</h1>
            <p>Quickly capture and persist your idea</p>
            <br />
            <input type="text" name="" className='note' placeholder='Write a notes' /><br />
            <button className='button'> Add Notes+</button>
            <div className='Saved'>
                <p>
                    Your Saved Notes
                </p><br />
                <h5> No Notes Saved yet</h5>
                <h5> Enter a Note Above and click "Add Notes" to start saving your ideas!</h5>
            </div>


        </div>

      
    </div>
  )
}

export default Krit
