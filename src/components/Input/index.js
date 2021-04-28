import React, {useState} from 'react';

function Input(props){
  const [ txt, setTxt] = useState('')

  const handleOnchange=(e)=>{
    setTxt(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleOnchange}></input>
      <p> text:{txt}</p>
    </div>
  )
}
export default Input;