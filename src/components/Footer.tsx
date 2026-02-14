import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Are you ready to work with me?</h2>
          <p className="text-gray-600 mb-4">
            I'm always happy to hear from people interested in working together.
          </p>
          <p className="text-gray-600 mb-8">
            If you have an idea, a question or just want to say hello, get in touch by filling in the form below.
          </p>
          <button className="px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors">
            Get in touch
          </button>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© 2020 Olaolu • Constancy</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
