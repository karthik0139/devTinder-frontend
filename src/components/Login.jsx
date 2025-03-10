import { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from "../appStore/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../Utills/Constracts";


export const Login = () => {
  const [emailId , setEmailId] = useState("karthik@gmail.com");
  const [password , setPassword] = useState("Ammu@110223@");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async() => {
     try{
      const response=  await axios.post(BaseUrl + 'login' , {email:emailId , password}, {withCredentials:true});
      dispatch(addUser(response.data?.data))
      navigate('/')
     }catch(err){
      console.log(err.message)
     }
  }
  return (
    <div className="flex justify-center my-4" style={{ marginTop: "30px" }}>
      <div className="card   shadow-xl bg-base-300" style={{ width: "400px" }}>
        <div className="card-body">
          <h2 className="card-title justify-center">Login page!</h2>
          <div>
            <div className="m-2">
              <legend className="fieldset-legend"> EmailId</legend>
              <input type="text" className="input" placeholder="" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
            </div>

            <div className="m-2">
              <legend className="fieldset-legend">Password</legend>
              <input type="text" className="input" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" style={{ marginTop: "30px" }} onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
