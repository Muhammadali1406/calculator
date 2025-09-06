import React from 'react'

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

function Result() {

  return (
    <ul className='w-full bg-dark-green rounded-[15px] flex flex-col gap-4 p-9 lg:p-10'>
      {result.map(el => {
        return (<li key={el.id} className='flex w-full justify-between mb-6'>
          <div className='flex flex-col'>
            <span className='text-white text-base'>{el.title}</span>
            <p className='text-mini-text text-[13px]'>/person</p>
          </div>
          <span className='text-[32px] lg:text-[48px] text-primary'>${el.amount}.00</span>
        </li>)
      })}
      <li className='mt-auto'> <button className={`${result[0].amount == 0 ? 'bg-no-active' : 'bg-primary'} hover:bg-active text-[20px] text-dark-green rounded-[5px] w-full px-8 py-4`}>Reset</button></li>
    </ul>
  )
}

export default Result