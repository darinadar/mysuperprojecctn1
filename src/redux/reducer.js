import { contacts } from '../../src/components/states';
import {ADD_CONTACT,UPDATE_CONTACT,DELETE_CONTACT} from './actions';

export let reducer = (state = contacts,action)=>{
    let newContacts;
    switch (action.type){
        case ADD_CONTACT:
            newContacts = [...state]
            newContacts.push(action.payload)
            return newContacts
            case DELETE_CONTACT:
                 newContacts = [...state]
                newContacts= newContacts.filter(contact=>contact.id != action.payload)
               return newContacts
            case UPDATE_CONTACT:
                newContacts = [...state]
                let index = newContacts.indexOf(action.payload)
                if(index != -1){
                    newContacts[index] = {
                        ...newContacts[index],
                        name:action.payload
                    }
                return newContacts
                }
       
    }
    return state; 
}