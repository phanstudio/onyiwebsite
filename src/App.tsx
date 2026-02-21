import { Header } from './components/Header';
import { Hero } from './components/LandingPage/Hero';
import { Story } from './components/LandingPage/Story';
import { Contact } from './components/LandingPage/Contact';
import { TechStack } from './components/LandingPage/TechStack';
import { Projects } from './components/LandingPage/Projects';
import { Notes } from './components/LandingPage/Notes';
import { Talks } from './components/LandingPage/Talks';
import { Articles } from './components/LandingPage/Articles';
import { Footer } from './components/Footer';
import { SocialRail } from "./components/SocialRail";

function App() {
  return (
    <div className="min-h-screen bg-[#fefaff]">
      <Header />
      <Hero />
      <Story />
      {/* <TechStack /> */}
      {/* <Projects /> */}
      <Notes />
      {/* <Talks /> */}
      {/* <Articles /> */}
      <Contact />
      <Footer />
      <SocialRail />
    </div>
  );
}

export default App;
