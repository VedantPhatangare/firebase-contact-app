import { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
import './App.css'
import AddContact from './Components/AddContact'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import ShowContacts from './Components/ShowContacts'
import {addDoc, collection, deleteDoc,doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {db} from './config/firebase'
function App() {
  const [contacts, setcontacts] = useState([])
  const getContacts = ()=>{
      try {
        const contactsRef = collection(db,"contacts")
        // const contactsSnapshot = await getDocs(contactsRef)
        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc)=>{return {
            id:doc.id,
            ...doc.data()}
          })
          setcontacts(contactList)
        })
      } catch (error) {
        console.log(error);
      }
    }

  const handleAdd =async(obj)=>{
      await addDoc(collection(db,"contacts"),obj)
      toast.success("added")
      // setformData({name:"",email:""})
  }
  const handleDelete= async(id)=>{
      await deleteDoc(doc(collection(db,"contacts"),id))
      toast("deleted")
  }

  const handleEdit=async(obj,id)=>{
    await updateDoc(doc(collection(db,"contacts"), id),obj)
  }
  
  useEffect(() => {
    getContacts()
  }, [])

  const searchContact=(e)=>{
    const value = e.target.value
    const ref = collection(db,'contacts')
    onSnapshot(ref,(snapshot)=>{
       const contactList = snapshot.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data()
        }
      })
      const filteredContacts = contactList.filter((contact)=>{
         return contact.name.toLowerCase().includes(value.toLowerCase());
      })
      setcontacts(filteredContacts)
    })
  }


  return (
    <div className=' relative max-w-[370px] m-2 mx-auto flex flex-col gap-4 h-[97vh]'>
      <Navbar/>
      <div className=' flex gap-2 items-center'>
      <SearchBar searchContact={searchContact}/>
      <AddContact onClick={handleAdd}/>
      </div>
      <ShowContacts contacts={contacts} handleDelete={handleDelete} handleEdit={handleEdit}/>
      <ToastContainer 
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
      />
    </div>
  )
}

export default App
