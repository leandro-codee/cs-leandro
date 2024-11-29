import React from "react"
import { useAuth } from "../../auth/AuthContext"
import Loading from "../../helpers/loading"

const User = () => {
  const { auth, loading } = useAuth()

  if (loading) {
    return <Loading />
  }

  if (!auth.token || !auth.user) {
    return (
      <div className="unauthorized-container">
        <div className="message-card">
          <p>No estás autenticado.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="dashboard-main">
      <div className="dashboard-container">
        <div className="welcome-section">
          <h2>Página de Usuario</h2>
          {auth.token && (
            <div className="user-info">
              <div className="avatar-circle">
                {auth.user?.data.firstname.charAt(0).toUpperCase()}
              </div>
              <h1>
                ¡Hola,{" "}
                <span className="username">{auth.user?.data.firstname}</span>!
              </h1>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .dashboard-main {
          background-image: radial-gradient(rgba(83, 228, 237, 0.72) 2px, transparent 2px),
                          radial-gradient(rgba(83, 228, 237, 0.72) 2px, transparent 2px);
          background-size: 27px 27px;
          background-position: 0 0, 13.5px 13.5px;
          background-color: #d8d9d9;
          min-height: 100vh;
          padding: 2rem;
          font-family: Arial, sans-serif;
        }

        .dashboard-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .welcome-section {
          text-align: center;
        }

        .welcome-section h2 {
          color: #333;
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .avatar-circle {
          width: 80px;
          height: 80px;
          background: #4CAF50;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .username {
          color: #4CAF50;
          font-weight: bold;
        }

        .unauthorized-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: radial-gradient(rgba(83, 228, 237, 0.72) 2px, transparent 2px),
                          radial-gradient(rgba(83, 228, 237, 0.72) 2px, transparent 2px);
          background-size: 27px 27px;
          background-position: 0 0, 13.5px 13.5px;
          background-color: #d8d9d9;
        }

        .message-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          color: #666;
          font-size: 1.2rem;
        }

        h1 {
          color: #333;
          margin: 0;
          font-size: 2rem;
        }
      `}</style>
    </main>
  )
}

export default User
