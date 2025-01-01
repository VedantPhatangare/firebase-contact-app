import React from 'react'
import { useContact } from '../Context/ContactContext'
function Form({onClick,Client,Contactid=undefined}) {
    const {formData,setformData,setHI,setshowForm}= useContact()
    
    const handleInputChange = (e)=>{
      const {name,value} = e.target;
      setformData((prev)=>({...prev,[name]:value}))
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      Contactid? onClick(formData,Contactid): onClick(formData);;
      Contactid? setHI(false): setshowForm(false)
      // setformData({name:"",email:""})
    }

  return (
    <div className=' bg-white absolute z-10 top-36 rounded-md left-4 right-4 bottom-80 text-black text-xl '>
            <form className="h-full w-full py-3.5 px-3 flex flex-col gap-4" onSubmit={(e)=>handleSubmit(e)}>
                <div className='flex flex-col gap-2 '>
                <label htmlFor="name">Name:</label>
                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className=' border outline-none h-10 px-2'/>
                </div>
                <div className='flex flex-col gap-2 '>
                <label htmlFor="email">email:</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className='border outline-none h-10 px-2'/>
                </div>
                <button type='submit' className={`${Client=="add"? `w-[39%]`: `w-[49%]`} cursor-pointer bg-dark-yellow  text-[16px] place-self-end py-1.5 px-4 rounded-md`}>
                  {Client=="add"? "Add Contact": "Update Contact"}</button>
                </form>
          </div>
  )
}

export default Form
