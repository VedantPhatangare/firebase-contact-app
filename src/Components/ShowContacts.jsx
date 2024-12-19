import React from 'react'

import { IoMdContact } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import EditContact from './EditContact';

function ShowContacts({contacts,handleDelete,handleEdit}) {

  return (
    <>
    {(contacts && contacts.length == 0) && 
                (<div className='flex gap-4 justify-center items-center h-full relative'>
                    <div className='max-h-16'>
                    <img src="/images/contactface.png" alt="" />
                    </div>
                    <p className='text-2xl font-semibold text-white'>No Contacts Found</p>
                </div>)
    }

    {
      contacts.map((contact)=>{
          return(
            <div key={contact.id} >
            <div className='flex items-center rounded-lg bg-yellow max-h-16 py-4 px-1'>
              <div className=' flex flex-grow gap-1.5'>
              <IoMdContact className='fill-orange text-5xl text-white'/>
                <div>
                  <h2>{contact.name}</h2>
                  <p>{contact.email}</p>
                </div>
              </div>
              <div className='flex gap-1'>
              <EditContact onClick={handleEdit} Contactid={contact.id} />
              <AiFillDelete onClick={()=>handleDelete(contact.id)} className='text-3xl fill-purple cursor-pointer'/>
              </div>
            </div>
          </div>
          )
      })
    }
    </>
  )
}

export default ShowContacts
