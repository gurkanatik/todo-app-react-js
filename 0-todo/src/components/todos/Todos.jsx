import {useEffect} from "react";

function TodoItem({todo, category, removeTodo, changeStatus}) {
    let classes = 'list-group-item d-flex align-items-center justify-content-between'
    todo.status === true ? classes += ' bg-success text-white' : ''

    return (
        <li className={classes}>
            <div>
                <input className="me-2" type="checkbox" checked={todo.status} onChange={() => {changeStatus(todo.id)}}/>
                <span className="me-2">{todo.todo}</span>
                <span className="badge bg-primary">{category}</span>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => {
                removeTodo(todo)
            }}><i className="fa fa-trash"></i></button>
        </li>
    )
}

export default function ({caption, status, todos, categories, setTodos}) {
    const thisComponentTodos = todos.filter((todoItem) => todoItem.status === status)

    function removeTodo(todo) {
        setTodos(todos.filter((item) => item !== todo))
    }

    function removeAll() {
        setTodos(todos.filter((item) => item.status !== status))
    }

    function changeStatus(id) {
        const newTodos = [...todos]
        newTodos.find((item) => item.id === id).status = !status

        setTodos(newTodos)
    }

    return (
        <>
            <div className="card mb-4">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <span className="fw-bold">{caption}</span>
                    <button className="btn btn-sm btn-danger" onClick={() => {
                        removeAll()
                    }}>Remove All
                    </button>
                </div>
                <div className="card-body">
                    {thisComponentTodos.length > 0 && (
                        <ul className="list-group">
                            {thisComponentTodos.map((todo, todoIndex) =>
                                <TodoItem todo={todo}
                                          category={categories[todo.categoryId]}
                                          changeStatus={changeStatus}
                                          removeTodo={removeTodo}
                                          key={todoIndex}/>)
                            }
                        </ul>
                    )}
                    {thisComponentTodos.length === 0 && (
                        <div className="alert bg-warning text-white mb-0">Todos are empty</div>
                    )}
                </div>
            </div>
        </>
    )
}