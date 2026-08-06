import React, { useState } from 'react'

const Conditinalrendering = () => {
    const [islogin,setislogin]=useState(false);
    const[value,setvalue]=useState();
  return (
    <div>
      conditionalrendering
      {islogin?<user/>:<guest/>}l

    </div>
  )
}

export default Conditinalrendering
