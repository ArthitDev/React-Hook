import {useState} from 'react'

const UseState = () => {
  const [count,setCount] = useState(0)
  const [name,setName] = useState('ArthitDev')

  return (
    <div className='App'>
      <h1>Hello {name}</h1>
      <button type='button' onClick={() => setName('Arthit LungYa')}>Update Name</button>
      <div className='card'>
        <h2>{count}</h2>
        <button type='button' onClick={() =>setCount(count + 1)}>
          เพิ่่ม
        </button>
        <button type='button' onClick={() =>setCount(count - 1)}>
          ลด
        </button>
      </div>
    </div>
  )
}
export default UseState