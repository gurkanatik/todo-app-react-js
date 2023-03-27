import AddTodo from './AddTodo'
import Todos from './Todos'

export default function Index({isVisible, todos, categories, setTodos, setAlertMessage}) {

    return (
        <div className={!isVisible ? 'd-none' : ''}>
            <AddTodo categories={categories} setTodos={setTodos} todos={todos} setAlertMessage={setAlertMessage}/>
            <Todos
                todos={todos.filter((todoItem) => todoItem.status === false)}
                categories={categories}
                setTodos={setTodos}
                caption="Remaining Todos"/>
            <Todos
                todos={todos.filter((todoItem) => todoItem.status === true)}
                categories={categories}
                setTodos={setTodos}
                caption="Completed Todos"/>
        </div>
    )
}