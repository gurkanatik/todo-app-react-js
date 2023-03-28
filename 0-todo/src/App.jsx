import {useState, useEffect} from 'react'
import './assets/style.css';

import Categories from "./components/categories/Categories.jsx";
import Todos from "./components/todos/Index.jsx";
import AlertMessage from "./components/AlertMessage";

function App() {
    const [activeTab, setActiveTab] = useState('todos')
    const [alertMessage, setAlertMessage] = useState('')
    const [categories, setCategories] = useState(['Work', 'Home', 'School'])
    const [todos, setTodos] = useState([])

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <>
            <div className="container mt-4">
                <div className="col-12 col-md-6 mx-auto">
                    <div className="custom-tabs-head d-flex align-items-center justify-content-start mb-4">
                        <button className={activeTab === 'todos' ? 'bg-secondary text-white' : ''}
                                onClick={() => setActiveTab('todos')}>Todos
                        </button>
                        <button className={activeTab === 'categories' ? 'bg-secondary text-white' : ''}
                                onClick={() => setActiveTab('categories')}>Categories
                        </button>
                    </div>

                    {(alertMessage && <AlertMessage message={alertMessage}/>)}

                    <Todos isVisible={activeTab === 'todos'}
                           categories={categories}
                           todos={todos}
                           setTodos={setTodos}
                           setAlertMessage={setAlertMessage}/>

                    <Categories isVisible={activeTab === 'categories'}
                                categories={categories}
                                setCategories={setCategories}
                                setAlertMessage={setAlertMessage}/>
                </div>
            </div>
        </>
    )
}

export default App
