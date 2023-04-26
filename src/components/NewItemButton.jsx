import Swal from "sweetalert2"

const NewItemButton = ({listItems, setListItems}) => {
    const  newItemModal = async () => {
      const {value} = await Swal.fire({
        title: "New item Information",
        html: `
        <input 
        class="swal2-input"
        id="name" 
        name="name"
        placeholder="Name" 
        type="text" 
        />
        <input 
        class="swal2-input"
        id="quantity" 
        name="quantity"
        placeholder="Quantity" 
        type="numeric" 
        />
        <input 
        class="swal2-input"
        id="unit" 
        name="unit"
        placeholder="Unit" 
        type="text" 
        />
        `,
        confirmButtonText: "Add item",
        showCancelButton: true,
        cancelButtonText: "Dismiss",
        focusConfirm: false,
        preConfirm: () => {
          const name = Swal.getPopup().querySelector("#name").value;
          const quantity = Swal.getPopup().querySelector("#quantity").value;
          const unit = Swal.getPopup().querySelector("#unit").value;
          if(!name || !quantity || !unit) {
            Swal.showValidationMessage("Please enter a name");
          }
          return {name, quantity, unit};
        }
      })
      if (!value.name || !value.quantity || !value.unit) return;
      setListItems([
        ...listItems,
        {
          id: `${listItems.length + 1}`,
          ...value,
          checked: false,
        }
      ]);     
    }

  return (
    <button 
    className="btn btn-outline-primary"
    onClick={newItemModal}
    type="button" 
>
    <i className="bi bi-plus-circle"></i>
  </button>
  )
}

export default NewItemButton