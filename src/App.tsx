
import { useState } from 'react'
import './App.css'
import { Select } from './Select'

const options = [
  {label:'First',value:1},
  {label:'Second',value:2},
  {label:'Third',value:3},
  {label:'Fourth',value:4},
  {label:'Fifth',value:5},
]

function App() {
  const [value,setValue] = useState<typeof options[0] | undefined>(options[0])
  

  return (
    <>
    <Select options={options} value={value} onChange={o => setValue(o)}/>
    <h6  className="copy">This is Demo Project of Single Select DropDown</h6>
    <h6  className="copy">Copyright Zaid</h6>
    <h6  className="more">For More Projects Click Below Link</h6>
    <a href="https://github.com/Zaidbhati10114?tab=repositories">Github</a>
    </>
    
  )
}

export default App
