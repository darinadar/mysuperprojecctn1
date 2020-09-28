import React from 'react';
import './App.css';
import ContactInput from './components/ContactInput';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <ContactInput/>
      <ContactList/>
    </div>
  );
}

export default App;
