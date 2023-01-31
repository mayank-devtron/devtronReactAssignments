import { Navigate, Route, Router, Routes } from "react-router-dom";
import EditForm from "./components/EditForm";
import Navbar1 from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path="/" element={<Navigate to={'/users'} />} />
        <Route path="/users" element={<UserTable/>} />
        <Route path="/users/add" element={<UserForm/>} />
        <Route path="/users/edit/:mobile" element={<EditForm/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
