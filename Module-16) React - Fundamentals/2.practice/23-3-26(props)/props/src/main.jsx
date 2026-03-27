import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EmployeeDetail from './empolyeeDetail'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeDetail id="1" name="sweta" department="IT" salary="50000" education="B.Tech" experience="2 years" hobbies="reading, writing" />
    

 
  </StrictMode>,
)