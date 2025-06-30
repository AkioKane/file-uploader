import { useState } from "react";
import "../styles/SignUp.css";

async function postSignUp(data) {
  try {
    const response = await fetch('/api/sign-in', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log("Result", result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleOnSumbit = (e) => {
    e.preventDefault();

    postSignUp(formData)
  }

  const handlOnChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="sign-up">
        <h1>Sign Up</h1>
        <form 
          action="POST"
          onSubmit={handleOnSumbit}
        >
          <label htmlFor="name">Name*:</label>
          <input 
            id="name"
            type="text" 
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handlOnChange} 
            required
          />
          <label htmlFor="email">Email*:</label>
          <input 
            id="email"
            type="email" 
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handlOnChange} 
            required
          />
          <label htmlFor="password">Password*:</label>
          <input 
            id="password"
            type="text" 
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handlOnChange} 
            required
          />
          <button className="btn-sumbit" type="submit">Sumbit</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;