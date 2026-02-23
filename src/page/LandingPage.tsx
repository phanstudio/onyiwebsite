import { Hero } from '../components/LandingPage/Hero';
import { Story } from '../components/LandingPage/Story';
import { Contact } from '../components/LandingPage/Contact';
import { TechStack } from '../components/LandingPage/TechStack';
import { Projects } from '../components/LandingPage/Projects';
import { Notes } from '../components/LandingPage/Notes';
import { Talks } from '../components/LandingPage/Talks';
import { Articles } from '../components/LandingPage/Articles';

function LandingPage() {
  return (
    <div>
      <Hero />
      <Story />
      <TechStack />
      <Projects />
      <Notes />
      <Talks />
      <Articles />
      <Contact />
    </div>
  );
}

export default LandingPage;
