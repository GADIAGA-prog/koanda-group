import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { fetchAdminSession, loginAdmin } from '../../lib/newsApi';

function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    fetchAdminSession()
      .then((session) => {
        if (active) {
          setAuthenticated(Boolean(session.authenticated));
        }
      })
      .finally(() => {
        if (active) {
          setCheckingSession(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (checkingSession) {
    return (
      <main className="page admin-page">
        <section className="section admin-login-shell">
          <p className="admin-muted">Vérification de la session...</p>
        </section>
      </main>
    );
  }

  if (authenticated) {
    return <Navigate to="/admin" replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await loginAdmin({
        username: username.trim(),
        password: password.trim(),
      });
      setAuthenticated(true);
      const nextPath = location.state?.from?.pathname || '/admin';
      navigate(nextPath, { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="page admin-page">
      <section className="section admin-login-shell">
        <form className="admin-card admin-login-card" onSubmit={handleSubmit}>
          <p className="mini-text">Administration</p>
          <h4>DIRECTRICE DE LA COMMUNICATION</h4>
          <p className="admin-muted">
            Connectez-vous pour créer, modifier, supprimer et publier les articles du site.
          </p>

          <label>
            <span>Identifiant</span>
            <input
              value={username}
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>

          <label>
            <span>Mot de passe</span>
            <input
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          {error ? <p className="form-feedback error">{error}</p> : null}

          <button type="submit" className="button button-primary button-full" disabled={submitting}>
            {submitting ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default AdminLoginPage;
