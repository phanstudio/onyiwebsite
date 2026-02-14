export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">HELLO! MY NAME IS OLAOLU OLAWUYI</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              I build Web Interfaces.
            </h1>
            <p className="text-gray-600 mb-8">...and I'm passionate about creating amazing experiences.</p>
            <button className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors">
              Learn more
            </button>
          </div>
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-amber-100 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-800 rounded-full"></div>
              </div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-orange-300 rounded-full"></div>
              <div className="absolute bottom-0 left-8 w-20 h-20 bg-amber-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
