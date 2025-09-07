import React, { useEffect, useState } from 'react'

const result = [
  {
    id: 1,
    title: 'Tip Amount',
    amount: 0
  },
  {
    id: 2,
    title: 'Total',
    amount: 0
  },
]



function Result(setValues) {
 const resetFn = function(){
  setvalue({bill: 0, select: 0, people: 0, reset: true})
  setRes([{...res[0], amount: 0}, {...res[1], amount: 0}])
 }

  const obj = setValues

  let [value, setvalue] = obj.setValues
  const [res, setRes] = useState(result)
  const per = +value.bill * (+value.select / 100) / +value.people
  const toper = (+value.bill + +value.bill * (+value.select / 100)) / +value.people
  if (value.bill && value.people) {
    useEffect(() => {
      setRes([{ ...res[0], amount: per }, { ...res[1], amount: toper }])
    }, [value])
  }else{
     useEffect(() => {
      setRes(res)
    }, [value])
  }
  return (
    <ul className='w-full bg-dark-green rounded-[15px] flex flex-col gap-4 p-9 lg:p-10'>
      {res.map(el => {
        return (<li key={el.id} className='flex w-full justify-between mb-6'>
          <div className='flex flex-col'>
            <span className='text-white text-base'>{el.title}</span>
            <p className='text-mini-text text-[13px]'>/person</p>
          </div>
          <span className='text-[32px] lg:text-[48px] text-primary'>${el.amount.toFixed(2)}</span>
        </li>)
      })}
      <li className='mt-auto'> <button onClick={resetFn} className={`${res[0].amount == 0 ? 'bg-no-active' : 'bg-primary'} hover:bg-active text-[20px] text-dark-green rounded-[5px] w-full px-8 py-4`}>Reset</button></li>
    </ul>
  )
}

export default Result