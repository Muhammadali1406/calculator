import React, { useEffect, useState } from 'react'

function Input({ label, icon, Values }) {
  const [state, Setstate] = useState(false)
  let [stat, SetStat] = Values.setValues
  const chek = (e) => {

    if (e.target.value === '0') {
      Setstate(true)
    } else {
      Setstate(false)
      if (label == "Bill") {
        stat = { ...stat, bill: e.target.value }
        SetStat(stat)
      }
      else {
        stat = { ...stat, people: e.target.value }
        SetStat(stat)
      }
    }



  }
  return (
    <div className=' flex flex-col gap-1.5'>
      <div className='w-full flex justify-between'>
        <span className='text-dark-green mb-1'>{label}</span>
        {state && <span className='text-error-cl'>Can't be zero</span>}
      </div>
      <input onChange={chek} className={`bg-input-bg bg-[url("./${icon}.svg")] flex text-rigth text-dark-green w-full rounded-[5px] px-4 py-1.5 focus:outline-2 outline-primary`} type="number" placeholder='0' />
    </div>
  )
}

export default Input