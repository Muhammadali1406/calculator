import React from 'react'
import Input from './Input'
import SelectTip from './SelectTip'

function Form(setValues) {
    
    return (
        <div className='flex flex-col gap-8 lg:gap-10'>
            <Input label="Bill" icon="dollar" Values={setValues}/>
            <SelectTip Values={setValues}/>
            <Input label="Number Of People" icon='user' Values={setValues}/>
        </div>
    )
}

export default Form