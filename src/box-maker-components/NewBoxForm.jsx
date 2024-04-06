import { useState } from "react";

const NewBoxForm = ({AddBox}) => {
    const _initialState = {
        color: '',
        width: '',
        height: ''
    }
    const[formData, setFormData] = useState(_initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AddBox({...formData})
        setFormData(_initialState)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input type="text" id="color" name="color" value={formData.color} onChange={handleChange}/>
            <label htmlFor="width">Width:</label>
            <input type="text" id="width" name="width" value={formData.width} onChange={handleChange}/>
            <label htmlFor="height">Height:</label>
            <input type="text" id="height" name="height" value={formData.height} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm;