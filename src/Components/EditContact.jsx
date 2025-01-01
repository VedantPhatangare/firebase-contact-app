import React, { useState } from 'react'
import { TbUserEdit } from "react-icons/tb";
import { useContact } from '../Context/ContactContext';
import {collection,doc,getDoc} from 'firebase/firestore'
import { db } from '../config/firebase'
import Form from './Form';

function EditContact({onClick,Contactid}) {
    const {setformData,setHI,hi}= useContact()
    
    const fetchContact = async()=>{
           const temp=  await getDoc(doc(collection(db,"contacts"),Contactid))
            const data = temp.data();
            setformData({...data})
            setHI(true)
    }

  return (
    <div>
        <TbUserEdit className='text-3xl cursor-pointer' onClick={()=>{fetchContact()}}/>
        {

          hi? <Form onClick={onClick} Client="edit" Contactid={Contactid}/> : undefined
          
        }    
        {console.log("contactid from editContacts:",Contactid)}
    </div>
  )
}

export default EditContact