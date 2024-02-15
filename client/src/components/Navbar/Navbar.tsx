import React from 'react'
import Button from '../Buttons/Button'
export const Navbar = () => {
  return (
    <nav>
<div className='bg-red-500 p-3'>

</div>
        <div className='flex  justify-end gap-4 mr-4 mt-4'>
            <Button link='/' name='Home' color='red' />
            <Button link='/' name='Home' color='grey' />
        </div>
    </nav>
  )
}
