import React,{useEffect} from "react";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../assets/ayatriologo.png";
import axios from "axios";

const LoginComponent = () => {

  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/auth/user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, 
        }
      });

      const data = response.data;

      if (data.isAuthenticated) {
        navigate('/profile')
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      window.open("http://localhost:8080/auth/google/callback","_self");
    } catch (error) {
      console.error("Error initiating Google OAuth:", error);
    }
  };

  return (
    <div className="flex items-center transform translate-y-14 justify-center">
      <div className="bg-white">
        <div className='img__con111'>
          <img src={mainlogo} alt="logo" className="w-48 m-2" />
        </div>

        <div style={{ margin: "30px auto 10px", width: "100%" }}>
          <h3
            style={{
              color: "rgb(0, 0, 0)",
              fontSize: "30px",
              fontWeight: "600",
              letterSpacing: "-1.2px",
              fontFamily: "inherit",
              wordBreak: "break-word",
            }}
          >
            Wellcome to ayatrio family profile
          </h3>

        </div>
        <div className='Modal_subtitle' style={{ margin: "0px 0 38px", width: "60%" }} >
          Become a member of Ayatrio Family today. It's free to join? Get the details.
        </div>
        <button
          onClick={handleGoogleLogin}
          className="text-white bg-black text-lg rounded-full font-semibold py-3 px-4 flex items-center justify-center w-3/5">
          <Google className="mr-2" />
          Login with Google
        </button>

        <div className='gflbutton'>
          <div className='BzWZlf'>
            <div
              className='text-black border border-black bg-white text-lg my-2.5 rounded-full font-semibold py-3 px-4 flex items-center justify-center w-3/5'>
              Sign up with phone or email
            </div>
          </div>
        </div>
        <div className="tarms">
          <span className='mtp text-xs'>
            By continuing, you agree to Ayatrio's{" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              data-test-id='tos'
              href='/_/_/policy/terms-of-service/'
            >
              Terms of Service
            </a>
            ,{" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              data-test-id='privacy'
              href='/_/_/policy/privacy-policy/'
            >
              Privacy policy
            </a>{" "}
            including{" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              data-test-id='privacy'
            >
              {" "}
              Cookie Use{" "}
            </a>
            .{" "}
          </span>
        </div>
      </div>


    </div>
  );
};

export default LoginComponent;
