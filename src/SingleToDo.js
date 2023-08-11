import { useState } from "react";

const SingleToDo = ({name, completed, id, removeToDo}) => {
    const [isChecked, setIsChecked] = useState(completed)
    return(
        <div className="single-todo">
            <input type="checkbox"
            value={isChecked}
            onChange={()=>setIsChecked(!isChecked)}
            />
            <p style={{textDecoration: isChecked && 'line-through'}}>{name}</p>
            <button className="remove-btn" type="button" onClick={()=>removeToDo(id)}>Remove</button>
        </div>
    )
}

export default SingleToDo;