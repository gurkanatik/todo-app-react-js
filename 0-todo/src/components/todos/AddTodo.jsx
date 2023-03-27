import {useState} from "react";

export default function ({categories, todos, setTodos, setAlertMessage}) {
    const [todo, setTodo] = useState('')
    const [categoryId, setCategoryId] = useState('none')

    function addTodo() {
        if (categoryId !== 'none') {
            if (todo !== '') {
                setTodos([
                    ...todos,
                    {id: Date.now(), todo: todo, status: false, categoryId: categoryId}
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

    return (
        <>
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
        </>
    )
}