import styles from "./Modal.module.css";

function Modal({children, onHideModal}){
    return <>
        <div className={styles.backdrop} onClick={()=>{onHideModal()}}/>
        <dialog open={true} className={styles.modal}>
            {children}
        </dialog>
    </>
}

export default Modal;