import {useState, useEffect} from "react";

function CategoryItem({category, removeCategory}) {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <div>
                <span className="me-2">{category}</span>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => {
                removeCategory(category)
            }}><i className="fa fa-trash"></i></button>
        </li>
    )
}

export default function Categories({isVisible, categories, setCategories, setAlertMessage}) {
    const [categoryName, setCategoryName] = useState('')

    function addCategory() {
        if (categoryName !== '') {
            setCategories([
                ...categories,
                [categoryName]
            ]);

            setCategoryName('')
            setAlertMessage('')
        } else {
            setAlertMessage('Please fill the category caption')
        }
    }

    function removeCategory(category) {
        setCategories(categories.filter((item) => item !== category))
    }

    return (
        <div className={!isVisible ? 'd-none' : ''}>
            <div className="card mb-4">
                <div className="card-header fw-bold">
                    Add a new category
                </div>
                <div className="card-body">
                    <input type="text" value={categoryName} className="form-control"
                           onKeyPress={(e) => {
                               e.key === 'Enter' && addCategory()
                           }}
                           onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <button className="btn btn-sm btn-success d-table ms-auto mt-2" onClick={addCategory}>Add !</button>
                </div>
            </div>
            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <span className="fw-bold">Categories</span>
                </div>
                <div className="card-body">
                    {categories.length > 0 && (
                        <ul className="list-group">
                            {categories.map((category, categoryIndex) => <CategoryItem category={category}
                                                                                       removeCategory={removeCategory}
                                                                                       key={categoryIndex}/>)}
                        </ul>
                    )}
                    {categories.length === 0 && (
                        <div className="alert bg-warning text-white mb-0">Categories are empty</div>
                    )}
                </div>
            </div>
        </div>
    )
}