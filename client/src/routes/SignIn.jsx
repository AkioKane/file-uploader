import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/SignIn.css";

async function postSignIn(data, navigate) {
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

    if (!response.ok) {
      throw new Error(result.message);
    }

    if (result.success) {
      navigate(result.redirectUrl || "/");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleOnSumbit = (e) => {
    e.preventDefault();

    (async () => {
      await postSignIn(formData, navigate);
    })()
  }

  const handlOnChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <div className="sign-in">
        <h1>Sign In</h1>
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