import { Calendar } from 'lucide-react';

export function Notes() {
  const notes = [
    {
      title: '5 Lessons To Learn As A Self-Taught Developer',
      date: 'November 11, 2020',
      readTime: '4 min',
      tags: ['Career', 'Advice'],
      image: 'from-orange-400 to-orange-500'
    },
    {
      title: 'CSS Blend Mode And Filters',
      date: 'October 24, 2020',
      readTime: '5 min',
      tags: ['CSS', 'Tutorial'],
      image: 'from-blue-600 to-blue-800'
    },
    {
      title: 'How To Understand Any Programming Task As A Coding Newbie',
      date: 'October 17, 2020',
      readTime: '4 min',
      tags: ['Advice', 'Tutorial'],
      image: 'from-gray-900 to-gray-800'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">BLOG</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-16">Latest Notes.</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {notes.map((note, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${note.image} relative`}>
                {index === 0 && (
                  <svg className="absolute bottom-4 left-4 w-32 h-16" viewBox="0 0 100 50">
                    <path d="M 10 40 Q 30 20 50 30 T 90 25" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  </svg>
                )}
                {index === 2 && (
                  <div className="absolute bottom-4 right-4 w-24 h-24">
                    <div className="w-full h-full border-4 border-orange-400 rounded-full"></div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 leading-tight">{note.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{note.date}</span>
                  <span>•</span>
                  <span>{note.readTime} read</span>
                </div>
                <div className="flex gap-2">
                  {note.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
            More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
