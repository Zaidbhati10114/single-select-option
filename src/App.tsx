
import { useState } from 'react'
import './App.css'
import { Select, SelectOption } from './Select'

const options = [
  {label:'First',value:1},
  {label:'Second',value:2},
  {label:'Third',value:3},
  {label:'Fourth',value:4},
  {label:'Fifth',value:5},
]

function App() {
  const [value1,setValue1] = useState<SelectOption[]>([options[0]])
  const [value2,setValue2] = useState<SelectOption | undefined>(options[0])

  

  return (
    <>
    <Select multiple  options={options} value={value1} onChange={o => setValue1(o)}/>
    <br />
    <Select  options={options} value={value2} onChange={o => setValue2(o)}/>

    {/* <h6  className="copy">This is Demo Project of Single Select DropDown</h6>
    <h6  className="copy">Copyright Zaid</h6>
    <h6  className="more">For More Projects Click Below Link</h6>
    <a href="https://github.com/Zaidbhati10114?tab=repositories">Github</a> */}
    </>
    
  )
}

export default App
