import {useState, useEffect} from 'react'
import './assets/style.css';

import Categories from "./components/categories/Categories.jsx";
import Todos from "./components/todos/Index.jsx";
import AlertMessage from "./components/AlertMessage";

function App() {
    const [activeTab, setActiveTab] = useState('todos')
    const [alertMessage, setAlertMessage] = useState([])
    const [categories, setCategories] = useState(['Work', 'Home', 'School', 'C1', 'C2', 'C3'])
    const [todos, setTodos] = useState([
        {id: 1679967443528, todo: '1', status: false, categoryId: 2},
        {id: 1679967444721, todo: '2', status: false, categoryId: 2},
        {id: 1679967447158, todo: '3', status: false, categoryId: 3},
        {id: 1679967447159, todo: '4', status: true, categoryId: 3}
    ])

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
