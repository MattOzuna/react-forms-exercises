import { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ AddBox }) => {
  const _initialState = {
    color: "",
    width: "",
    height: "",
  };
  const [formData, setFormData] = useState(_initialState);

  const isValidColor = (strColor) => {
    const test = new Option().style;
    test.color = strColor;
    return test.color == strColor.toLowerCase();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.width = Math.round(formData.width);
    formData.height = Math.round(formData.height);
    if (!isValidColor(formData.color)) formData.color = "white";
    AddBox({ ...formData });
    setFormData(_initialState);
  };

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="color">Color: </label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="width">Width: </label>
        <input
          type="number"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height: </label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default NewBoxForm;
