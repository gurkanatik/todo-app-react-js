import {useState} from 'react'
import './assets/style.css';

import Categories from "./components/categories/Categories.jsx";
import Todos from "./components/todos/Todos.jsx";

function App() {
    const [activeTab, setActiveTab] = useState('categories')
    return (
        <>
            <div className="container mt-4">
                <div className="col-12 col-md-6 mx-auto">
                    <div className="custom-tabs-head d-flex align-items-center justify-content-start mb-4">
                        <button className={activeTab === 'todos' ? 'bg-secondary text-white' : ''} onClick={() => setActiveTab('todos')}>Todos</button>
                        <button className={activeTab === 'categories' ? 'bg-secondary text-white' : ''} onClick={() => setActiveTab('categories')}>Categories</button>
                    </div>
                    { activeTab === 'todos' && <Todos /> }
                    { activeTab === 'categories' && <Categories /> }
                </div>
            </div>
        </>
    )
}

export default App
