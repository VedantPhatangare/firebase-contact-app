import React, { useState } from 'react'
import ContactContext from './ContactContext'

function ContactProvider({children}) {

    const [showForm, setshowForm] = useState(false);
    const [hi, setHI] = useState(false);
    const [formData, setformData] = useState({
      name:"",
      email:""
    })
  return (
    <ContactContext.Provider value={{showForm,setshowForm,formData,setformData,hi,setHI}}>
        {children}
    </ContactContext.Provider>
  )
}
export default ContactProvider
