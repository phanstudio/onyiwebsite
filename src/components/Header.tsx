import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">OHI</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">No Surprises</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Works</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Say Hi</a>
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}
