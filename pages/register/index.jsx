import React from 'react'
import { useState } from 'react';
import styles from "./register.module.css";
import { logo } from '../../src/assets';
import { Form, Footer } from '../../components';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { register } from '../../services/auth';

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });


  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const formFields = [
    {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "eg. John A",
        value: formData.name,
        onChange: handleChange
    },
    {
      name: "number",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter your 10 digit mobile number",
      value: formData.number,
      onChange: handleChange
    },
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
    if (!formData.name.trim()) {
      toast.error("Enter a valid Name");
      return false;
    }
    if (formData.number.trim().length !== 10) {
      toast.error("Enter valid 10 digit number");
      return false;
    }
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
      const res = await register(formData);
      if(res.status === 201){
        alert("Registered Successfully");
        navigate("/login");
      }
      else{
        alert("Something went wrong");
      }
    }



  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.registerContainer}>
        <div className={styles.formContainer}>
        <img src={logo} alt=""  className={styles.logo}/>
          <div className={styles.box}>
            <h2>Welcome  <span className={styles.wave}>👋</span></h2>
            <p>Today is a new day. It's your day. You shape it. <br /> Sign up to start ordering</p>
            <Form   formFields={formFields} onSubmit={onSubmit} buttonLabel="Continue" />
            <ToastContainer />
          </div>
          <p className={styles.para}>Already have an account ?
            <button  className={styles.loginButton} onClick={()=> navigate("/login")} >Sign in</button> </p>
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
