import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Play interactive games and quizzes',
      description: 'A simple web app that helps you play fun games and test your knowledge across various categories.',
      tags: ['React', 'CSS', 'API'],
      color: 'from-pink-200 to-pink-300',
      link: '#'
    },
    {
      title: 'MÆGAN (IN PROGRESS)',
      description: 'Mægan is a learning platform built for Dufuna, with a simple and easy-to-navigate interface.',
      tags: ['React', 'Gatsby', 'GraphQL', 'TypeScript', 'Storybook', 'CSS'],
      color: 'from-gray-100 to-gray-200',
      link: '#'
    },
    {
      title: 'PDF BUILDER',
      description: 'An app that helps you create beautiful and professional resume. Built with react and html2pdf',
      tags: ['React', 'CSS'],
      color: 'from-blue-900 to-blue-800',
      link: '#'
    },
    {
      title: 'THRILLLR–X',
      description: 'This is a simple web application that helps you search and discover TV shows and get details about them.',
      tags: ['React', 'API', 'CSS'],
      color: 'from-purple-500 via-pink-500 to-orange-400',
      link: '#'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">PROJECTS</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects.</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                {index === 0 && (
                  <div className="absolute top-4 right-4 w-16 h-16 bg-pink-400 rounded-lg"></div>
                )}
                {index === 1 && (
                  <div className="absolute bottom-4 left-4 space-y-2">
                    <div className="w-12 h-12 bg-orange-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-yellow-200 rounded-full ml-4"></div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors">
            Explore All Works
          </button>
        </div>
      </div>
    </section>
  );
}
