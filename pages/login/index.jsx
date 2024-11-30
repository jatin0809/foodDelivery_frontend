import React from 'react'
import { useState } from 'react';
import styles from "./login.module.css";
import { logo } from '../../src/assets';
import { Form, Footer } from '../../components';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { login} from '../../services/auth';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
 
  };

  const formFields = [
    {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Example@email.com",
        value: formData.email,
        onChange: handleChange
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "At least 8 characters",
        value: formData.password,
        onChange: handleChange
    }
  ]
  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error("Provide a valid Email");
      return false;
    }
    if (!formData.password.trim()) {
      toast.error("Provide a valid Password");
      return false;
    }
    return true;
  };

  const onSubmit = async (e) =>{
    e.preventDefault();
    console.log(formData);  

    if(validateForm()){
      try {
        const res = await login(formData);
        console.log(res)
        if(res.status === 200){
          alert("logged in Successfully");
          const token = res.data.token;
          const userId = res.data.userId;
          localStorage.setItem("token", token)
          localStorage.setItem("userId", userId)
          navigate("/home");
        }
      }
       catch (error) {
        if(error.status === 401){
          alert("Wrong Email or Password")
        }
        else{
          alert("Something went wrong, try again")
        }
      }
    }

  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.registerContainer}>
        <div className={styles.formContainer}>
        <img src={logo} alt=""  className={styles.logo}/>
          <div className={styles.box}>
            <h2>Welcome Back <span className={styles.wave}>👋</span></h2>
            <p>Today is a new day. It's your day. You shape it. <br /> Sign up to start ordering</p>
            <Form   formFields={formFields} onSubmit={onSubmit} buttonLabel="Sign In" />
            <ToastContainer />
          </div>
          <p className={styles.para}>Already have an account ?
            <button  className={styles.loginButton} onClick={()=> navigate("/register")} >Sign up</button> </p>
        </div>

        <div className={styles.right}>
          <img src="https://res.cloudinary.com/dlu2nu7py/image/upload/v1732433757/Auth-banner_ixfbll.png" alt="" />
          </div>
      </div>
      <div className={styles.footer}>
      <Footer />
      </div>
    </div>
  )
}
