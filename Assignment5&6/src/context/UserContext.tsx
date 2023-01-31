import { ChangeEvent, createContext, FormEvent, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getUsersFromStorage, updateUsersToStorage, User } from "../service/localStorage";


let user:User={
    username:"",
    mobile:"",
    email:"",
    address:"",
    dob:"",
    gender:"male",
    password:"",
    cpassword:""
}
type userType = {
    users:User[],
    addUser?(event:FormEvent) :void;
    inputOnChange?(
        event: ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ): void;
    updateUser?(event:FormEvent):void;
    setEditData?(mobile:string|number):void;
    user:User;
    err:string,
    success:string
}


let UserContext = createContext<userType>({
   users:[],
   user:user,
   err:'',
   success:''
});

type props = {
    children:JSX.Element;
}

export const UserContextProvider = (props:props) => {
    let navigate = useNavigate();
    let {children} = props;
    let [users,setUsers] = useState<User[]>(
        getUsersFromStorage()
    );
    useEffect(()=>{
        updateUsersToStorage(users);
    },[users])
    let [newUser,setNewUser] = useState<User>({...user});
    let [err,setErr] = useState('');
    let [succes,setSuccess] = useState('');
    let addUser = (event:FormEvent): void => {
        event.preventDefault();
        if(newUser.password!=newUser.cpassword){
          setSuccess('');
           setErr("Password mismatched! please try again.")
           return;
        }
        let index = users.find(u=>{
          return (u.mobile==user.mobile||u.email==newUser.email);
        });
        if(index!=undefined){
          setErr('User with this email or mobile already exist.');
          return;
        }
        setUsers([...users,newUser]);
        setSuccess("User Added successfully");
        setNewUser({...user})

    }
    let updateUser = (event:FormEvent): void=>{
        event.preventDefault();
        let index = users.findIndex(u=>u.mobile==newUser.mobile);
        console.log(index);
        users.splice(index,1,{...newUser});
        setUsers([...users]);
        setNewUser({...user})

        navigate('/');
        
    }
    let inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setErr('');
        setSuccess('');
        let { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };
    let setEditData = (id: string|number): void => {
        let result = users.find((user) => id === user.mobile);
        if (result === undefined) {
          //   navigate("/");
          window.location.replace("/");
        } else {
          setNewUser({ ...result });
        }
    };
    let value: userType = {
        users,
        addUser,
        inputOnChange,
        user:newUser,
        err:err,
        success:succes,
        setEditData,
        updateUser
    };
    return(
        <UserContext.Provider value={value} >{children}</UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}