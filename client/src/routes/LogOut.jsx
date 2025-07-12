import { useEffect } from "react";
import "../styles/LogOut.css";
import { useNavigate, useOutletContext } from "react-router-dom";

async function getLogOut(navigate) {
  try {
    const response = await fetch("/api/log-out");
    const result = await response.json();

    if (result.success) {
      navigate(result.redirectUrl || "/");
    }

    return result; 
  } catch (err) {
    console.error(err)
  }
  
}

function LogOut() {
  const { setUpdateCookie } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await getLogOut(navigate);
      setUpdateCookie(false);
    })()
  }, [])

  return (
    <>

    </>
  )
}

export default LogOut;