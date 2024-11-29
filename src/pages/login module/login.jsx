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
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1>Bienvenido</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Ingresar →</button>
        </form>
      </div>

      <div className="background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>

      <style>{`
        .login-main {
          background: #0f0f0f;
          min-height: 100vh;
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .circle1 {
          width: 300px;
          height: 300px;
          background: #ff4d4d;
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .circle2 {
          width: 400px;
          height: 400px;
          background: #4d79ff;
          bottom: -150px;
          left: -150px;
          animation: float 10s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 50px); }
        }

        .login-container {
          background: rgba(255, 255, 255, 0.05);
          padding: 3rem;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          width: 90%;
          max-width: 400px;
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        h1 {
          color: white;
          font-size: 2rem;
          margin: 0 0 1.5rem;
          text-align: center;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          color: #ffffff80;
          font-size: 0.9rem;
        }

        input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
        }

        button {
          background: white;
          color: black;
          padding: 1rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        button:hover {
          transform: translateY(-2px);
        }

        .error-message {
          color: #ff4d4d;
          text-align: center;
          margin: 0;
          font-size: 0.9rem;
        }
      `}</style>
    </main>
  )
}

export default Login
