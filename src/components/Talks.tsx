export function Talks() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-64 bg-gray-200 rounded-full opacity-50"></div>
      <div className="absolute top-40 right-10 w-48 h-48 bg-orange-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-32 w-24 h-24 bg-gray-800 rounded-full opacity-70"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">TALKS</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-12">Talks. Open Source. Conferences.</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          I enjoy speaking about topics I'm passionate about.
        </p>
      </div>
    </section>
  );
}
