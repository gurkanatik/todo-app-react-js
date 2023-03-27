import AddTodo from './AddTodo'
import Todos from './Todos'

export default function Index({isVisible, todos, categories, setTodos, setAlertMessage}) {

    return (
        <div className={!isVisible ? 'd-none' : ''}>
            <AddTodo categories={categories} setTodos={setTodos} todos={todos} setAlertMessage={setAlertMessage}/>
            <Todos
                todos={todos}
                categories={categories}
                setTodos={setTodos}
                status={false}
                caption="Remaining Todos"/>
            <Todos
                todos={todos}
                categories={categories}
                setTodos={setTodos}
                status={true}
                caption="Completed Todos"/>
        </div>
    )
}