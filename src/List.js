import SingleToDo from "./SingleToDo";

const List =({todos, removeToDo}) => {
    return (
        <div className="todos">
            <h4>To Do list</h4>
            {todos.map((todo)=> {
                return (
                    <SingleToDo key={todo.id} {...todo} removeToDo = {removeToDo}/>   
                )
            })}
        </div>
    )
}

export default List;