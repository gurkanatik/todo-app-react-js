import {useState} from "react";

function TodoItem({todo, category, removeTodo, changeStatus}) {
    let classes = 'list-group-item d-flex align-items-center justify-content-between'
    todo.status === true ? classes += ' bg-success text-white' : ''

    return (
        <li className={classes}>
            <div>
                <input className="me-2" type="checkbox" checked={todo.status} onChange={() => {
                    changeStatus(todo.id)
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

export default function ({caption, status, todos, categories, setTodos}) {
    const [categoryId, setCategoryId] = useState(-1)

    const thisComponentTodos = todos.filter((item) => {
        if (categoryId === -1) return item.status === status

        return item.status === status && item.categoryId === categoryId
    })

    function removeTodo(todo) {
        setTodos(todos.filter((item) => item !== todo))
    }

    function removeAll() {
        setTodos(todos.filter((item) => {
            if (categoryId === -1) return !(item.status === status)

            return !(item.status === status && item.categoryId === categoryId);
        }))
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
                    }}>Remove All {caption}
                    </button>
                </div>
                <div className="card-body">
                    <select className="form-control mb-4" value={categoryId}
                            onChange={(e) => setCategoryId(parseInt(e.target.value))}>
                        <option value="-1">Show All</option>
                        {categories.map((category, categoryIndex) =>
                            <option key={categoryIndex}
                                    value={categoryIndex}>{category}</option>)}
                    </select>
                    {thisComponentTodos.length > 0 && (
                        <div>
                            <ul className="list-group">
                                {thisComponentTodos.map((todo, todoIndex) =>
                                    <TodoItem todo={todo}
                                              category={categories[todo.categoryId]}
                                              changeStatus={changeStatus}
                                              removeTodo={removeTodo}
                                              key={todoIndex}/>)
                                }
                            </ul>
                        </div>
                    )}
                    {thisComponentTodos.length === 0 && (
                        <div className="alert bg-warning text-white mb-0">Todos are empty</div>
                    )}
                </div>
            </div>
        </>
    )
}