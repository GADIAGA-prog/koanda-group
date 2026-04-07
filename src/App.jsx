import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import ContactPage from './pages/ContactPage';
import GroupPage from './pages/GroupPage';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import PartnersPage from './pages/PartnersPage';
import PresencePage from './pages/PresencePage';
import ProjectsPage from './pages/ProjectsPage';
import SubsidiariesPage from './pages/SubsidiariesPage';
import SubsidiaryPage from './pages/SubsidiaryPage';

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
