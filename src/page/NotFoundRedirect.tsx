import { Link, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-[65vh] text-center px-6">
        <h1 className="text-5xl font-bold mb-4">404</h1>

        <p className="text-gray-600 mb-6">
          Page not found: <span className="font-semibold">{location.pathname}</span>
        </p>

        <Link
          to="/"
          className="px-6 py-2 font-semibold bg-amber-500 text-white rounded-lg hover:bg-amber-600"
        >
          Go home
        </Link>
      </section>
      <Footer />
    </>
    
  );
}
