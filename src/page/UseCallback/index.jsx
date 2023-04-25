import {useState,useCallback} from 'react'

const UseCallback = () => {
  const [count,setCount] = useState(0)
  const countDisplay = useCallback((strCount) =>{
    return strCount + ' ' + count
  }, [count])
  return (
    <div className='App'>
      <h1>{countDisplay('')}</h1>
      <button onClick={() => setCount(count + 10)}>Add</button>
    </div>
  )
}
export default UseCallback
