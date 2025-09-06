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

function SelectTip(Values) {
  let [state, Setstate] = useState(dateTip)
  // let [stat, SetStat] = Values.setValues

  const obj = Values

  let [stat, Setstat] = obj.Values.setValues

  const changer = (id) => {
    state = state.map(el => {
      if (el.id == id) {
        stat = { ...stat, select: el.title }
        Setstat(stat)
      }
      return { ...el, isselected: el.id == id ? true : false }
    })
    Setstate(state)


  }

  const Getper = (e) => {

    stat = { ...stat, select: e.target.value }
    Setstat(stat)

    state = state.map(el => {
      return { ...el, isselected: false }
    })
    Setstate(state)

  }

  return (
    <>
      <span>Select tip %</span>
      <ul className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[14px]'>
        {state.map(el => {
          return <li key={el.id}>
            <button onClick={() => changer(el.id)} className={`${el.isselected ? 'bg-primary' : "bg-dark-green"} text-white text-2xl w-full  px-4 py-1.5 rounded-[5px]`}>{el.title}%</button>
          </li>
        })}
        <li>
          <input onChange={Getper} className=' text-2xl w-full  px-4 py-1.5 rounded-[5px] placeholder:text-input-text text-dark-green' placeholder='Custom' type="number" autoComplete='off' required />
        </li>
      </ul>
    </>
  )
}

export default SelectTip