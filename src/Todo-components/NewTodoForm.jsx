import { useState } from "react"
import "./NewTodoForm.css"

const NewTodoForm = ({addTask}) => {
    const[formData, setFormData] = useState('')

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(formData);
        setFormData('');
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="task">New Task: </label>
            <input type="text" onChange={handleChange} id="task" name="task" value={formData}/>
            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;