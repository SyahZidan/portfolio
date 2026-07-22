import { lazy, Suspense, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SignalStrip } from "./components/SignalStrip";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Journey } from "./components/Journey";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Identity } from "./components/Identity";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SiteBackground } from "./components/SiteBackground";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useApp } from "./context/AppContext";
import type { Project, JourneyItem } from "./types/portfolio";

const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((module) => ({ default: module.ProjectsPage }))
);
const ProjectModal = lazy(() =>
  import("./components/ProjectModal").then((module) => ({ default: module.ProjectModal }))
);
const JourneyModal = lazy(() =>
  import("./components/JourneyModal").then((module) => ({ default: module.JourneyModal }))
);

function App() {
  useSmoothScroll();
  const { currentPage } = useApp();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const [selectedJourney, setSelectedJourney] = useState<JourneyItem | null>(null);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsProjectOpen(true);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setIsProjectOpen(false);
  };

  const handleOpenJourney = (item: JourneyItem) => {
    setSelectedJourney(item);
    setIsJourneyOpen(true);
  };

  const handleCloseJourney = () => {
    setSelectedJourney(null);
    setIsJourneyOpen(false);
  };

  if (currentPage === "projects") {
    return (
      <>
        <SiteBackground />
        <Navbar />
        <Suspense fallback={null}>
          <ProjectsPage onOpenProject={handleOpenProject} />
        </Suspense>
        <Footer />
        {isProjectOpen && (
          <Suspense fallback={null}>
            <ProjectModal
              isOpen={isProjectOpen}
              onClose={handleCloseProject}
              project={selectedProject}
            />
          </Suspense>
        )}
      </>
    );
  }

  return (
    <>
      <SiteBackground />
      <Navbar />
      <main>
        <Hero />
        <SignalStrip />
        <About />
        <Work onOpenProject={handleOpenProject} />
        <Journey onOpenJourney={handleOpenJourney} />
        <Education />
        <Skills />
        <Certificates onOpenJourney={handleOpenJourney} />
        <Identity />
        <Contact />
      </main>
      <Footer />

      {isProjectOpen && (
        <Suspense fallback={null}>
          <ProjectModal
            isOpen={isProjectOpen}
            onClose={handleCloseProject}
            project={selectedProject}
          />
        </Suspense>
      )}
      {isJourneyOpen && (
        <Suspense fallback={null}>
          <JourneyModal
            isOpen={isJourneyOpen}
            onClose={handleCloseJourney}
            item={selectedJourney}
          />
        </Suspense>
      )}
    </>
  );
}

export default App;
