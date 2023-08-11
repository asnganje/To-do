import SingleToDo from "./SingleToDo";

const List =({todos}) => {
    return (
        <div>
            <h4>To Do list</h4>
            {todos.map((todo)=> {
                return (
                    <SingleToDo key={todo.id} {...todo}/>   
                )
            })}
        </div>
    )
}

export default List;