import { axiosPrivateSpring } from "../api/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const useAxiosPrivateSpring = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const requestIntercept = axiosPrivateSpring.interceptors.request.use(
    (config:any) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error:any) => Promise.reject(error)
  );


  useEffect(() => {
    return () => {
        axiosPrivateSpring.interceptors.request.eject(requestIntercept);
    };
  }, [requestIntercept]);

  return axiosPrivateSpring;
};

export default useAxiosPrivateSpring;
