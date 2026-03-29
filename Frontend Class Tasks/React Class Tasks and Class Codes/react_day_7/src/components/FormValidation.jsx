import React, {useState} from "react";

function FormValidation() {
    const [fromdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    //handle input change
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setFormdata({
            ...fromdata,
            [name]: value,
        });
    };
    // form validation logic
    const validateForm = () => {
        let newErrors = {};

        // name validation
        if (fromdata.name.trim()==="") {
            newErrors.name = "Name is required";
        }
        // email validation
        const emailpattern = /\S+@\S+\.\S+/;
        if (fromdata.email === "") {
            newErrors.email = "Email is required";
        }  else if (!emailpattern.test(fromdata.email)) {
            newErrors.email = "Invalid email format";
        }
        // password validation
        if (fromdata.password === "") {
            newErrors.password = "Password is required";
        }  else if (fromdata.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }   
        return newErrors;   
    };

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors);
        }else {
            alert("Form submitted successfully!");
            setFormdata({
                name: "",
                email: "",
                password: "",
            });
            setErrors({});
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>User Registration</h2>

                <label>Name</label>
                <input type="text" name="name" value={fromdata.name} onChange={handleChange} placeholder = "Enter your name"/>
                {errors.name && <p className="error">{errors.name}</p>}

                <label>Email</label>
                <input type="text" name="email" value={fromdata.email} onChange={handleChange} placeholder = "Enter your email"/>
                {errors.email && <p className="error">{errors.email}</p>}

                <label>Password</label>
                <input type="password" name="password" value={fromdata.password} onChange={handleChange} placeholder = "Enter your password"/>
                {errors.password && <p className="error">{errors.password}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    );      
}

export default FormValidation;