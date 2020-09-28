import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact, updateContact } from '../redux/actions';


function ContactItem({contact}) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(contact.name)
    let dispatch= useDispatch();
    return (
        <div>
          <div className = "row mx-2 align-items-center">
                 <div>#{contact.id.length > 1?contact.id[4] : contact.id}</div>
              <div className = "col">
                  {editable ? <input type = "text" className = "form-control" 
                  value = {name} 
                  onChange={
                      (e)=>setName(e.target.value)
                  }
                  /> : <h4>{contact.name}</h4>}
                
              </div>
              <button  onClick = {() =>{
                  dispatch(updateContact(
                      {
                          ...contact,
                          name:name
                      }
                  ))
                  if(editable){
                   setName(contact.name)   
                }
                setEditable(!editable);
                 
              }}
              className= "btn btn-primary m-2">{editable?"Update":"Edit"}</button>

              <button  onClick = {() =>dispatch(deleteContact(contact.id))}
              className = "brn btn-danger m-2">Delete</button>
        </div> 
        </div>
    )
}

export default ContactItem
