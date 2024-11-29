import React, { useState } from "react"
import { useAuth } from "../../auth/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(username, password)
      setErrorMessage("")
      navigate("/user")
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <main className="login-main">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
            required
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <button type="submit">Start Session</button>
        </form>
      </div>

      <style>{`
        .login-main {
          background-image: radial-gradient(rgba(83, 228, 237, 0.72) 2px, transparent 2px),
                          radial-gradient(rgba(83, 228, 237, 0.72) 2px, transparent 2px);
          background-size: 27px 27px;
          background-position: 0 0, 13.5px 13.5px;
          background-color: #d8d9d9;
          font-family: Arial, sans-serif;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-size: large;
        }

        .form-container {
          width: 500px;
          padding: 50px;
          background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
          border-radius: 8px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        form, h1 {
          text-align: center;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }

        input, button {
          padding: 15px 30px;
          border: unset;
          font-size: small;
          border-radius: 4px;
        }

        button {
          background-color: #4CAF50;
          color: white;
          cursor: pointer;
          font-weight: bold;
        }

        .error-message {
          color: red;
          margin: 10px 0;
        }
      `}</style>
    </main>
  )
}

export default Login
