import './App.css';


import Form from 'react-bootstrap/Form';
import { Component } from 'react';
import React from 'react';
import Swal from 'sweetalert2';

class Contact extends Component {
  
    render(){
        const handleAlert = () =>{
            Swal.fire({
                title: "Thank You!",
                text: "You clicked the button!",
                timerProgressBar: '2',
              });
           
           }
return(
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Your email:</Form.Label>
      <Form.Control className='formsOne' type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Your question:</Form.Label>
      <Form.Control className='forms' as="textarea" rows={3} placeholder='Write me...' />
    </Form.Group>
    <div className='mb-3'>
    <button  type='submit' onClick={handleAlert}>Submit</button>
  
    </div>
 </Form>
  
    )}
}

export default Contact;