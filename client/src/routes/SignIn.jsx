import { useState } from "react";
import "../styles/SignIn.css";

async function postSignIn(data) {
  try {
    const response = await fetch('/api/sign-in', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log("Result", result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleOnSumbit = (e) => {
    e.preventDefault();

    (async () => {
      await postSignIn(formData);
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
          <label htmlFor="email">Email*:</label>
          <input 
            id="email"
            type="email" 
            name="email"
            value={formData.email}
            onChange={handlOnChange} 
            placeholder="Email"
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