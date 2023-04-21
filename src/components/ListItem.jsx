const ListItem = ({
    id,
    name,
    quantity,
    unit,
    checked,
    handleItemChecked
    }) => {
    return (
        <div className="row">
        <div className="col">
          <input
          checked={checked}
          name={id}
          onClick={(e) => handleItemChecked(e)}
          type="checkbox"
          />
        </div>
        <div className="col-2 text-start">
          {
            checked ? 
            <del>{`${quantity} ${unit}`}</del> :
            `${quantity} ${unit}`
          }
        </div>
        <div className="col-5 col-md-6 text-start"
          style={{textDecoration: checked && "line-through"}}
          >
            {name}
          </div>
        <div className="col-4 col-md-3 btn-group btn-group-sm" role="groups">
          <button type="button" className="btn btn-outline-primary">
            <i className="bi bi-pencil-square"></i>
          </button>
          <button type="button" className="btn btn-outline-primary">
            <i className="bi bi-files"></i>
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i className="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>
    )
}
export default ListItem;
