import React, { useState } from "react"
import { useAuth } from "../../auth/AuthContext" // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom"
import { REST_API } from "../../config"

const Login = () => {
  const { login } = useAuth()

  const navigate = useNavigate()

  const [username, setUsername] = useState("")

  const [password, setPassword] = useState("")

  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(username, password) // Asegúrate de que login acepte un objeto

      setErrorMessage("") // Resetea el mensaje de error si el login es exitoso

      navigate("/user")
    } catch (error) {
      setErrorMessage(error.message) // Captura y establece el mensaje de error
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
