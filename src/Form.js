import { useState } from "react";

const Form = ({addedToDo}) => {
    const [todo, setToDo] = useState('')
    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!todo) return
        addedToDo(todo)
        setToDo('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <input 
                    type="text"
                    className="form-input"
                    value={todo}
                    onChange={(e)=>setToDo(e.target.value)}
                    />
                    <button type="submit" className="btn">Add New</button>
                </div>
            </form>
        </div>
    )
}

export default Form;