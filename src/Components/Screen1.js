import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './Screen1.module.css'
const Screen1 = () => {
     const navigate =useNavigate();
     const [value,setValue] = useState("");
     const handleChange=(e)=>{
        setValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        // localStorage.setItem("token",true);
        if(value.trim()!== ""){
        navigate(`screen2/${value}`);
        }
    }
 
  return (
    <>
      <div className={styles["image-container"]}>
      <img src="/assets/images/logo.svg" alt="" />
      <div className={styles["text-bold"]}>Houseware Frontend Engineering Octernship</div>
      </div>
    <div className={styles["input-wrapper"]}>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the word" value={value} onChange={handleChange}/>
        <button className={styles["btn"]}>Submit</button>
        </form>
    </div>
    </>

  )
}

export default Screen1