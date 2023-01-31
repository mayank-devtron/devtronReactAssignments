import { ChangeEvent, FormEvent, useState } from 'react';
import { Alert, Dropdown, DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useUserContext } from '../context/UserContext';
import { User } from '../service/localStorage';

function UserForm(){


  let {addUser,user,inputOnChange,err,success} = useUserContext();


    return(

        <Form onSubmit={addUser}  >
          {(err!=''||success!='')&&<Alert key={err!=''?'danger':'success'} variant={err!=''?'danger':'success'}>
          {err} {success}
        </Alert>}
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name={'username'} onChange={inputOnChange} value={user.username} placeholder="Enter your username" size={'sm'}  />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" min={1000000000} max={9999999999} onChange={inputOnChange} value={user.mobile} name={'mobile'} placeholder="Enter your mobile number" size={'sm'}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={inputOnChange} size={'sm'} value={user.email} name={'email'} />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Your Address" onChange={inputOnChange} size={'sm'} value={user.address} name={"address"}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Enter DOB"  onChange={inputOnChange} size={'sm'} value={user.dob} name={'dob'}  />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gender</Form.Label>
          <Form.Select size="sm" onChange={inputOnChange} name={'gender'} value={user.gender} >
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
        </Form.Select>       
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" onChange={inputOnChange} value={user.password} name={'password'}  size={'sm'} />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control value={user.cpassword} name="cpassword" onChange={inputOnChange} type="password" placeholder="Confirm Password" size={'sm'} />
        </Form.Group>
       
        <Button variant="primary" type="submit" size={'sm'} >
          Submit
        </Button>
      </Form>
    )
}

export default UserForm;