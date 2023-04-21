import Swal from "sweetalert2"

const NewItemButton = () => {
    const  newItemModal = () => {
         
Swal.fire('Any fool can use a computer')
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