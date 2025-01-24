import './App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes/Route'
function App() {

  return (
    <>
    {/* <h1>Hello</h1> */}
   <RouterProvider router={route}/>
    </>

  )
}

export default App
