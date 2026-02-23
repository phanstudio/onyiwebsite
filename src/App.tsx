import LandingPage from "./page/LandingPage";
import { Layout } from './components/layout';
import { Route, Routes } from 'react-router-dom';
import NotePage from "./page/NotePage";
import NotFoundRedirect from "./page/NotFoundRedirect";


function App() {
  return (
    <div className="min-h-screen bg-[#fefaff]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/notes" element={<NotePage />} />
          {/* <Route path="/art" element={<Art />} /> */}
          {/* <Route path="*" element={<NotFoundRedirect />} /> */}
        </Route>
        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
    </div>
  );
}

export default App;
