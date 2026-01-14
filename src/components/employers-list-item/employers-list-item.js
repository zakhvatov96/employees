import './employers-list-item.css';

const EmployersListItem = (props) => {

    const {name, salary, increase, like, onDelete, onToggleProp} = props;

    return (
        <li className={"list-group-item d-flex justify-content-between" + (increase ? ' increase' : '') + (like ? ' like' : '')}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="like">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggleProp} type="button"
                    className="btn-cookie btn-sm " data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete}
                        type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
        );

};

export default EmployersListItem;