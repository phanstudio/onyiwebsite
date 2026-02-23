// import { Header } from '../Header';s
import { Hero } from './Hero';
import { Story } from './Story';
import { Contact } from './Contact';
import { TechStack } from './TechStack';
import { Projects } from './Projects';
import { Notes } from './Notes';
import { Talks } from './Talks';
import { Articles } from './Articles';
// import { Footer } from '../Footer';
// import { SocialRail } from "../SocialRail";

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
