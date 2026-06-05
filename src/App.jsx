import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';

const ContactPage = lazy(() => import('./pages/ContactPage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));
const GroupPage = lazy(() => import('./pages/GroupPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const PresencePage = lazy(() => import('./pages/PresencePage'));
const PolicyPage = lazy(() => import('./pages/PolicyPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const SubsidiariesPage = lazy(() => import('./pages/SubsidiariesPage'));
const SubsidiaryPage = lazy(() => import('./pages/SubsidiaryPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));

function PageLoader() {
  return (
    <div className="page-loader" aria-label="Chargement de la page" role="status">
      <div className="page-loader-bar" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/koanda-group" element={<GroupPage />} />
            <Route path="/filiales" element={<SubsidiariesPage />} />
            <Route path="/filiales/:slug" element={<SubsidiaryPage />} />
            <Route path="/projets-et-realisations" element={<ProjectsPage />} />
            <Route path="/implantations" element={<PresencePage />} />
            <Route path="/partenaires" element={<PartnersPage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/actualites/:slug" element={<NewsDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/certificats" element={<CertificatesPage />} />
            <Route path="/politique-generale" element={<PolicyPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
