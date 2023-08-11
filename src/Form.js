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
                <div>
                    <input 
                    type="text"
                    value={todo}
                    onChange={(e)=>setToDo(e.target.value)}
                    />
                    <button type="submit">Add New</button>
                </div>
            </form>
        </div>
    )
}

export default Form;