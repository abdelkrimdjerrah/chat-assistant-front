import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

function Layout() {
  
  return (
    <div>
      <div className=" flex justify-center">
        <div className="fixed top-0 right-0 left-0 z-20">
          <div className="sticky top-0 right-0 left-0 z-20">
            <Navbar />
          </div>
        </div>

        <div className="my-20 w-[95%] 2md:w-[90%] 2lg:w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
