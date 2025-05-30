import { useState } from 'react'
import Screen from './components/Screen'
import Button from './components/Button';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
  "C"
];

function calculateResult(expression) {
  return evaluate(expression);
}


function handleClick(value) {
  if (value == 'C') {
    setInput('')
    setResult('')

  } else if (value == '=') {
      try {
        const answer = calculateResult(input);
        setResult(answer)
      } catch {
        setResult("Invalid math :(")
      }
  } else {
      setInput((prev) => prev + value);
  }
}

  return (
    <div className="wrapper">
      <div className='calculator'>
        <Screen inputProp={input} resultProp={result} ></Screen>

        <div className='buttonsGrid'>
          <Button buttonName={'7'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'8'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'9'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'/'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'4'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'5'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'6'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'*'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'1'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'2'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'3'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'-'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'0'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'C'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'+'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'.'} handleClickProp={handleClick} className="button"/>
          <Button buttonName={'='} handleClickProp={handleClick} className="equals"/>
        </div>
      </div>
    </div>
  )
}

export default App
