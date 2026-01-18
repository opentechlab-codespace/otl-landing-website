import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import ServicesPage from '@/pages/services';
import ProjectsPage from '@/pages/projects';
import ContactPage from '@/pages/contact';
import AcademyPage from '@/pages/academy';
import CommunityPage from '@/pages/community';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;