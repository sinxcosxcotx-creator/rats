import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#111',
        color: '#eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <img
        src="/logo/RR.png"
        alt="Ratopia Rattery"
        style={{
          width: '200px',
          marginBottom: '2rem',
          opacity: 0.85
        }}
      />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        404 · Page Not Found
      </h1>

      <p style={{ maxWidth: '480px', lineHeight: 1.6, opacity: 0.8 }}>
        The page you are looking for does not exist, or the path is no longer
        valid. This does not mean the project is gone — it only means the route
        is undefined.
      </p>

      <Link
        to="/"
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          border: '1px solid #666',
          borderRadius: '999px',
          textDecoration: 'none',
          color: '#eee'
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
