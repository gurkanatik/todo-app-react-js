export default function Categories() {
    return (
        <>
            <div className="card mb-4">
                <div className="card-header fw-bold">
                    Add a new category
                </div>
                <div className="card-body">
                    <input type="text" className="form-control"/>
                    <button className="btn btn-sm btn-success d-table ms-auto mt-2">Add !</button>
                </div>
            </div>
            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <span className="fw-bold">Categories</span>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item d-flex align-items-center justify-content-between">
                            <div>
                                <span className="me-2">Category Name</span>
                            </div>
                            <button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}