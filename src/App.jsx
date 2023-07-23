
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import {  Outlet} from "react-router-dom";
function App() {

  return (
   <>
   <Navbar></Navbar>
   <div className='max-w-[1250px] container  mx-auto min-h-[80vh]'>
     <Outlet></Outlet>
   </div>
  
   </>
  )
}

export default App
