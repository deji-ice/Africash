import { useState, useEffect } from 'react'

import './App.css'
import LadyBG from "./components/LadyBG";
import Navbar from './components/Navbar'
import About from './pages/About'
import Feedbacks from "./components/Feedbacks";
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return (
    <>
      {loading === false ?
        (<>
          <Navbar />
          <About />
          <LadyBG />
          <Feedbacks />
          <Newsletter />
          <Footer />
        </>)
        :
        (
          <div className='flex justify-center items-center h-screen'>
            <svg className=' motion-safe:animate-spin ' width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2.66675C23.364 2.66675 29.3334 8.63608 29.3334 16.0001C29.3334 23.3641 23.364 29.3334 16 29.3334C8.63602 29.3334 2.66669 23.3641 2.66669 16.0001C2.66669 8.63608 8.63602 2.66675 16 2.66675ZM15.0574 11.2854L11.2854 15.0574C11.0354 15.3075 10.895 15.6465 10.895 16.0001C10.895 16.3536 11.0354 16.6927 11.2854 16.9427L15.0574 20.7147C15.3074 20.9647 15.6465 21.1051 16 21.1051C16.3536 21.1051 16.6926 20.9647 16.9427 20.7147L20.7147 16.9427C20.9646 16.6927 21.1051 16.3536 21.1051 16.0001C21.1051 15.6465 20.9646 15.3075 20.7147 15.0574L16.9427 11.2854C16.6926 11.0355 16.3536 10.895 16 10.895C15.6465 10.895 15.3074 11.0355 15.0574 11.2854Z" fill="#006E41" />
            </svg>
          </div>
        )

      }
    </>


  )
}


