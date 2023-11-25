import axios from "../../api/axios"
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../icons/logo";

const Navbar = () => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      navigate("/");
      const { data } = await axios.post(`/api/auth/logout`);
    } catch (err) {}
  };


  return (
    <div className="w-full flex justify-between px-10 py-6">
      <div className="flex gap-2">
        <div className="w-[35px]">
          <Logo />
        </div>
        <p className="text-2xl font-semibold">Summarizer</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar
