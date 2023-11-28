import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal({children}){
  const navigate = useNavigate();
    
  return <>
      <div className={styles.backdrop} onClick={() => {navigate('/')}}/>
      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
  </>
}

export default Modal;