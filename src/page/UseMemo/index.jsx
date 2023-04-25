import { useMemo, useState } from 'react'

const UseMemo = () => {
  const [inputValue,setInputValue] = useState('')
  const memo = useMemo(() => {
    return <ChildComponent count={inputValue.length}/>
  }, [inputValue])

  return (
    <div>
      <input type='text' onChange={(e) => setInputValue(e.target.value)} />
      {memo}
    </div>
  )
}

const ChildComponent = ({count}) => {
  return(
    <h1>Text Length is : {count}</h1>
  )
}
export default UseMemo
