import React, { useState } from "react";
import "../styles/Form.css";

const Form = ({ formData }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form values:", values);
      alert(JSON.stringify(values, null, 2));
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    formData.forEach((field) => {
      if (field.required && !values[field.name]) {
        errors[field.name] = `${field.label} is required`;
      }
    });
    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formData.map((field, index) => (
          <div key={index} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={values[field.name] || ""}
                onChange={handleChange}
                className={`form-control ${errors[field.name] && "is-invalid"}`}
                required={field.required}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={values[field.name] || ""}
                onChange={handleChange}
                className={`form-control ${errors[field.name] && "is-invalid"}`}
                required={field.required}
              />
            )}
            {errors[field.name] && (
              <div className="invalid-feedback">{errors[field.name]}</div>
            )}
          </div>
        ))}
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
