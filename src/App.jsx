
import './App.css'
import User from './components/User'

function App() {
 

  return (
    <>
      
     <div className='w-11/12 mx-auto text-center bg-gray-300 my-18 py-8 rounded-2xl'>
       <h1 className='text-2xl py-4 font-semibold'>Simple CRUD operation</h1>
      <User></User>
     </div>
      
    </>
  )
}

export default App
