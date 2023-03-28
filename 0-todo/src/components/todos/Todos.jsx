import {useEffect, useState} from "react";

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
    const [categoryId, setCategoryId] = useState('all')
    const thisComponentTodos = todos.filter((todoItem) => {
        if(categoryId === 'all') {
            return todoItem.status === status
        }

        return todoItem.status === status && todoItem.categoryId === categoryId
    })

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

    function filterTodos() {
        if (categoryId === 'all') {
            return thisComponentTodos
        }
        return thisComponentTodos.filter((todoItem) => todoItem.categoryId === categoryId)
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
                    <select className="form-control mb-4" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                        <option value="all">Show All</option>
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