import Swal from "sweetalert2";
import {v4 as uuidv4} from "uuid"
const ListItem = ({
    item,
    handleItemChecked,
    listItems,
    setListItems
    }) => {
      const {id, name, quantity, unit, checked} = item;
      const deleteListItem = () => {
          const newList = listItems.filter(item => item.id !== id);
          localStorage.setItem("listItems", JSON.stringify(newList));
          setListItems(newList);
      }
      const cloneListItem = () => {
        const newList = [
          ...listItems,
          {
            ...item,
          id: uuidv4(),
        } 
        ];
        localStorage.setItem("listItems", JSON.stringify([]));
        setListItems(newList);
      }
      const editListItems = async () => {
        const {value} = await Swal.fire({
          title: "Item information",
          html: `
          <input 
            class="swal2-input"
            id="name"
            name="name"
            placeholder="name"
            type="text"
            value="${name}"
          />
          <input 
            class="swal2-input"
            id="quantity"
            name="quantity"
            placeholder="quantity"
            type="number"
            value="${quantity}"
          />
          <input
            class="swal2-input"
            id="unit"
            name="unit"
            placeholder="unit"
            type="text"
            value="${unit}"
          />
          `,
          confirmButtonText: "Save item",
          showCancelButton: true,
          cancelButtonText: "Dismiss",
          focusConfirm: false,
          preConfirm: () => {
            const name = Swal.getPopup().querySelector("#name").value;
            const quantity = Swal.getPopup().querySelector("#quantity").value;
            const unit = Swal.getPopup().querySelector("#unit").value;
            if (!name || !quantity || !unit)  {
              Swal.showValidationMessage("Please enter a name");
            }
            return {name, quantity, unit};
          }
        })
        if(!value.name || !value.quantity || !value.unit)
        return;
        const newList = listItems.map((item) => {
          if(item.id === id) {
            item.name = value.name;
            item.quantity = value.quantity;
            item.unit = value.unit;
          }
          return item;
        })
        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems(newList);
    }
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
          <button
            className="btn btn-outline-primary"
            onClick={editListItems}
            type="button"
          >
            <i className="bi bi-pencil-square"></i>
          </button>
          <button 
            className="btn btn-outline-primary"
            onClick={cloneListItem}
            type="button" 
          >
            <i className="bi bi-files"></i>
          </button>
          <button 
            className="btn btn-outline-danger"
            onClick={deleteListItem}
            type="button" 
            >
            <i className="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>
    )
}
export default ListItem;
