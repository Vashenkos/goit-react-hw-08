import ContactForm from "./components/ContactForm/ContactForm";  
import SearchBox from "./components/SearchBox/SearchBox";  
import ContactList from "./components/ContactList/ContactList";  
import { useEffect } from "react";  
import { fetchContacts } from "./redux/contactsOps";  
import { useDispatch, useSelector } from "react-redux";  
import { PropagateLoader } from "react-spinners";  

function App() {  
  const dispatch = useDispatch();  
  const isLoading = useSelector((state) => state.contacts.isLoading);  
  const error = useSelector((state) => state.contacts.error);  
  
  useEffect(() => {  
    dispatch(fetchContacts());  
  }, [dispatch]);  

  return (  
    <div className="container">  
      <h1 className="title">Phonebook</h1>  
      <ContactForm />  
      <SearchBox />  
      {isLoading && !error && (  
        <div className="loader">  
          <PropagateLoader color="#008000" />  
        </div>  
      )}  
      {error && <p>Error: {error}</p>}  
      {!isLoading && !error && <ContactList />}  
    </div>  
  );  
}  

export default App;