import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function UserTable(){

  let {users} = useUserContext();

    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Mobile number</th>
            <th>Email id</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Action</th>
            {/* <th></th>
            <th></th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=>{
            return(
              <tr>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td><Link to={`/users/edit/${user.mobile}`} ><i className="fa fa-edit" aria-hidden="true"></i></Link></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
}

export default UserTable;