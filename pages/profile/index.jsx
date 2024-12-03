import React from 'react'
import styles from "./profile.module.css"
import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { bArrow, profile } from '../../src/assets'
import { Header, Navbar, Footer } from '../../components'
import { updateUser, getUser } from '../../services/auth'

export default function Profile() {
  const {userName} = useContext(AppContext);
  const navigate = useNavigate();

  const [isEditable, setIsEditable] = useState(false);
  const userId = localStorage.getItem("userId")
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    gender: "",
    country: ""
  });

  useEffect(() => {
    
    const fetchUserData = async () => {
      const user = await getUser(userId);  
      setUserData(user);
    };
    fetchUserData();
  }, [userId]);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleSaveClick = async () => {
    const { name, email, gender, country } = userData;
    
    try {
      // Update user details using the API
      await updateUser(userData, userId);
      setIsEditable(false);  // Disable editing after saving
      alert("User updated successfully");
    } catch (error) {
      console.error(error);
      alert("Error updating user data");
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        <Navbar />
        <p className={styles.mainheading}> <img onClick={() =>navigate(-1)} src={bArrow} alt="" /> <span>My Profile</span></p>
        <div className={styles.profileContainer}>
          <div className={styles.head}>
            <img src={profile} alt="" />
            <p>{userName}</p>
            <button  onClick={isEditable ? handleSaveClick : handleEditClick} className={styles.edit}>{isEditable ? "Save" : "Edit"}</button>
          </div>
            <div className={styles.formContainer}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                disabled={!isEditable}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                disabled={!isEditable}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                disabled={!isEditable}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={userData.country}
                onChange={handleChange}
                disabled={!isEditable}
                className={styles.input}
              />
            </div>
          </div>
            </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
