const User = () => {
  const { auth, loading } = useAuth()

  if (loading) {
    return <Loading />
  }

  if (!auth.token || !auth.user) {
    return (
      <div className="unauthorized-container">
        <div className="unauthorized-message">
          <span className="icon">⚠️</span>
          <p>Acceso Denegado</p>
        </div>
      </div>
    )
  }

  return (
    <main className="dashboard-main">
      <nav className="top-nav">
        <div className="user-welcome">
          <span className="avatar">{auth.user?.data.firstname.charAt(0)}</span>
          <span className="greeting">
            Bienvenido, {auth.user?.data.firstname}
          </span>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="widget">
          <h2>Panel de Control</h2>
          <p>¿Qué te gustaría hacer hoy?</p>
        </div>
      </div>

      <style>{`
        .dashboard-main {
          background: #0f0f0f;
          min-height: 100vh;
          color: white;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .top-nav {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .user-welcome {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar {
          background: linear-gradient(45deg, #ff4d4d, #4d79ff);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          font-weight: bold;
        }

        .greeting {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .dashboard-content {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .widget {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 2rem;
        }

        .widget h2 {
          margin: 0;
          font-size: 1.5rem;
          background: linear-gradient(45deg, #ff4d4d, #4d79ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .widget p {
          color: rgba(255, 255, 255, 0.6);
          margin: 1rem 0 0;
        }

        .unauthorized-container {
          background: #0f0f0f;
          min-height: 100vh;
          display: grid;
          place-items: center;
        }

        .unauthorized-message {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .unauthorized-message .icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }

        .unauthorized-message p {
          color: #ff4d4d;
          margin: 0;
          font-size: 1.2rem;
        }
      `}</style>
    </main>
  )
}

export default User
