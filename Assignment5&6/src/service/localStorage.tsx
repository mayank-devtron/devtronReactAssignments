export type User = {
    username:string,
    mobile:number|string,
    email:string,
    address:string,
    dob:string,
    gender:string,
    password:string,
    cpassword:string
}


export const updateUsersToStorage = (p: User[]) => {
    localStorage.setItem("users", JSON.stringify(p));
  };
  
  export const getUsersFromStorage = (): User[] => {
    let product = localStorage.getItem("users");
    return product ? JSON.parse(product) : [];
  };