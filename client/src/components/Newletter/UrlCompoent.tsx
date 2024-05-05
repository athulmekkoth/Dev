import React from 'react'

export const UrlCompoent = () => {
  const [value, setvalue] = React.useState('http://localhost:5173/sample')
  const[check, setcheck]=React.useState(false)
  const copyfunc=async()=>{
    await navigator.clipboard.writeText(value);
    setcheck(true)
    alert('Text copied');
  }  
  return (
    <div>

      <div className='w-100 bg-gray-100 p-4  mt-5 flex flex-col justify-center items-center gap-3'>
     <h1>   The above page is avaialble in the link below</h1>
     <div className='flex flex-row bg-gray-200 gap-3 p-4 rounded-xl'>
        <div className=' '>
     <h1 >{value} </h1>   
        </div>
        <div onClick={copyfunc} className='text-gray-600'>{check ? "colpied":"tap to copy"}</div>
     </div>
      </div>




    </div>
  )
}
