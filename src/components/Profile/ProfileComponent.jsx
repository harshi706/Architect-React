import { Home, Logout } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';

const ProfileComponent = () => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  let navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("Login");
    window.open("http://localhost:8080/auth/logout", "_self");
    navigate("/home");
  };

  const handleUpdateProfile = () => {
    setEditProfile(true);
  };

 
  const checkUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/auth/user", {
        withCredentials: true,
      });

      const data = response.data;
      console.log("tahir",response.data);

      if (data.isAuthenticated) {
        setIsAuthenticated(true);
        setUser(data.user);
        // Set the initial values for editing
        setNewName(data.user.displayName);
        setNewEmail(data.user.email);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Set loading state to false after the request completes
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleCancelUpdate = () => {
    setEditProfile(false);
    setNewName(user.displayName);
    setNewEmail(user.email);
  };

  const handleUserUpdate = async ()=>{

    setEditProfile(false)
    const updatedProfile = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.image,
    };
    const accessToken = user.accessToken;
    console.log("token",accessToken);
    try {
      const headers =  {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`, // Include the user's access token
      }

      const response = await axios.put('http://localhost:8080/auth/user/update', updatedProfile, {headers});
  
      const data = await response.json();
  
      console.log(data);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  
  }

  // loader
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  console.log(user);

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div
        className="nav absolute z-10 left-[1%] top-[0.1%] text-[2.5rem]"
        onClick={handleHomeClick}>
        <div className="back">
          <Home />
        </div>
      </div>
      <div
        className="nav absolute z-10 right-[2.5%] top-[1%] "
        onClick={handleLogout}>
        <div className="back">
          <div className="bg-red-600 w-14 h-7 shadow-xl text-white text-center font-semibold cursor-pointer rounded-lg ">
            LogOut
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-white shadow-2xl justify-center flex flex-col items-center rounded-lg overflow-hidden py-4">
        <div className="flex justify-right items-right my-4">
        {editProfile ? (
          <div className="text-right">
            <button className="text-red-500" onClick={handleCancelUpdate}>Cancel</button>
          </div>
        ) : (
          <div className="text-right align-right">
            <button className="text-green text-sm" onClick={handleUpdateProfile}> <EditIcon/> Edit Profile</button>
          </div>
        )}
        </div>
        <img
          className="s h-48 w-48 rounded-full  object-cover"
          src={user.image}
          alt="Profile"
        />
        <div className="p-6 flex flex-col">
          <input
            className="text-xl font-semibold mb-4 text-center"
            type="text"
            value={newName}
            readOnly={!editProfile}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="email"
            className="text-gray-600 text-center"
            value={newEmail}
            readOnly={!editProfile}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        {
          editProfile &&  
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUserUpdate}>Update Profile</button>
        }
        
      </div>
    </div>
  );
};

export default ProfileComponent;
