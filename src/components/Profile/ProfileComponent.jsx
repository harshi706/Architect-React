import Home from '../../assets/icon/home.svg'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfileComponent = () => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem("token", token)
    }
  }, []);

  let navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  const handleUpdateProfile = () => {
    setEditProfile(true);
  };


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
      console.log("user data", response.data);

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

  const token = localStorage.getItem('token');
  const handleUserUpdate = async () => {

    setEditProfile(false);

    const updatedProfile = {
      displayName: newName,
      email: newEmail,
      photoURL: user.image,
    };

    try {
      const response = await axios.put('http://localhost:8080/auth/update-profile', updatedProfile, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      });

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  const handleAccountDelete = async ()=>{
    try {
      const response = await axios.delete('http://localhost:8080/auth/delete-profile', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      });

      console.log(response);
      const data = response.data;
      navigate('/home')
    } catch (error) {
      console.error('Error deleting user profile:', error);
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
          {/* <Home /> */}
          <img src={Home} className="w-6 h-6" alt="" />
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
        <div className="flex justify-around	items-right my-4 w-full ">
          <div className="flex">
            {editProfile ? (
              <div className="text-right">
                <button className="text-red-500" onClick={handleCancelUpdate}>Cancel</button>
              </div>
            ) : (
              <div className="text-right align-right">
                <button className="text-green text-sm" onClick={handleUpdateProfile}> <EditIcon /> Edit Profile</button>
              </div>
            )}
          </div>
          <div className="flex justify-between hover:cursor-pointer">
              <DeleteIcon onClick={handleAccountDelete} />
          </div>
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
