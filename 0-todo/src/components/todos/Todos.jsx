function TodoItem({todo, category, removeTodo, changeTodoStatus}) {
    let classes = 'list-group-item d-flex align-items-center justify-content-between'
    todo.status === true ? classes += ' bg-success text-white' : ''

    return (
        <li className={classes}>
            <div>
                <input className="me-2" type="checkbox" checked={todo.status} onChange={() => {
                    changeTodoStatus(todo.id, !todo.status)
                }}/>
                <span className="me-2">{todo.todo}</span>
                <span className="badge bg-primary">{category}</span>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => {
                removeTodo(todo)
            }}><i className="fa fa-trash"></i></button>
        </li>
    )
}

export default function ({caption, todos, categories, setTodos}) {
    function changeTodoStatus(id, status = 0) {
        const newTodos = [...todos]
        const todoToUpdate = newTodos.find((todoItem) => todoItem.id === id);
        todoToUpdate.status = status;
        setTodos(newTodos);
    }

    function removeTodo(todo) {
        setTodos(todos.filter((item) => item !== todo))
    }

    return (
        <>
            <div className="card mb-4">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <span className="fw-bold">{caption}</span>
                    <button className="btn btn-sm btn-danger" onClick={() => {
                        setTodos([])
                    }}>Remove All
                    </button>
                </div>
                <div className="card-body">
                    {todos.length > 0 && (
                        <ul className="list-group">
                            {todos.map((todo, todoIndex) => <TodoItem todo={todo}
                                                                      category={categories[todo.categoryId]}
                                                                      changeTodoStatus={changeTodoStatus}
                                                                      removeTodo={removeTodo}
                                                                      key={todoIndex}/>)}
                        </ul>
                    )}
                    {todos.length === 0 && (
                        <div className="alert bg-warning text-white mb-0">Todos are empty</div>
                    )}
                </div>
            </div>
        </>
    )
}