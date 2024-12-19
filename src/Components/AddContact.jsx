import React from 'react'

import { IoMdAddCircle } from "react-icons/io";
import Form from './Form';
import { useContact } from '../Context/ContactContext';
function AddContact({onClick}) {
  const {showForm,setshowForm}= useContact()
  return (
    <div >
        <IoMdAddCircle className='cursor-pointer text-white text-5xl' onClick={()=>{setshowForm((prev)=>~prev)}}/>
        {
          showForm? (<Form onClick={onClick} Client="add"/>) : undefined
        }
    </div>
  )
}

export default AddContact
