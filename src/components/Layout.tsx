import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

function Layout() {
  
  return (
    <div className="h-[100dvh]">
      <div className=" flex justify-center">
        <div className="fixed top-0 right-0 left-0 z-20">
          <div className="sticky top-0 right-0 left-0 z-20">
            <Navbar />
          </div>
        </div>

        <div className="h-[100dvh] w-[100%] md:w-[98%] ">
            <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
