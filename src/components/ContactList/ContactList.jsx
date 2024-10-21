import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;