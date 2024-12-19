import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useContact } from '../Context/ContactContext';

function SearchBar({searchContact}) {
  const {setshowForm,setHI} = useContact()
  return (
    <div className='flex flex-grow items-center border border-white rounded-md px-2.5' onClick={()=>{setshowForm(false); setHI(false)}}>
        <IoIosSearch className='text-white text-2xl'/>
        <input type="text" className='bg-transparent  h-10 flex-grow px-2.5 text-white outline-none' placeholder="Search Contact" onChange={(e)=>{searchContact(e)} }/>
    </div>
  )
}

export default SearchBar
