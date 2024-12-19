import { createContext, useContext } from "react";

const ContactContext = createContext()
export default ContactContext
export const useContact = ()=>{
    return useContext(ContactContext)
}

