import Swal from "sweetalert2"

const ClearListButton = ({setListItems}) => {
    const clearList = async () => {
        const {isConfirmed} = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Yes, clear it!"   
        })
        if (isConfirmed) {
            setListItems([])
        }
    }

    return (
        <button
        className="btn btn-outline-danger me-1"
        onClick={clearList}
        type="button"
        >
            <i className="bi bi-trash2"></i>
        </button>
    )
}

export default ClearListButton