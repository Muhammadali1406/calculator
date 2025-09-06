import React from 'react'
import Input from './Input'
import SelectTip from './SelectTip'

function Form() {
    return (
        <div className='flex flex-col gap-8 lg:gap-10'>
            <Input label="Bill" icon="dollar" />
            <SelectTip />
            <Input label="Number Of People" icon='user' />
        </div>
    )
}

export default Form