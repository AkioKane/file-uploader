import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/SignUp.css";

async function postSignUp(data, navigate, setErrorElement) {
  try {
    const response = await fetch('/api/sign-up/', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    if (!result.success) {
      setErrorElement(result.message);
    }

    if (result.success) {
      navigate(result.redirectUrl || "/");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function SignUp() {
  const navigate = useNavigate();
  const [errorElement, setErrorElement] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleOnSumbit = (e) => {
    e.preventDefault();

    (async () => {
      await postSignUp(formData, navigate, setErrorElement);
    })()
  }

  const handlOnChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  }

  const errorContent = () => {
    return (
      <>
        <div className="error-container">
          <span>{errorElement}</span>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="sign-up">
        <h1>Sign Up</h1>
        { errorElement ? errorContent() : <></> }
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
            type="password" 
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