import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  const handleClickIncrement = () =>{
    setCount(count + 1)
  }

  const handleClickDecrement = () =>{
    setCount(count - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(event.target[0].value)
  }

  return (
           
        <div className='robot-wrapper'>

          <div className='robot-hat'>
          <h1>{text}</h1>
          </div>

          <div className='robot-head'>
            <p>{count}</p>
          </div>

          <div className='robot-body'>
            <button onClick={handleClickIncrement} className='buttons'>+</button>
            <button onClick={handleClickDecrement} className='buttons'>-</button>
          </div>

          <div className='robot-text'>

          <form onSubmit={handleSubmit}>

            <div className='robot-mouth-text'>
               <label>Start Robot!</label>
               <input type="text" placeholder='Do not Upset me!'onChange={text} />
            </div>

            <div className='button-text'>
               <button className='mouth-button' type='submit'>On Fire</button>
            </div>

            </form>

          </div>

        </div>       
 
  );
}

export default App;
