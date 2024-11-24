import React from 'react'
import styles from "./form.module.css";


function FormFeild({name, type, placeholder, value, onChange, label}){
  return(
      <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor={name}>{label}</label>
          <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} className={styles.inputFeild}/>
      </div>
  );
}

export default function Form({formFields, onSubmit, buttonLabel}) {
  return (
    <form  onSubmit={onSubmit}>
    {
        formFields.map((feild, index) =>(
            <div key={feild.name} className={styles.formFeild}>
                <FormFeild value={feild.value} onChange={feild.onChange} key={index} name={feild.name} placeholder={feild.placeholder}
                    type={feild.type} label={feild.label}
                />
            </div>
        ))
    }
    <button type="submit" className={styles.submitButton}>{buttonLabel}</button>
</form>
  )
}
