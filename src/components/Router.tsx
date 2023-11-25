import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/userSlice";
import Login from "../pages/Login";


function Router() {
  const user = useSelector(selectUserData);

  console.log(user)
  return (
    <Routes>
     
     {user ? (
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
      
    </Routes>
  );
}

export default Router;
