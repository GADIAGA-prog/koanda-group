import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import ContactPage from './pages/ContactPage';
import GroupPage from './pages/GroupPage';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NewsPage from './pages/NewsPage';
import PartnersPage from './pages/PartnersPage';
import PresencePage from './pages/PresencePage';
import PolicyPage from './pages/PolicyPage';
import ProjectsPage from './pages/ProjectsPage';
import SubsidiariesPage from './pages/SubsidiariesPage';
import SubsidiaryPage from './pages/SubsidiaryPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/politique-generale" element={<PolicyPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
        </Route>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
