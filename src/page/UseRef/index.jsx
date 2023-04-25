import { useState, useEffect, useRef } from 'react'

const UseRef = () => {
  const [inputValue, setInputValue] = useState('')
  const previousInputValue = useRef('')

  useEffect(() => {
    previousInputValue.current = inputValue
    document.title = inputValue ? inputValue : 'UseRef'
    setTimeout(() => {
      document.title = 'ArthitDev'
    }, 5000);
  }, [inputValue])

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1> Current Value: {inputValue}</h1>
      <h2>Previous value: {previousInputValue.current}</h2>
    </div>
  )
}

export default UseRef