import React, { useState } from 'react'

const dateTip = [
  {
    id: 1,
    title: 5,
    isselected: false
  },
  {
    id: 2,
    title: 10,
    isselected: false
  },
  {
    id: 3,
    title: 15,
    isselected: false
  },
  {
    id: 4,
    title: 25,
    isselected: false
  },
  {
    id: 5,
    title: 50,
    isselected: false
  },
]

function SelectTip() {
  const [state, Setstate] = useState(dateTip)
  const changer = (id) => {
    
    Setstate(prev => {

      return prev.map(el => {
        console.log(el.id)

        return {...el, isselected: el.id == id ? el.isselected = true : false}
      })

    })


  }

  return (
    <>
      <span>Select tip %</span>
      <ul className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[14px]'>
        {dateTip.map(el => {
          return <li key={el.id}>
            <button onClick={() => changer(el.id)} className={`${el.isselected ? 'bg-primary' : "bg-dark-green"} text-white text-2xl w-full  px-4 py-1.5 rounded-[5px]`}>{el.title}%</button>
          </li>
        })}
        <li>
          <input className=' text-2xl w-full  px-4 py-1.5 rounded-[5px] placeholder:text-input-text text-dark-green' placeholder='Custom' type="number" autoComplete='off' required />
        </li>
      </ul>
    </>
  )
}

export default SelectTip