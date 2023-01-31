import { useEffect } from "react";
import { Form ,Alert, Button} from "react-bootstrap";
import { matchPath, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function EditForm() {

    let {setEditData,inputOnChange,updateUser,user,err,success} = useUserContext();

    let {mobile} = useParams();

    useEffect(()=>{
       if(setEditData) setEditData(mobile?mobile:'');
    },[]);

    return(
        <Form onSubmit={updateUser} >
        {(err!=''||success!='')&&<Alert key={err!=''?'danger':'success'} variant={err!=''?'danger':'success'}>
        {err} {success}
      </Alert>}
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name={'username'} onChange={inputOnChange} value={user.username} placeholder="Enter your username" size={'sm'}  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control disabled type="number" min={1000000000} max={9999999999} onChange={inputOnChange} value={user.mobile} name={'mobile'} placeholder="Enter your mobile number" size={'sm'}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Id</Form.Label>
        <Form.Control disabled type="email" placeholder="Enter email" onChange={inputOnChange} size={'sm'} value={user.email} name={'email'} />
        
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

     
      <Button variant="primary" type="submit" size={'sm'} >
        Submit
      </Button>
    </Form>
    )
}

export default EditForm;