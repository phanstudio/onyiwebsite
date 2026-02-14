export function TechStack() {
  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Gatsby',
    'Svelte', 'Vue.js', 'Node.js', 'Git', 'Github', 'Gitlab', 'React Native',
    'Storybook', 'Figma', 'GraphQL', 'Apollo', 'Webpack', 'Sass',
    'Styled Components', 'TailwindCSS', 'Firebase'
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">WHAT I DO</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">Tech Stack.</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of the technologies I work with and use to build amazing experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            Honestly, the list goes on...
          </button>
        </div>
      </div>
    </section>
  );
}
