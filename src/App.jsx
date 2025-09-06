import React, { useRef, useState } from 'react'
import { Form, Input, SelectTip, Result } from "./components"
import '@fontsource/space-mono/700.css';
function App() {
  const [state, settate] = useState({});


  return (
    <>
      <h1 className='text-2xl uppercase mt-[50px] md:mt-[80px] lg:mt-[163px] mb-10 md:mb-15 lg:mb-21.5'>
        Spli
        <br />
        tter
      </h1>
      <div className='flex flex-col gap-8 lg:gap-12  lg:flex-row bg-white rounded-t-2xl md:rounded-2xl p-8 lg:p-12 w-full max-w-[920px]'>
        <Form />
        <Result />
      </div>
    </>
  )
}

export default App