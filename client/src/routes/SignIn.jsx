import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/SignIn.css";

async function postSignIn(data, navigate, setErrorElement) {
  try {
    const response = await fetch('/api/sign-in', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      navigate(result.redirectUrl || "/");
      return true;
    }
    if (!result.success) {
      setErrorElement(result.message);
    }

    if (!response.ok) {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


function SignIn() {
  const { setUpdateCookie } = useOutletContext();
  const navigate = useNavigate();
  const [errorElement, setErrorElement] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleOnSumbit = (e) => {
    e.preventDefault();

    (async () => {
      const data = await postSignIn(formData, navigate, setErrorElement);
      if (data) setUpdateCookie(true);
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
      <div className="sign-in">
        <h1>Sign In</h1>
        { errorElement ? errorContent() : <></> }
        <form 
          action="POST"
          onSubmit={handleOnSumbit}
        >
          <label htmlFor="email">Username*:</label>
          <input 
            id="username"
            type="text" 
            name="username"
            value={formData.username}
            onChange={handlOnChange} 
            placeholder="Username"
            required
          />
          <label htmlFor="password">Password*:</label>
          <input 
            id="password"
            type="password" 
            name="password"
            value={formData.password}
            onChange={handlOnChange} 
            placeholder="Password"
            required
          />
          <button className="btn-sumbit" type="submit">Sumbit</button>
        </form>
      </div>
    </>
  );
}

export default SignIn;