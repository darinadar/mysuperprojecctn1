import React from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
   


function ContactList() {
    let contacts = useSelector(state => state)
    return (
        <div className = "my-3">
            {contacts.map(contact=>{
                return <ContactItem key = {contact.id} contact = {contact}/>
            })}
        </div>
    )
}

export default ContactList
