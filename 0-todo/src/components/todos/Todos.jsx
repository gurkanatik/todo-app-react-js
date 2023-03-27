import {useState} from "react";

function TodoItem({todo, category, removeTodo, changeTodoStatus}) {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <div>
                <input className="me-2" type="checkbox" onChange={() => {changeTodoStatus(todo.id, !todo.status)}}/>
                <span className="me-2">{todo.todo}</span>
                <span className="badge bg-primary">{category}</span>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => {
                removeTodo(todo)
            }}><i className="fa fa-trash"></i></button>
        </li>
    )
}

export default function Todos({isVisible, todos, categories, setTodos, setAlertMessage}) {
    const [todo, setTodo] = useState('')
    const [categoryId, setCategoryId] = useState('none')

    function addTodo() {
        if (categoryId !== 'none') {
            if (todo !== '') {
                setTodos([
                    ...todos,
                    {id: Date.now(), todo: todo, status: 0, categoryId: categoryId}
                ])

                setTodo('')
                setAlertMessage('')
            } else {
                setAlertMessage('Please fill the todo input')
            }
        } else {
            setAlertMessage('Before adding todo please add a category')
        }
    }

    function removeTodo(todo) {
        setTodos(todos.filter((item) => item !== todo))
    }

    function changeTodoStatus(id, status = 0) {
        todos.find((todoItem) => todoItem.id === id).status = status
        setTodos(todos)
    }

    return (
        <div className={!isVisible ? 'd-none' : ''}>
            <div className="card mb-4">
                <div className="card-header fw-bold">
                    Add a new todo
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <input type="text" className="form-control"
                                   placeholder="Todo"
                                   value={todo}
                                   onChange={(e) => setTodo(e.target.value)}
                                   onKeyPress={(e) => e.key === 'Enter' && addTodo()}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <select className="form-control" defaultValue="0" onChange={(e) => {
                                setCategoryId(e.target.value)
                            }}>
                                <option value="0" disabled>Select a category</option>
                                {categories.map((category, categoryIndex) => <option key={categoryIndex}
                                                                                     value={categoryIndex}>{category}</option>)}
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-sm btn-success d-table ms-auto mt-2"
                            disabled={categories.length === 0} onClick={addTodo}>Add !
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <span className="fw-bold">Todos</span>
                    <button className="btn btn-sm btn-danger" onClick={() => {setTodos([])}}>Remove All</button>
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
        </div>
    )
}