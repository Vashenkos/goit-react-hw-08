import { FaPhone, FaUser, FaRegTrashCan } from "react-icons/fa6";  
import { deleteContact } from "../../redux/contactsOps.js";  
import { useDispatch } from "react-redux";  
import s from "./Contact.module.css";


function Contact({ contact }) { 
  const dispatch = useDispatch();

  const confirmDelete = () => {
    dispatch(deleteContact(contact.id));

  };

  return (  
    <li className={s.list}>  
      <div className={s.contdiv}>  
        <p>  
          <FaUser className={s.icon} />  
          {contact.name}  
        </p>  
        <p>  
          <FaPhone className={s.icon} />  
          {contact.number}  
        </p>  
      </div>  

      <button  
        className={s.buttonlist}  
        onClick={confirmDelete }>
        <FaRegTrashCan />
      </button>  
    </li>  
  );  
}  

export default Contact;