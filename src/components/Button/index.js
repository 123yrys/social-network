import React, {useState} from 'react';
function Button(props){
  const [ yrys, setYrys] = useState('no')

  const handleClick =()=>{
    if(yrys === 'no'){
      setYrys('yes')
    }
    else{
      setYrys('no')
    }
  }
  return (
    <div>
      <button onClick={handleClick}>{props.text}</button>
      <p>{props.text} yrys :{yrys}</p>
    </div>
  )
}
export default Button;