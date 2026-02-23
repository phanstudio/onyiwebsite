import { Contact } from "../components/LandingPage/Contact";
import { Notes } from "../components/NotePage/Notes";


function NotePage() {
  return (
    <div className="min-h-[65vh] ">
      <Notes />
      <Contact />
    </div>
  );
}

export default NotePage;
