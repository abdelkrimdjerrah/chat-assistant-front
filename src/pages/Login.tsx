import { Eye, EyeClosed} from "phosphor-react";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoginData,
  setLoginData,
  setAccessToken,
  setUserData,
} from "../redux/userSlice";
import { axiosInstanceNode } from "../api/axios";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let { email, password } = useSelector(selectLoginData);


 
  const [loading, setLoading] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);

  // handle inputs
  const setValue = useCallback((type: string, data: any) => {
    dispatch(setLoginData({ type, data }));
  }, []);

  const [error, setError] = useState("");

  // login
  const handleLogin = async () => {
    try {
      // // reset errors
      // dispatch(
      //   setLoginData({
      //     type: 'error',
      //     data: {message: '', type: ''},
      //   }),
      // );

      setLoading(true);
      setError('')

      let userData = { email, password };
      if(!email){
        email = 'test@gmail.com'
      }
      if(!password){
        password = 'test'
      }

      const { data } = await axiosInstanceNode.post(`/api/auth/login`,userData,{
        headers: {
          withCredentials: "true",
          credentials: 'include'
        },
        withCredentials: true,
      });

    
      if (!data?.success) {
        data?.message ? setError(data?.message) : setError('error')
        return;
      }

      dispatch(
        setLoginData({
          type: "reset",
        })
      );
      dispatch(
        setAccessToken({
          type: "token",
          data: data?.accessToken,
        })
      );

      dispatch(
        setUserData({
          type: "user",
          data: data?.userData,
        })
      );

      navigate("/");
    } catch (error) {
      console.log("error");
      setError('error')
      // handleError(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

    // clean up
    useEffect(() => {
      return () => {
        dispatch(
          setLoginData({
            type: "reset",
          })
        );
      };
    }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white h-fit px-5 py-8 rounded-2xl w-1/3  min-w-[400px]">
        <div className="flex flex-col gap-2">

        <div className="w-full flex justify-center">
          <p className="text-[70px] font-light">Login</p>
        </div>
        
          {error.length ? (
            <div className="text-red-500 flex justify-center font-medium">
              <p>{error}</p>
            </div>
          )  : null
        }
          <div className="flex flex-col gap-2 mt-3 mb-3">
            <Input
              text="Email address"
              type="email"
              widthFull
              onChange={(v) => setValue("email", v)}
              value={email}

            />
            <div className="relative">
              <Input
                text="Password"
                type = {revealPassword ? 'text' : 'password'}
                widthFull
                onChange={(v) => setValue("password", v)}
                value={password}
              />
              <div className="absolute right-4 top-4 text-zinc-400 cursor-pointer"> 
                {
                  revealPassword ?
                  <EyeClosed size={20} onClick={() => setRevealPassword(false)} />
                  : <Eye size={20} onClick={() => setRevealPassword(true)} />
                }

              </div>
            </div>
          </div>

          {
            loading ?
              <Button widthFull loading onClick={handleLogin}>
                Login
              </Button>
              : <Button widthFull onClick={handleLogin}>
                Login
              </Button>

          }

        </div>
      </div>
    </div>
  );
}

export default Login;
