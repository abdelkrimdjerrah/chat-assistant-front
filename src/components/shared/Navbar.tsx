import { axiosInstanceNode } from "../../api/axios";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../icons/logo";
import { ArrowRight } from "phosphor-react";


const Navbar = () => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      navigate("/");
      const { data } = await axiosInstanceNode.post(`/api/auth/logout`);
    } catch (err) {}
  };


  return (
    <div className="w-full flex items-center justify-between px-2 md:px-10  bg-white">
      <div className="flex gap-2">
        <div className="mt-2 scale-75 md:scale-1">
          <Logo />
        </div>
      </div>
      <div className="flex gap-2 items-center" onClick={handleLogout}>
        <div className="cursor-pointer leading-none">Logout</div>
        <div className="mt-[1px]">
          <ArrowRight size={20} weight="regular" />
        </div>
      </div>

    </div>
  )
}

export default Navbar
