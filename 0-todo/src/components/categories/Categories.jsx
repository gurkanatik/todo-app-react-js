import {useState, useEffect} from "react";

function CategoryItem({category}) {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <div>
                <span className="me-2">{ category }</span>
            </div>
            <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
        </li>
    )
}

export default function Categories() {
    const [categories, setCategories] = useState([])
    const [categoryName, setCategoryName] = useState('')

    function addCategory() {
        setCategories([
            ...categories,
            [categoryName]
        ])

        setCategoryName('')
    }

    return (
        <>
            <div className="card mb-4">
                <div className="card-header fw-bold">
                    Add a new category
                </div>
                <div className="card-body">
                    <input type="text" value={categoryName} className="form-control"
                           onKeyPress={(e) => {e.key === 'Enter' && addCategory()}}
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
                            {categories.map((category, categoryIndex) => <CategoryItem category={category} key={categoryIndex} />)}
                        </ul>
                    )}
                    {categories.length === 0 && (
                        <div className="alert bg-warning text-white mb-0">Categories are empty</div>
                    )}
                </div>
            </div>
        </>
    )
}