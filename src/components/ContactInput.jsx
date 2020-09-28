import React, { useState } from 'react';
import {addContact} from '../redux/actions';
import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';

function ContactInput() {
    let [name,setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
          <div className= "row m-2">
              <input 
              onChange = {(e)=>setName(e.target.value)}
              value={name}
              type="text"
              className = " col form-control"/>
              <button 
              onClick = {() =>{
                  dispatch(addContact(
                      {
                          id:uuid,
                          name:name
                      }
                  ))
              setName('')
             }}
            className = "btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default ContactInput
