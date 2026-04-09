import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import koandaHeaderLogo from '../assets/koanda-group-logo-wide.png';
import { footerLinks, groupInfo, navigation, socialLinks } from '../data/siteContent';

function SocialIcon({ platform }) {
  if (platform === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.23-3.56A1.97 1.97 0 0 0 5.2 3a1.98 1.98 0 1 0 0 3.94c1.08 0 1.97-.88 1.97-2Zm13.27 8.02c0-3.46-1.84-5.07-4.29-5.07-1.98 0-2.87 1.09-3.37 1.85V8.5H9.4c.04.82 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.38 1.92-1.38 1.35 0 1.89 1.03 1.89 2.55V20h3.38v-7.04Z" />
      </svg>
    );
  }

  if (platform === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-7.38H16l.38-2.87H13.5V8.91c0-.83.23-1.39 1.42-1.39h1.52V4.95c-.26-.03-1.17-.11-2.22-.11-2.2 0-3.71 1.34-3.71 3.82v2.09H8v2.87h2.5V21h3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23 7.54a2.9 2.9 0 0 0-2.04-2.05C19.16 5 12 5 12 5s-7.16 0-8.96.49A2.9 2.9 0 0 0 1 7.54 30.2 30.2 0 0 0 .5 12 30.2 30.2 0 0 0 1 16.46a2.9 2.9 0 0 0 2.04 2.05C4.84 19 12 19 12 19s7.16 0 8.96-.49A2.9 2.9 0 0 0 23 16.46 30.2 30.2 0 0 0 23.5 12 30.2 30.2 0 0 0 23 7.54ZM9.7 15.02V8.98L15.5 12 9.7 15.02Z" />
    </svg>
  );
}

function SiteLayout() {
  const location = useLocation();
  const [openMenuPath, setOpenMenuPath] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeSubmenuOnNextRoute = useRef(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setMobileMenuOpen(false);

    if (closeSubmenuOnNextRoute.current) {
      closeSubmenuOnNextRoute.current = false;
      setOpenMenuPath(null);
      return;
    }

    setOpenMenuPath(null);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="navbar">
          <NavLink className="brand" to="/" aria-label="Koanda Group">
            <img src={koandaHeaderLogo} alt="Logo Koanda Group" />
          </NavLink>

          <button
            type="button"
            className={`mobile-nav-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            aria-expanded={mobileMenuOpen}
            aria-controls="site-navigation-panel"
            aria-label={mobileMenuOpen ? 'Fermer la navigation' : 'Ouvrir la navigation'}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-panel ${mobileMenuOpen ? 'is-open' : ''}`} id="site-navigation-panel">
            <div className="social-links" aria-label="Réseaux sociaux">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="social-link"
                  href={item.href}
                  aria-label={item.label}
                  title={`${item.label} - lien à configurer`}
                >
                  <SocialIcon platform={item.platform} />
                </a>
              ))}
            </div>

            <nav className="nav-links">
              {navigation.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
                const isOpen = openMenuPath === item.path;

                return (
                  <div className="nav-item" key={item.path}>
                    <NavLink
                      to={item.path}
                      className={isActive ? 'active-link' : ''}
                      onClick={(event) => {
                        if (!item.children) {
                          setMobileMenuOpen(false);
                          return;
                        }

                        if (isActive) {
                          event.preventDefault();
                          setOpenMenuPath((current) => (current === item.path ? null : item.path));
                        } else {
                          setOpenMenuPath(null);
                        }
                      }}
                    >
                      {item.label}
                    </NavLink>

                    {item.children ? (
                      <div className={`nav-submenu ${isOpen ? 'is-open' : ''}`}>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => {
                              closeSubmenuOnNextRoute.current = true;
                              setMobileMenuOpen(false);
                              setOpenMenuPath(null);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <p className="section-tag">Koanda Group</p>
            <h3>Un groupe engagé dans des secteurs structurants.</h3>
            <p>
              Le site reprend la présentation institutionnelle du groupe, ses filiales, ses projets, ses implantations
              et ses partenaires à partir de la plaquette.
            </p>
          </div>

          <div>
            <p className="section-tag">Navigation</p>
            <ul className="footer-list">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-tag">Liens utiles</p>
            <ul className="footer-list">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  {item.path.endsWith('.pdf') ? (
                    <a href={item.path} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <NavLink to={item.path}>{item.label}</NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-tag">Coordonnées</p>
            <ul className="footer-list">
              <li>{groupInfo.postBox}</li>
              <li>{groupInfo.address}</li>
              <li>{groupInfo.phone}</li>
              <li>{groupInfo.contactEmail}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} GSF</p>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
