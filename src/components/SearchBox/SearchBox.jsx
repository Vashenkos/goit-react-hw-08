import s from "./SearchBox.module.css";  
import { useDispatch, useSelector } from "react-redux";  
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";  

function SearchBox() {  
  const dispatch = useDispatch();  
  const filter = useSelector(selectNameFilter);  

  return (  
    <div className={s.containerBox}>  
      <p>Find contacts by name</p>  
      <input  
        className={s.inputBox}  
        type="text"  
        value={filter}  
        onChange={(e) => dispatch(changeFilter(e.target.value))} 
      />  
    </div>  
  );  
}  

export default SearchBox;